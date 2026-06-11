:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geno2phenotb'
.. highlight: bash

geno2phenotb
============

.. conda:recipe:: geno2phenotb
   :replaces_section_title:
   :noindex:

   Prediction of Mycobacterium tuberculosis drug resistance from WGS data.

   :homepage: https://github.com/msmdev/geno2phenoTB
   :documentation: https://geno2phenotb.readthedocs.io/en/latest
   
   :license: LGPL / LGPL-3.0-only
   :recipe: /`geno2phenotb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geno2phenotb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geno2phenotb/meta.yaml>`_

   geno2phenoTB is a machine learning based tool to predict resistance of Mycobacterium tuberculosis against antibiotics using whole\-genome sequencing data.



.. conda:package:: geno2phenotb

   |downloads_geno2phenotb| |docker_geno2phenotb|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bwa: 
   :depends on gatk: ``3.8.*``
   :depends on imbalanced-learn: ``0.8.1.*``
   :depends on importlib_metadata: 
   :depends on joblib: ``1.2.*``
   :depends on mtbseq: 
   :depends on numpy: ``1.21.5.*``
   :depends on packaging: ``21.*``
   :depends on pandas: ``0.25.3.*``
   :depends on perl-base: ``2.23.*``
   :depends on python: ``3.8.17.*``
   :depends on requests: ``2.*``
   :depends on samtools: ``1.6.*``
   :depends on scikit-learn: ``0.24.2.*``
   :depends on scipy: ``1.7.3.*``
   :depends on setuptools: 
   :depends on tqdm: ``4.*``
   :depends on wheel: ``0.37.*``

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

    pixi global install geno2phenotb

to add into an existing workspace instead, run::

    pixi add geno2phenotb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install geno2phenotb

Alternatively, to install into a new environment, run::

    conda create -n envname geno2phenotb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/geno2phenotb:<tag>

(see `geno2phenotb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_geno2phenotb| image:: https://img.shields.io/conda/dn/bioconda/geno2phenotb.svg?style=flat
   :target: https://anaconda.org/bioconda/geno2phenotb
   :alt:   (downloads)
.. |docker_geno2phenotb| image:: https://quay.io/repository/biocontainers/geno2phenotb/status
   :target: https://quay.io/repository/biocontainers/geno2phenotb
.. _`geno2phenotb/tags`: https://quay.io/repository/biocontainers/geno2phenotb?tab=tags


.. raw:: html

   <script>
      var package = "geno2phenotb";
      var versions = ["1.0.1","1.0.1","1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_geno2phenotb"></div>
   <div style="width: 100%" id="platform_plot_geno2phenotb"></div>
   <div style="width: 100%" id="cdf_plot_geno2phenotb"></div>



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
         
            // Build cdf plot for geno2phenotb
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/geno2phenotb/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_geno2phenotb', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for geno2phenotb
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/geno2phenotb/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_geno2phenotb', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for geno2phenotb
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/geno2phenotb/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_geno2phenotb', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geno2phenotb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geno2phenotb/README.html