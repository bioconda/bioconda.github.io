:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jbrowse2'
.. highlight: bash

jbrowse2
========

.. conda:recipe:: jbrowse2
   :replaces_section_title:
   :noindex:

   The JBrowse 2 Genome Browser

   :homepage: https://jbrowse.org/
   :license: Apache / Apache-2.0
   :recipe: /`jbrowse2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jbrowse2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jbrowse2/meta.yaml>`_
   :links: biotools: :biotools:`jbrowse`, doi: :doi:`10.1101/gr.094607.109`

   


.. conda:package:: jbrowse2

   |downloads_jbrowse2| |docker_jbrowse2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.0-0</code>,  <code>4.2.1-0</code>,  <code>4.1.3-0</code>,  <code>4.1.1-0</code>,  <code>4.0.4-0</code>,  <code>4.0.3-0</code>,  <code>3.7.0-0</code>,  <code>3.6.5-0</code>,  <code>3.6.4-0</code>,  </span></summary>
      

      ``4.3.0-0``,  ``4.2.1-0``,  ``4.1.3-0``,  ``4.1.1-0``,  ``4.0.4-0``,  ``4.0.3-0``,  ``3.7.0-0``,  ``3.6.5-0``,  ``3.6.4-0``,  ``3.6.3-0``,  ``3.6.2-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.5-0``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.17.0-1``,  ``2.17.0-0``,  ``2.16.1-0``,  ``2.16.0-0``,  ``2.15.4-0``,  ``2.15.3-0``,  ``2.15.1-0``,  ``2.15.0-0``,  ``2.14.0-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.12.3-0``,  ``2.12.2-0``,  ``2.12.0-0``,  ``2.11.2-1``,  ``2.11.2-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.3-0``,  ``2.10.2-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.2-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.7.11-0``,  ``1.7.10-0``,  ``1.7.9-0``,  ``1.7.8-0``,  ``1.7.7-0``,  ``1.7.6-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.6.9-0``,  ``1.6.7-0``,  ``1.6.6-0``,  ``1.6.5-0``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.5.9-1``,  ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.5-0``,  ``1.5.3-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.4-0``,  ``1.4.1-0``,  ``1.3.5-0``,  ``1.3.3-0``,  ``1.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: 
   :depends on gff3sort: 
   :depends on htslib: 
   :depends on nodejs: ``>=18,<24``
   :depends on samtools: 

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

    pixi global install jbrowse2

to add into an existing workspace instead, run::

    pixi add jbrowse2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jbrowse2

Alternatively, to install into a new environment, run::

    conda create -n envname jbrowse2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jbrowse2:<tag>

(see `jbrowse2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jbrowse2| image:: https://img.shields.io/conda/dn/bioconda/jbrowse2.svg?style=flat
   :target: https://anaconda.org/bioconda/jbrowse2
   :alt:   (downloads)
.. |docker_jbrowse2| image:: https://quay.io/repository/biocontainers/jbrowse2/status
   :target: https://quay.io/repository/biocontainers/jbrowse2
.. _`jbrowse2/tags`: https://quay.io/repository/biocontainers/jbrowse2?tab=tags


.. raw:: html

   <script>
      var package = "jbrowse2";
      var versions = ["4.3.0","4.2.1","4.1.3","4.1.1","4.0.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_jbrowse2"></div>
   <div style="width: 100%" id="platform_plot_jbrowse2"></div>
   <div style="width: 100%" id="cdf_plot_jbrowse2"></div>



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
         
            // Build cdf plot for jbrowse2
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/jbrowse2/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_jbrowse2', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for jbrowse2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/jbrowse2/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_jbrowse2', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for jbrowse2
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/jbrowse2/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_jbrowse2', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jbrowse2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jbrowse2/README.html