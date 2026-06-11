:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'syngap'
.. highlight: bash

syngap
======

.. conda:recipe:: syngap
   :replaces_section_title:
   :noindex:

   SynGAP\: Synteny\-based Gene structure Annotation Polisher

   :homepage: https://github.com/yanyew/SynGAP
   :license: CC-BY-NC-SA-4.0
   :recipe: /`syngap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syngap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syngap/meta.yaml>`_

   


.. conda:package:: syngap

   |downloads_syngap| |docker_syngap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-1</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: ``>=2.31.0``
   :depends on biopython: ``>=1.81``
   :depends on crossmap: 
   :depends on deap: ``>=1.4.1``
   :depends on diamond: ``>=2.1.8``
   :depends on emboss: ``>=6.6.0``
   :depends on gffread: ``>=0.12.7``
   :depends on graphviz: 
   :depends on jcvi: ``>=1.3.6``
   :depends on kneed: ``>=0.8.3``
   :depends on last: ``>=1454``
   :depends on matplotlib-base: ``>=3.8.0``
   :depends on more-itertools: 
   :depends on numpy: ``>=1.26.0``
   :depends on ortools-python: 
   :depends on pandas: ``>=2.1.1``
   :depends on perl-bioperl: ``>=1.7.8``
   :depends on pybedtools: ``>=0.9.0``
   :depends on python: ``>=3.10``
   :depends on scikit-image: ``>=0.22.0``
   :depends on seqkit: ``>=2.4.0``
   :depends on webcolors: 

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

    pixi global install syngap

to add into an existing workspace instead, run::

    pixi add syngap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install syngap

Alternatively, to install into a new environment, run::

    conda create -n envname syngap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/syngap:<tag>

(see `syngap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_syngap| image:: https://img.shields.io/conda/dn/bioconda/syngap.svg?style=flat
   :target: https://anaconda.org/bioconda/syngap
   :alt:   (downloads)
.. |docker_syngap| image:: https://quay.io/repository/biocontainers/syngap/status
   :target: https://quay.io/repository/biocontainers/syngap
.. _`syngap/tags`: https://quay.io/repository/biocontainers/syngap?tab=tags


.. raw:: html

   <script>
      var package = "syngap";
      var versions = ["1.2.5","1.2.4","1.2.3","1.2.3","1.2.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_syngap"></div>
   <div style="width: 100%" id="platform_plot_syngap"></div>
   <div style="width: 100%" id="cdf_plot_syngap"></div>



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
         
            // Build cdf plot for syngap
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/syngap/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_syngap', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for syngap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/syngap/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_syngap', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for syngap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/syngap/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_syngap', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/syngap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/syngap/README.html