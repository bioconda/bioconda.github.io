:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scicone'
.. highlight: bash

scicone
=======

.. conda:recipe:: scicone
   :replaces_section_title:
   :noindex:

   Single\-cell copy number calling and event history reconstruction

   :homepage: https://github.com/cbg-ethz/SCICoNE
   :documentation: https://github.com/cbg-ethz/SCICoNE/blob/master/docs/tutorial.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`scicone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scicone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scicone/meta.yaml>`_

   SCICoNE is a statistical model and MCMC algorithm tailored to single\-cell
   copy number profiling from shallow whole\-genome DNA sequencing data. It
   reconstructs the history of copy number events in the tumour and uses these
   evolutionary relationships to identify the copy number profiles of the
   individual cells. This package provides the command line executables
   \(prefixed with \`scicone\-\`\) and the \`scicone\` Python interface to them.



.. conda:package:: scicone

   |downloads_scicone| |docker_scicone|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on __osx: ``>=10.13``
   :depends on graphviz: 
   :depends on h5py: 
   :depends on libcxx: ``>=19``
   :depends on llvm-openmp: ``>=19.1.7``
   :depends on matplotlib-base: 
   :depends on nlopt: ``>=2.10.1,<2.11.0a0``
   :depends on numpy: 
   :depends on pandas: 
   :depends on phenograph: 
   :depends on pybiomart: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-graphviz: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: 
   :depends on seaborn: 

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

    pixi global install scicone

to add into an existing workspace instead, run::

    pixi add scicone

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scicone

Alternatively, to install into a new environment, run::

    conda create -n envname scicone

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scicone:<tag>

(see `scicone/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scicone| image:: https://img.shields.io/conda/dn/bioconda/scicone.svg?style=flat
   :target: https://anaconda.org/bioconda/scicone
   :alt:   (downloads)
.. |docker_scicone| image:: https://quay.io/repository/biocontainers/scicone/status
   :target: https://quay.io/repository/biocontainers/scicone
.. _`scicone/tags`: https://quay.io/repository/biocontainers/scicone?tab=tags


.. raw:: html

   <script>
      var package = "scicone";
      var versions = ["1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_scicone"></div>
   <div style="width: 100%" id="platform_plot_scicone"></div>
   <div style="width: 100%" id="cdf_plot_scicone"></div>



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
         
            // Build cdf plot for scicone
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/scicone/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_scicone', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for scicone
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/scicone/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_scicone', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for scicone
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/scicone/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_scicone', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scicone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scicone/README.html