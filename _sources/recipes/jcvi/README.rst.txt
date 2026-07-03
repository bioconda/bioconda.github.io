:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jcvi'
.. highlight: bash

jcvi
====

.. conda:recipe:: jcvi
   :replaces_section_title:
   :noindex:

   Python utility libraries on genome assembly\, annotation\, and comparative genomics.

   :homepage: https://github.com/tanghaibao/jcvi
   :documentation: https://github.com/tanghaibao/jcvi/wiki
   
   :license: BSD / BSD-2-Clause
   :recipe: /`jcvi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcvi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcvi/meta.yaml>`_
   :links: doi: :doi:`10.1002/imt2.211`

   JCVI utility libraries


.. conda:package:: jcvi

   |downloads_jcvi| |docker_jcvi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.6-0</code>,  <code>1.6.5-0</code>,  <code>1.6.4-1</code>,  <code>1.6.4-0</code>,  <code>1.6.3-1</code>,  <code>1.6.3-0</code>,  <code>1.6.1-1</code>,  <code>1.6.1-0</code>,  <code>1.5.11-1</code>,  </span></summary>
      

      ``1.6.6-0``,  ``1.6.5-0``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.5.11-1``,  ``1.5.11-0``,  ``1.5.10-0``,  ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.4-0``,  ``1.4.16-0``,  ``1.4.15-1``,  ``1.4.15-0``,  ``1.4.11-0``,  ``1.4.10-0``,  ``1.4.9-0``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.6-0``,  ``1.3.5-1``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.2.7-3``,  ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.1.19-1``,  ``1.1.19-0``,  ``1.1.18-0``,  ``1.1.17-2``,  ``1.1.17-1``,  ``1.1.17-0``,  ``1.1.16-0``,  ``1.1.15-0``,  ``1.1.14-0``,  ``1.1.12-0``,  ``1.1.11-1``,  ``1.1.11-0``,  ``1.1.10-1``,  ``1.1.10-0``,  ``1.1.8-0``,  ``1.1.5-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.9.14-0``,  ``0.9.13-0``,  ``0.9.12-0``,  ``0.9.11-0``,  ``0.9.10-0``,  ``0.9.9-0``,  ``0.9.6-0``,  ``0.8.12-1``,  ``0.8.12-0``,  ``0.8.4-1``,  ``0.8.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on boto3: 
   :depends on crossmap: 
   :depends on deap: 
   :depends on ete3: 
   :depends on ftpretty: 
   :depends on gffutils: 
   :depends on goatools: 
   :depends on imagemagick: 
   :depends on jinja2: 
   :depends on last: 
   :depends on libgcc: ``>=14``
   :depends on libmagic: 
   :depends on matplotlib-base: 
   :depends on more-itertools: 
   :depends on natsort: 
   :depends on networkx: 
   :depends on numpy: ``>=1.21,<3``
   :depends on palettable: 
   :depends on pybedtools: 
   :depends on pyefd: 
   :depends on pypdf: 
   :depends on pytesseract: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-graphviz: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on r-ggplot2: 
   :depends on r-tinytex: 
   :depends on rich: 
   :depends on scikit-image: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on ucsc-liftover: 
   :depends on wand: 
   :depends on webcolors: 

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

    pixi global install jcvi

to add into an existing workspace instead, run::

    pixi add jcvi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jcvi

Alternatively, to install into a new environment, run::

    conda create -n envname jcvi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jcvi:<tag>

(see `jcvi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jcvi| image:: https://img.shields.io/conda/dn/bioconda/jcvi.svg?style=flat
   :target: https://anaconda.org/bioconda/jcvi
   :alt:   (downloads)
.. |docker_jcvi| image:: https://quay.io/repository/biocontainers/jcvi/status
   :target: https://quay.io/repository/biocontainers/jcvi
.. _`jcvi/tags`: https://quay.io/repository/biocontainers/jcvi?tab=tags


.. raw:: html

   <script>
      var package = "jcvi";
      var versions = ["1.6.6","1.6.5","1.6.4","1.6.4","1.6.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_jcvi"></div>
   <div style="width: 100%" id="platform_plot_jcvi"></div>
   <div style="width: 100%" id="cdf_plot_jcvi"></div>



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
         
            // Build cdf plot for jcvi
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/jcvi/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_jcvi', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for jcvi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/jcvi/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_jcvi', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for jcvi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/jcvi/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_jcvi', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jcvi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jcvi/README.html