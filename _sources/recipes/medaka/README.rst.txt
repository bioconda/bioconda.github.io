:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medaka'
.. highlight: bash

medaka
======

.. conda:recipe:: medaka
   :replaces_section_title:
   :noindex:

   A tool to create consensus sequences and variant calls from nanopore sequencing data using neural networks.

   :homepage: https://github.com/nanoporetech/medaka
   :documentation: https://github.com/nanoporetech/medaka/blob/v2.2.2/README.md
   
   :license: OTHER / Oxford Nanopore Technologies PLC. Public License Version 1.0
   :recipe: /`medaka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medaka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medaka/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`medaka_consensus`, usegalaxy-eu: :usegalaxy-eu:`medaka_consensus_pipeline`, usegalaxy-eu: :usegalaxy-eu:`medaka_variant`, usegalaxy-eu: :usegalaxy-eu:`medaka_variant_pipeline`, biotools: :biotools:`medaka`

   


.. conda:package:: medaka

   |downloads_medaka| |docker_medaka|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.2-0</code>,  <code>2.2.1-1</code>,  <code>2.2.1-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.1-2</code>,  </span></summary>
      

      ``2.2.2-0``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.1-2``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.11.3-0``,  ``1.11.2-0``,  ``1.11.1-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.1-2``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.12.1-0``,  ``0.11.5-1``,  ``0.11.5-0``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-1``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.2-0``,  ``0.6.0-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: ``>=1.14``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on cffi: 
   :depends on grpcio: 
   :depends on h5py: 
   :depends on htslib: ``>=1.14``
   :depends on htslib: ``>=1.23.1,<1.24.0a0``
   :depends on intervaltree: 
   :depends on libcurl: ``>=8.20.0,<9.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblzma: ``>=5.8.3,<6.0a0``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on mappy: ``>=2.28``
   :depends on minimap2: ``>=2.24``
   :depends on numpy: ``>=2.0.0``
   :depends on ont-fast5-api: 
   :depends on parasail-python: 
   :depends on pyabpoa: 
   :depends on pysam: ``>=0.16.0.1``
   :depends on pyspoa: ``>=0.2.1``
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python-edlib: 
   :depends on python_abi: ``3.12.* *_cp312``
   :depends on pytorch: ``2.9.*``
   :depends on requests: 
   :depends on samtools: ``>=1.14``
   :depends on tensordict: 
   :depends on toml: 
   :depends on tqdm: 
   :depends on wurlitzer: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


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

    pixi global install medaka

to add into an existing workspace instead, run::

    pixi add medaka

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install medaka

Alternatively, to install into a new environment, run::

    conda create -n envname medaka

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/medaka:<tag>

(see `medaka/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_medaka| image:: https://img.shields.io/conda/dn/bioconda/medaka.svg?style=flat
   :target: https://anaconda.org/bioconda/medaka
   :alt:   (downloads)
.. |docker_medaka| image:: https://quay.io/repository/biocontainers/medaka/status
   :target: https://quay.io/repository/biocontainers/medaka
.. _`medaka/tags`: https://quay.io/repository/biocontainers/medaka?tab=tags


.. raw:: html

   <script>
      var package = "medaka";
      var versions = ["2.2.2","2.2.1","2.2.1","2.2.0","2.2.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_medaka"></div>
   <div style="width: 100%" id="platform_plot_medaka"></div>
   <div style="width: 100%" id="cdf_plot_medaka"></div>



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
         
            // Build cdf plot for medaka
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/medaka/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_medaka', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for medaka
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/medaka/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_medaka', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for medaka
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/medaka/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_medaka', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medaka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medaka/README.html