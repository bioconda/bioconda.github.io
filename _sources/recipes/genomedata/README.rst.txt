:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomedata'
.. highlight: bash

genomedata
==========

.. conda:recipe:: genomedata
   :replaces_section_title:
   :noindex:

   Tools for accessing large amounts of genomic data.

   :homepage: http://genomedata.hoffmanlab.org
   :documentation: https://genomedata.readthedocs.io/en/latest
   
   :developer docs: https://github.com/hoffmangroup/genomedata
   :license: GPL / GPL-2.0-or-later
   :recipe: /`genomedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomedata/meta.yaml>`_
   :links: biotools: :biotools:`genomedata`, doi: :doi:`10.1093/bioinformatics/btq164`

   


.. conda:package:: genomedata

   |downloads_genomedata| |docker_genomedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.4-1</code>,  <code>1.7.4-0</code>,  <code>1.7.3-2</code>,  <code>1.7.3-1</code>,  <code>1.7.3-0</code>,  <code>1.7.2-2</code>,  <code>1.7.2-1</code>,  <code>1.7.2-0</code>,  <code>1.7.1-0</code>,  </span></summary>
      

      ``1.7.4-1``,  ``1.7.4-0``,  ``1.7.3-2``,  ``1.7.3-1``,  ``1.7.3-0``,  ``1.7.2-2``,  ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.4-6``,  ``1.4.4-5``,  ``1.4.4-4``,  ``1.4.4-3``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.6-0``,  ``1.3.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends on libgcc: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on path: 
   :depends on pybigwig: 
   :depends on pytables: ``>=3.4.3``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on setuptools: 
   :depends on six: 
   :depends on textinput: 
   :depends on ucsc-bigwigtobedgraph: ``>=377``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      


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

    pixi global install genomedata

to add into an existing workspace instead, run::

    pixi add genomedata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genomedata

Alternatively, to install into a new environment, run::

    conda create -n envname genomedata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genomedata:<tag>

(see `genomedata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genomedata| image:: https://img.shields.io/conda/dn/bioconda/genomedata.svg?style=flat
   :target: https://anaconda.org/bioconda/genomedata
   :alt:   (downloads)
.. |docker_genomedata| image:: https://quay.io/repository/biocontainers/genomedata/status
   :target: https://quay.io/repository/biocontainers/genomedata
.. _`genomedata/tags`: https://quay.io/repository/biocontainers/genomedata?tab=tags


.. raw:: html

   <script>
      var package = "genomedata";
      var versions = ["1.7.4","1.7.4","1.7.3","1.7.3","1.7.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_genomedata"></div>
   <div style="width: 100%" id="platform_plot_genomedata"></div>
   <div style="width: 100%" id="cdf_plot_genomedata"></div>



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
         
            // Build cdf plot for genomedata
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/genomedata/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_genomedata', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for genomedata
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/genomedata/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_genomedata', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for genomedata
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/genomedata/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_genomedata', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomedata/README.html