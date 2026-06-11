:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq2squiggle'
.. highlight: bash

seq2squiggle
============

.. conda:recipe:: seq2squiggle
   :replaces_section_title:
   :noindex:

   End\-to\-end simulation of nanopore sequencing signals with feed\-forward transformers

   :homepage: https://github.com/ZKI-PH-ImageAnalysis/seq2squiggle
   :license: MIT
   :recipe: /`seq2squiggle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2squiggle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2squiggle/meta.yaml>`_

   


.. conda:package:: seq2squiggle

   |downloads_seq2squiggle| |docker_seq2squiggle|

   :versions:
      
      

      ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends on appdirs: ``>=1.4.4,<2.0.0``
   :depends on lightning: ``>=2.2.5,<3.0.0``
   :depends on matplotlib-base: ``>=3.9.0,<4.0.0``
   :depends on numba: ``>=0.59.0,<0.60.0``
   :depends on numpy: ``>=1.26.4,<2.0.0``
   :depends on ont_vbz_hdf_plugin: ``>=1.0.1``
   :depends on pod5: ``>=0.3.12,<0.4.0``
   :depends on prettytable: ``>=3.9.0,<4.0.0``
   :depends on pygithub: ``>=2.3.0,<3.0.0``
   :depends on pysam: ``>=0.22.0,<0.23.0``
   :depends on pyslow5: ``>=1.1.0,<2.0.0``
   :depends on python: ``>=3.10.0,<4.0.0``
   :depends on pytorch: ``>=2.3.1,<3.0.0``
   :depends on pyyaml: ``>=6.0.1,<7.0.0``
   :depends on rich-click: ``>=1.8.2,<2.0.0``
   :depends on scikit-learn: ``>=1.4.0,<2.0.0``
   :depends on tqdm: ``>=4.66.2,<5.0.0``
   :depends on transformers: ``>=4.41.2,<5.0.0``
   :depends on wandb: ``>=0.16.3,<0.17.0``

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

    pixi global install seq2squiggle

to add into an existing workspace instead, run::

    pixi add seq2squiggle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seq2squiggle

Alternatively, to install into a new environment, run::

    conda create -n envname seq2squiggle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seq2squiggle:<tag>

(see `seq2squiggle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seq2squiggle| image:: https://img.shields.io/conda/dn/bioconda/seq2squiggle.svg?style=flat
   :target: https://anaconda.org/bioconda/seq2squiggle
   :alt:   (downloads)
.. |docker_seq2squiggle| image:: https://quay.io/repository/biocontainers/seq2squiggle/status
   :target: https://quay.io/repository/biocontainers/seq2squiggle
.. _`seq2squiggle/tags`: https://quay.io/repository/biocontainers/seq2squiggle?tab=tags


.. raw:: html

   <script>
      var package = "seq2squiggle";
      var versions = ["0.3.4","0.3.3","0.3.2","0.3.1","0.3.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_seq2squiggle"></div>
   <div style="width: 100%" id="platform_plot_seq2squiggle"></div>
   <div style="width: 100%" id="cdf_plot_seq2squiggle"></div>



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
         
            // Build cdf plot for seq2squiggle
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/seq2squiggle/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_seq2squiggle', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for seq2squiggle
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/seq2squiggle/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_seq2squiggle', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for seq2squiggle
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/seq2squiggle/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_seq2squiggle', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2squiggle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2squiggle/README.html