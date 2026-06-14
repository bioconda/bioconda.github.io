:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blast'
.. highlight: bash

blast
=====

.. conda:recipe:: blast
   :replaces_section_title:
   :noindex:

   BLAST\+ is a new suite of BLAST tools that utilizes the NCBI C\+\+ Toolkit.

   :homepage: https://blast.ncbi.nlm.nih.gov/doc/blast-help/
   :license: NCBI-PD
   :recipe: /`blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast/meta.yaml>`_
   :links: biotools: :biotools:`blast`, doi: :doi:`10.1016/S0022-2836(05)80360-2`, usegalaxy-eu: :usegalaxy-eu:`ncbi_blastx_wrapper`

   BLAST Command Line Applications.

   The NCBI Basic Local Alignment Search Tool \(BLAST\) finds regions of
   local similarity between sequences. The program compares nucleotide or
   protein sequences to sequence databases and calculates the statistical
   significance of matches. BLAST can be used to infer functional and
   evolutionary relationships between sequences as well as help identify
   members of gene families.

   For more information\, visit https\:\/\/blast.ncbi.nlm.nih.gov



.. conda:package:: blast

   |downloads_blast| |docker_blast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.17.0-0</code>,  <code>2.16.0-5</code>,  <code>2.16.0-4</code>,  <code>2.16.0-3</code>,  <code>2.16.0-2</code>,  <code>2.16.0-1</code>,  <code>2.16.0-0</code>,  <code>2.15.0-1</code>,  <code>2.15.0-0</code>,  </span></summary>
      

      ``2.17.0-0``,  ``2.16.0-5``,  ``2.16.0-4``,  ``2.16.0-3``,  ``2.16.0-2``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.15.0-1``,  ``2.15.0-0``,  ``2.14.1-0``,  ``2.14.0-2``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.13.0-1``,  ``2.13.0-0``,  ``2.12.0-4``,  ``2.12.0-3``,  ``2.12.0-2``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.1-3``,  ``2.10.1-2``,  ``2.10.1-1``,  ``2.10.1-0``,  ``2.9.0-7``,  ``2.9.0-6``,  ``2.9.0-5``,  ``2.9.0-4``,  ``2.9.0-3``,  ``2.9.0-2``,  ``2.9.0-1``,  ``2.9.0-0``,  ``2.7.1-6``,  ``2.7.1-5``,  ``2.7.1-3``,  ``2.7.1-2``,  ``2.7.1-1``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.2.31-5``,  ``2.2.31-4``,  ``2.2.31-3``,  ``2.2.31-2``,  ``2.2.31-1``,  ``2.2.21-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on curl: 
   :depends on entrez-direct: ``>=24.0,<25.0a0``
   :depends on libgcc: ``>=13``
   :depends on libsqlite: ``>=3.50.4,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on ncbi-vdb: ``>=3.2.1,<4.0a0``
   :depends on perl: 
   :depends on perl-archive-tar: 
   :depends on perl-json: 
   :depends on perl-list-moreutils: 
   :depends on zlib: 

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

    pixi global install blast

to add into an existing workspace instead, run::

    pixi add blast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install blast

Alternatively, to install into a new environment, run::

    conda create -n envname blast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/blast:<tag>

(see `blast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_blast| image:: https://img.shields.io/conda/dn/bioconda/blast.svg?style=flat
   :target: https://anaconda.org/bioconda/blast
   :alt:   (downloads)
.. |docker_blast| image:: https://quay.io/repository/biocontainers/blast/status
   :target: https://quay.io/repository/biocontainers/blast
.. _`blast/tags`: https://quay.io/repository/biocontainers/blast?tab=tags


.. raw:: html

   <script>
      var package = "blast";
      var versions = ["2.17.0","2.16.0","2.16.0","2.16.0","2.16.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_blast"></div>
   <div style="width: 100%" id="platform_plot_blast"></div>
   <div style="width: 100%" id="cdf_plot_blast"></div>



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
         
            // Build cdf plot for blast
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/blast/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_blast', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for blast
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/blast/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_blast', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for blast
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/blast/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_blast', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blast/README.html