:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusioncatcher'
.. highlight: bash

fusioncatcher
=============

.. conda:recipe:: fusioncatcher
   :replaces_section_title:
   :noindex:

   Finder of Somatic Fusion Genes in RNA\-seq data.

   :homepage: https://github.com/bioinformaticsorphanage/fusioncatcher
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`fusioncatcher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusioncatcher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusioncatcher/meta.yaml>`_
   :links: biotools: :biotools:`fusioncatcher`, doi: :doi:`10.1101/011650`

   


.. conda:package:: fusioncatcher

   |downloads_fusioncatcher| |docker_fusioncatcher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.33-6</code>,  <code>1.33-5</code>,  <code>1.33-4</code>,  <code>1.33-3</code>,  <code>1.33-2</code>,  <code>1.33-1</code>,  <code>1.33-0</code>,  <code>1.33b-0</code>,  <code>1.30-1</code>,  </span></summary>
      

      ``1.33-6``,  ``1.33-5``,  ``1.33-4``,  ``1.33-3``,  ``1.33-2``,  ``1.33-1``,  ``1.33-0``,  ``1.33b-0``,  ``1.30-1``,  ``1.30-0``,  ``1.20-2``,  ``1.20-1``,  ``1.20-0``,  ``1.10-3``,  ``1.10-2``,  ``1.10-0``,  ``1.00-1``,  ``1.00-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: ``38.44.*``
   :depends on biopython: ``>=1.50``
   :depends on blat: ``35.*``
   :depends on bowtie: ``1.2.3.*``
   :depends on bowtie2: ``2.3.5.*``
   :depends on bwa: ``0.7.12.*``
   :depends on coreutils: 
   :depends on fastqtk: 
   :depends on fusioncatcher-seqtk: ``1.2.*``
   :depends on grep: 
   :depends on gzip: 
   :depends on lzo: 
   :depends on lzop: 
   :depends on numpy: ``1.13.1.*``
   :depends on oases: 
   :depends on openjdk: 
   :depends on openpyxl: ``2.5.0a2.*``
   :depends on parallel: ``20171222.*``
   :depends on picard: ``2.10.6.*``
   :depends on pigz: 
   :depends on python: ``<3``
   :depends on samtools: ``0.1.19.*``
   :depends on sra-tools: ``2.9.6.*``
   :depends on star: ``2.7.2b.*``
   :depends on tbb: ``2020.2.*``
   :depends on ucsc-fatotwobit: 
   :depends on ucsc-liftover: 
   :depends on velvet: ``1.2.10.*``
   :depends on wget: 
   :depends on xlrd: ``1.0.0.*``
   :depends on zip: 

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

    pixi global install fusioncatcher

to add into an existing workspace instead, run::

    pixi add fusioncatcher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fusioncatcher

Alternatively, to install into a new environment, run::

    conda create -n envname fusioncatcher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fusioncatcher:<tag>

(see `fusioncatcher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fusioncatcher| image:: https://img.shields.io/conda/dn/bioconda/fusioncatcher.svg?style=flat
   :target: https://anaconda.org/bioconda/fusioncatcher
   :alt:   (downloads)
.. |docker_fusioncatcher| image:: https://quay.io/repository/biocontainers/fusioncatcher/status
   :target: https://quay.io/repository/biocontainers/fusioncatcher
.. _`fusioncatcher/tags`: https://quay.io/repository/biocontainers/fusioncatcher?tab=tags


.. raw:: html

   <script>
      var package = "fusioncatcher";
      var versions = ["1.33","1.33","1.33","1.33","1.33"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_fusioncatcher"></div>
   <div style="width: 100%" id="platform_plot_fusioncatcher"></div>
   <div style="width: 100%" id="cdf_plot_fusioncatcher"></div>



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
         
            // Build cdf plot for fusioncatcher
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fusioncatcher/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_fusioncatcher', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for fusioncatcher
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fusioncatcher/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_fusioncatcher', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for fusioncatcher
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fusioncatcher/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_fusioncatcher', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
download\-human\-db.sh should be updated when new version of FusionCatcher is released.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusioncatcher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusioncatcher/README.html