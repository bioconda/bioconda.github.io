:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mist-cf'
.. highlight: bash

mist-cf
=======

.. conda:recipe:: mist-cf
   :replaces_section_title:
   :noindex:

   MIST\-CF \- predicting MS1 precursor chemical formula from MS\/MS data

   :homepage: https://github.com/samgoldman97/mist-cf
   :license: MIT / MIT
   :recipe: /`mist-cf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mist-cf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mist-cf/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.jcim.3c01082`

   MIST\-CF predicts the chemical formula of an MS1 precursor from its MS\/MS
   spectrum\, using formula transformers over subformula assignments.

   Model weights are not included and must be installed separately.



.. conda:package:: mist-cf

   |downloads_mist-cf| |docker_mist-cf|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on cairosvg: 
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on multiprocess: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pathos: 
   :depends on python: ``>=3.9``
   :depends on pytorch: 
   :depends on pytorch-lightning: ``>=2``
   :depends on pyyaml: 
   :depends on ray-tune: ``>=2.49.1``
   :depends on rdkit: 
   :depends on scikit-learn: 
   :depends on seaborn: 
   :depends on sirius-csifingerid: ``>=5.8.6,<6``
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

    pixi global install mist-cf

to add into an existing workspace instead, run::

    pixi add mist-cf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mist-cf

Alternatively, to install into a new environment, run::

    conda create -n envname mist-cf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mist-cf:<tag>

(see `mist-cf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mist-cf| image:: https://img.shields.io/conda/dn/bioconda/mist-cf.svg?style=flat
   :target: https://anaconda.org/bioconda/mist-cf
   :alt:   (downloads)
.. |docker_mist-cf| image:: https://quay.io/repository/biocontainers/mist-cf/status
   :target: https://quay.io/repository/biocontainers/mist-cf
.. _`mist-cf/tags`: https://quay.io/repository/biocontainers/mist-cf?tab=tags


.. raw:: html

   <script>
      var package = "mist-cf";
      var versions = ["1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_mist-cf"></div>
   <div style="width: 100%" id="platform_plot_mist-cf"></div>
   <div style="width: 100%" id="cdf_plot_mist-cf"></div>



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
         
            // Build cdf plot for mist-cf
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mist-cf/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_mist-cf', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for mist-cf
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mist-cf/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_mist-cf', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for mist-cf
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/mist-cf/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_mist-cf', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mist-cf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mist-cf/README.html