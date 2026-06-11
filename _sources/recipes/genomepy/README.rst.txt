:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomepy'
.. highlight: bash

genomepy
========

.. conda:recipe:: genomepy
   :replaces_section_title:
   :noindex:

   Install and use genomes \& gene annotations the easy way\!

   :homepage: https://github.com/vanheeringen-lab/genomepy
   :documentation: https://vanheeringen-lab.github.io/genomepy
   
   :license: MIT / MIT
   :recipe: /`genomepy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomepy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomepy/meta.yaml>`_

   Install and use genomes \& gene annotations the easy way\!



.. conda:package:: genomepy

   |downloads_genomepy| |docker_genomepy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.16.4-0</code>,  <code>0.16.3-0</code>,  <code>0.16.2-1</code>,  <code>0.16.2-0</code>,  <code>0.16.1-2</code>,  <code>0.16.1-1</code>,  <code>0.16.1-0</code>,  <code>0.16.0-0</code>,  <code>0.15.0-0</code>,  </span></summary>
      

      ``0.16.4-0``,  ``0.16.3-0``,  ``0.16.2-1``,  ``0.16.2-0``,  ``0.16.1-2``,  ``0.16.1-1``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-2``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on appdirs: 
   :depends on biopython: ``>=1.73``
   :depends on click: 
   :depends on colorama: 
   :depends on diskcache: 
   :depends on filelock: ``>=3.5``
   :depends on htslib: ``>=1.11``
   :depends on loguru: 
   :depends on mygene: 
   :depends on mysql: ``<=8.4``
   :depends on mysql-connector-python: ``<=8.4``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyfaidx: ``>=0.7.2.1``
   :depends on python: ``>=3.9``
   :depends on pyyaml: 
   :depends on requests: 
   :depends on tqdm: ``>=4.51``
   :depends on ucsc-bedtogenepred: 
   :depends on ucsc-genepredtobed: 
   :depends on ucsc-genepredtogtf: 
   :depends on ucsc-gff3togenepred: 
   :depends on ucsc-gtftogenepred: 

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

    pixi global install genomepy

to add into an existing workspace instead, run::

    pixi add genomepy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genomepy

Alternatively, to install into a new environment, run::

    conda create -n envname genomepy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genomepy:<tag>

(see `genomepy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genomepy| image:: https://img.shields.io/conda/dn/bioconda/genomepy.svg?style=flat
   :target: https://anaconda.org/bioconda/genomepy
   :alt:   (downloads)
.. |docker_genomepy| image:: https://quay.io/repository/biocontainers/genomepy/status
   :target: https://quay.io/repository/biocontainers/genomepy
.. _`genomepy/tags`: https://quay.io/repository/biocontainers/genomepy?tab=tags


.. raw:: html

   <script>
      var package = "genomepy";
      var versions = ["0.16.4","0.16.3","0.16.2","0.16.2","0.16.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_genomepy"></div>
   <div style="width: 100%" id="platform_plot_genomepy"></div>
   <div style="width: 100%" id="cdf_plot_genomepy"></div>



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
         
            // Build cdf plot for genomepy
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/genomepy/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_genomepy', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for genomepy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/genomepy/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_genomepy', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for genomepy
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/genomepy/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_genomepy', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomepy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomepy/README.html