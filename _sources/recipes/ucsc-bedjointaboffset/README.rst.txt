:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bedjointaboffset'
.. highlight: bash

ucsc-bedjointaboffset
=====================

.. conda:recipe:: ucsc-bedjointaboffset
   :replaces_section_title:
   :noindex:

   given a bed file and tab file where each have a column with matching values\: first get the value of column0\, the offset and line length from inTabFile. Then go over the bed file\, use the name field and append its offset and length to the bed file as two separate fields. Write the new bed file to outBed.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/master/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedjointaboffset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedjointaboffset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedjointaboffset/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-bedjointaboffset

   |downloads_ucsc-bedjointaboffset| |docker_ucsc-bedjointaboffset|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``

      

   
   :depends on libpng: 
   :depends on libuuid: 
   :depends on mysql-connector-c: 
   :depends on openssl: ``>=1.1.0,<=1.1.1``
   :depends on python: 
   :depends on zlib: 

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

    pixi global install ucsc-bedjointaboffset

to add into an existing workspace instead, run::

    pixi add ucsc-bedjointaboffset

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ucsc-bedjointaboffset

Alternatively, to install into a new environment, run::

    conda create -n envname ucsc-bedjointaboffset

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ucsc-bedjointaboffset:<tag>

(see `ucsc-bedjointaboffset/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ucsc-bedjointaboffset| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedjointaboffset.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-bedjointaboffset
   :alt:   (downloads)
.. |docker_ucsc-bedjointaboffset| image:: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset
.. _`ucsc-bedjointaboffset/tags`: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset?tab=tags


.. raw:: html

   <script>
      var package = "ucsc-bedjointaboffset";
      var versions = ["377","377","377","366"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_ucsc-bedjointaboffset"></div>
   <div style="width: 100%" id="platform_plot_ucsc-bedjointaboffset"></div>
   <div style="width: 100%" id="cdf_plot_ucsc-bedjointaboffset"></div>



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
         
            // Build cdf plot for ucsc-bedjointaboffset
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ucsc-bedjointaboffset/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_ucsc-bedjointaboffset', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for ucsc-bedjointaboffset
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ucsc-bedjointaboffset/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_ucsc-bedjointaboffset', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for ucsc-bedjointaboffset
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ucsc-bedjointaboffset/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_ucsc-bedjointaboffset', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedjointaboffset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedjointaboffset/README.html