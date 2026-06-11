:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gcnvkernel'
.. highlight: bash

gcnvkernel
==========

.. conda:recipe:: gcnvkernel
   :replaces_section_title:
   :noindex:

   Python package to support GATK gCNV calling.

   :homepage: https://www.broadinstitute.org/gatk/
   :developer docs: https://github.com/broadinstitute/gatk
   :license: BSD / BSD-3-Clause
   :recipe: /`gcnvkernel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcnvkernel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcnvkernel/meta.yaml>`_

   


.. conda:package:: gcnvkernel

   |downloads_gcnvkernel| |docker_gcnvkernel|

   :versions:
      
      

      ``0.9-0``,  ``0.8-1``,  ``0.8-0``,  ``0.7-0``

      

   
   :depends on biopython: ``1.84.*``
   :depends on blas: ``1.0 mkl``
   :depends on dill: ``0.3.7.*``
   :depends on h5py: ``3.10.0.*``
   :depends on matplotlib: ``3.8.2.*``
   :depends on numpy: ``1.26.2.*``
   :depends on pandas: ``2.1.3.*``
   :depends on pip: ``23.3.1.*``
   :depends on pymc: ``5.10.1.*``
   :depends on pysam: ``0.22.0.*``
   :depends on pytensor: ``2.18.3.*``
   :depends on python: ``3.10.13.*``
   :depends on pytorch: ``2.1.0 *mkl*100``
   :depends on pytorch-lightning: ``2.4.0.*``
   :depends on pyvcf: ``0.6.8.*``
   :depends on r-backports: ``1.4.1.*``
   :depends on r-base: ``4.3.1.*``
   :depends on r-data.table: ``1.14.8.*``
   :depends on r-dplyr: ``1.1.3.*``
   :depends on r-getopt: ``1.20.4.*``
   :depends on r-ggplot2: ``3.4.4.*``
   :depends on r-gplots: ``3.1.3.*``
   :depends on r-gsalib: ``2.2.1.*``
   :depends on r-optparse: ``1.7.3.*``
   :depends on scikit-learn: ``1.3.2.*``
   :depends on scipy: ``1.11.4.*``
   :depends on tqdm: ``4.66.1.*``

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

    pixi global install gcnvkernel

to add into an existing workspace instead, run::

    pixi add gcnvkernel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gcnvkernel

Alternatively, to install into a new environment, run::

    conda create -n envname gcnvkernel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gcnvkernel:<tag>

(see `gcnvkernel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gcnvkernel| image:: https://img.shields.io/conda/dn/bioconda/gcnvkernel.svg?style=flat
   :target: https://anaconda.org/bioconda/gcnvkernel
   :alt:   (downloads)
.. |docker_gcnvkernel| image:: https://quay.io/repository/biocontainers/gcnvkernel/status
   :target: https://quay.io/repository/biocontainers/gcnvkernel
.. _`gcnvkernel/tags`: https://quay.io/repository/biocontainers/gcnvkernel?tab=tags


.. raw:: html

   <script>
      var package = "gcnvkernel";
      var versions = ["0.9","0.8","0.8","0.7"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_gcnvkernel"></div>
   <div style="width: 100%" id="platform_plot_gcnvkernel"></div>
   <div style="width: 100%" id="cdf_plot_gcnvkernel"></div>



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
         
            // Build cdf plot for gcnvkernel
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gcnvkernel/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_gcnvkernel', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for gcnvkernel
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gcnvkernel/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_gcnvkernel', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for gcnvkernel
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gcnvkernel/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_gcnvkernel', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gcnvkernel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gcnvkernel/README.html