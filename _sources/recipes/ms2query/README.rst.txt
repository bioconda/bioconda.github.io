:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ms2query'
.. highlight: bash

ms2query
========

.. conda:recipe:: ms2query
   :replaces_section_title:
   :noindex:

   Reliable and fast MS\/MS spectral based analogue search.

   :homepage: https://github.com/iomega/ms2query
   :documentation: https://github.com/iomega/ms2query/blob/1.5.4/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`ms2query <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2query>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2query/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-023-37446-4`

   


.. conda:package:: ms2query

   |downloads_ms2query| |docker_ms2query|

   :versions:
      
      

      ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends on gensim: ``>=4.0.0``
   :depends on h5py: 
   :depends on matchms: ``>=0.24.0,<=0.26.4``
   :depends on matplotlib-base: 
   :depends on ms2deepscore: ``2.0.0``
   :depends on numpy: 
   :depends on onnx: ``<1.16.2``
   :depends on onnxruntime: ``<1.16``
   :depends on pandas: 
   :depends on pyarrow: 
   :depends on python: ``>=3.9``
   :depends on pytorch: ``<2.6``
   :depends on scikit-learn: 
   :depends on skl2onnx: 
   :depends on spec2vec: ``>=0.6.0``
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

    pixi global install ms2query

to add into an existing workspace instead, run::

    pixi add ms2query

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ms2query

Alternatively, to install into a new environment, run::

    conda create -n envname ms2query

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ms2query:<tag>

(see `ms2query/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ms2query| image:: https://img.shields.io/conda/dn/bioconda/ms2query.svg?style=flat
   :target: https://anaconda.org/bioconda/ms2query
   :alt:   (downloads)
.. |docker_ms2query| image:: https://quay.io/repository/biocontainers/ms2query/status
   :target: https://quay.io/repository/biocontainers/ms2query
.. _`ms2query/tags`: https://quay.io/repository/biocontainers/ms2query?tab=tags


.. raw:: html

   <script>
      var package = "ms2query";
      var versions = ["1.5.4","1.5.3","1.5.2","1.5.1","1.5.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_ms2query"></div>
   <div style="width: 100%" id="platform_plot_ms2query"></div>
   <div style="width: 100%" id="cdf_plot_ms2query"></div>



   ..
      Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for ms2query
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ms2query/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_ms2query', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for ms2query
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ms2query/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_ms2query', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for ms2query
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ms2query/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_ms2query', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms2query/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms2query/README.html