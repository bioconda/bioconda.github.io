:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msbuddy'
.. highlight: bash

msbuddy
=======

.. conda:recipe:: msbuddy
   :replaces_section_title:
   :noindex:

   Molecular formula annotation for MS\-based small molecule analysis

   :homepage: https://github.com/Philipbear/msbuddy
   :documentation: https://msbuddy.readthedocs.io/
   
   :license: APACHE / Apache-2.0
   :recipe: /`msbuddy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msbuddy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msbuddy/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-023-01850-x`

   msbuddy performs bottom\-up MS\/MS interrogation for molecular formula
   annotation of small molecules \(below \~1500 Da\)\, with false discovery rate
   estimation. It accepts a precursor m\/z plus ionization polarity as the
   minimum query\, and optionally MS1 isotope patterns and\/or MS\/MS spectra.
   msbuddy does not perform adduct annotation \-\- the correct adduct must be
   supplied by the user.



.. conda:package:: msbuddy

   |downloads_msbuddy| |docker_msbuddy|

   :versions:
      
      

      ``0.3.16-0``

      

   
   :depends on brain-isotopic-distribution: 
   :depends on chemparse: 
   :depends on gdown: 
   :depends on joblib: 
   :depends on lightgbm: 
   :depends on numba: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.9,<3.13``
   :depends on requests: 
   :depends on scipy: 
   :depends on tqdm: 

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

    pixi global install msbuddy

to add into an existing workspace instead, run::

    pixi add msbuddy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install msbuddy

Alternatively, to install into a new environment, run::

    conda create -n envname msbuddy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/msbuddy:<tag>

(see `msbuddy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_msbuddy| image:: https://img.shields.io/conda/dn/bioconda/msbuddy.svg?style=flat
   :target: https://anaconda.org/bioconda/msbuddy
   :alt:   (downloads)
.. |docker_msbuddy| image:: https://quay.io/repository/biocontainers/msbuddy/status
   :target: https://quay.io/repository/biocontainers/msbuddy
.. _`msbuddy/tags`: https://quay.io/repository/biocontainers/msbuddy?tab=tags


.. raw:: html

   <script>
      var package = "msbuddy";
      var versions = ["0.3.16"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_msbuddy"></div>
   <div style="width: 100%" id="platform_plot_msbuddy"></div>
   <div style="width: 100%" id="cdf_plot_msbuddy"></div>



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
         
            // Build cdf plot for msbuddy
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/msbuddy/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_msbuddy', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for msbuddy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/msbuddy/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_msbuddy', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for msbuddy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/msbuddy/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_msbuddy', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msbuddy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msbuddy/README.html