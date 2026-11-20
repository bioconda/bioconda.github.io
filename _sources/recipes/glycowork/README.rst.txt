:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'glycowork'
.. highlight: bash

glycowork
=========

.. conda:recipe:: glycowork
   :replaces_section_title:
   :noindex:

   The Python package for glycan data science\, from any glycan notation to motif analysis\, SNFG drawing and glycomics statistics

   :homepage: https://github.com/BojarLab/glycowork
   :documentation: https://bojarlab.github.io/glycowork/
   
   :license: MIT / MIT
   :recipe: /`glycowork <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glycowork>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glycowork/meta.yaml>`_
   :links: doi: :doi:`10.1093/glycob/cwab067`

   glycowork processes and analyzes glycan sequences. It reads IUPAC\-condensed\/extended\, WURCS\, GlycoCT\,
   GlyTouCan IDs\, Oxford\, LinearCode and more\, and provides motif annotation\, SNFG drawing \(GlycoDraw\)\,
   differential glycomics statistics\, biosynthetic network construction and curated glycan datasets.
   Deep learning functionality \(glycowork.ml\) needs PyTorch and PyTorch Geometric installed separately.



.. conda:package:: glycowork

   |downloads_glycowork| |docker_glycowork|

   :versions:
      
      

      ``1.12.0-0``,  ``1.11.0-0``

      

   
   :depends on glycorender: ``>=0.5.8,<0.6``
   :depends on networkx: ``>=3.4``
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: ``>=2.2.2``
   :depends on python: ``>=3.11``
   :depends on scipy: ``>=1.16``
   :depends on viscose: ``>=0.3.1,<0.4``

   :additional platforms:
      


Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install glycowork

to add into an existing workspace instead, run::

    pixi add glycowork

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install glycowork

Alternatively, to install into a new environment, run::

    conda create -n envname glycowork

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/glycowork:<tag>

(see `glycowork/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_glycowork| image:: https://img.shields.io/conda/dn/bioconda/glycowork.svg?style=flat
   :target: https://anaconda.org/bioconda/glycowork
   :alt:   (downloads)
.. |docker_glycowork| image:: https://quay.io/repository/biocontainers/glycowork/status
   :target: https://quay.io/repository/biocontainers/glycowork
.. _`glycowork/tags`: https://quay.io/repository/biocontainers/glycowork?tab=tags


.. raw:: html

   <script>
      var package = "glycowork";
      var versions = ["1.12.0","1.11.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_glycowork"></div>
   <div style="width: 100%" id="platform_plot_glycowork"></div>
   <div style="width: 100%" id="cdf_plot_glycowork"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for glycowork
            try {
               const cdf_spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/cdf.vl.json")
               if (!cdf_spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_spec_resp.status}.`);
               }
               const cdf_spec = await cdf_spec_resp.json();
               const cdf_data_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cdf.json")
               if (!cdf_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_data_resp.status}.`);
               }
               const cdf_plot_data = await cdf_data_resp.json();
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/glycowork/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_glycowork', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for glycowork
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/glycowork/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_glycowork', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for glycowork
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/glycowork/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_glycowork', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glycowork/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glycowork/README.html