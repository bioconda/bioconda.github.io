:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seismic-rna'
.. highlight: bash

seismic-rna
===========

.. conda:recipe:: seismic-rna
   :replaces_section_title:
   :noindex:

   SEISMIC\-RNA software by the Rouskin Lab.

   :homepage: https://github.com/rouskinlab/seismic-rna
   :documentation: https://rouskinlab.github.io/seismic-rna
   
   :license: `GPL3 / GPL-3.0-only <https://www.gnu.org/licenses/gpl-3.0.html>`_
   :recipe: /`seismic-rna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seismic-rna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seismic-rna/meta.yaml>`_

   


.. conda:package:: seismic-rna

   |downloads_seismic-rna| |docker_seismic-rna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.24.4-0</code>,  <code>0.24.3-0</code>,  <code>0.24.2-0</code>,  <code>0.24.1-0</code>,  <code>0.24.0-0</code>,  <code>0.23.1-0</code>,  <code>0.23.0-0</code>,  <code>0.22.3-1</code>,  <code>0.22.3-0</code>,  </span></summary>
      

      ``0.24.4-0``,  ``0.24.3-0``,  ``0.24.2-0``,  ``0.24.1-0``,  ``0.24.0-0``,  ``0.23.1-0``,  ``0.23.0-0``,  ``0.22.3-1``,  ``0.22.3-0``,  ``0.22.1-0``,  ``0.22.0-0``,  ``0.21.1-1``,  ``0.21.1-0``,  ``0.21.0-0``,  ``0.20.1-0``,  ``0.20.0-1``,  ``0.20.0-0``,  ``0.19.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bowtie2: ``>=2.5.4``
   :depends on brotli-python: ``>=1.0``
   :depends on click: ``>=8.1``
   :depends on fastp: ``>=0.23.0``
   :depends on fastqsplitter: ``>=1.2``
   :depends on jgo: ``>=1.0``
   :depends on jinja2: ``>=3.0``
   :depends on libgcc: ``>=13``
   :depends on maven: ``>=3.3.9``
   :depends on networkx: ``>=3.4``
   :depends on numba: ``>=0.61``
   :depends on numpy: ``>=2.0,<2.2``
   :depends on openjdk: ``>=21.0``
   :depends on pandas: ``>=2.2,<3.0``
   :depends on plotly: ``>=5.23``
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python-kaleido: ``>=0.2.1``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on pyyaml: ``>=6.0``
   :depends on rnastructure: ``>=6.4``
   :depends on samtools: ``>=1.20``
   :depends on scipy: ``>=1.13``

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

    pixi global install seismic-rna

to add into an existing workspace instead, run::

    pixi add seismic-rna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seismic-rna

Alternatively, to install into a new environment, run::

    conda create -n envname seismic-rna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seismic-rna:<tag>

(see `seismic-rna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seismic-rna| image:: https://img.shields.io/conda/dn/bioconda/seismic-rna.svg?style=flat
   :target: https://anaconda.org/bioconda/seismic-rna
   :alt:   (downloads)
.. |docker_seismic-rna| image:: https://quay.io/repository/biocontainers/seismic-rna/status
   :target: https://quay.io/repository/biocontainers/seismic-rna
.. _`seismic-rna/tags`: https://quay.io/repository/biocontainers/seismic-rna?tab=tags


.. raw:: html

   <script>
      var package = "seismic-rna";
      var versions = ["0.24.4","0.24.3","0.24.2","0.24.1","0.24.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_seismic-rna"></div>
   <div style="width: 100%" id="platform_plot_seismic-rna"></div>
   <div style="width: 100%" id="cdf_plot_seismic-rna"></div>



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
         
            // Build cdf plot for seismic-rna
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/seismic-rna/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_seismic-rna', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for seismic-rna
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/seismic-rna/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_seismic-rna', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for seismic-rna
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/seismic-rna/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_seismic-rna', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seismic-rna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seismic-rna/README.html