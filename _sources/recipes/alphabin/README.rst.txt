:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'alphabin'
.. highlight: bash

alphabin
========

.. conda:recipe:: alphabin
   :replaces_section_title:
   :noindex:

   Graph\-based binning of metagenomic contigs with single\-copy marker genes

   :homepage: https://github.com/omar-hajjaji/alphabin
   :documentation: https://github.com/omar-hajjaji/alphabin/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`alphabin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphabin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphabin/meta.yaml>`_

   Alphabin bins metagenomic contigs into genomes. Composition \(trinucleotide ICO
   and tetranucleotide profiles\) and coverage are fused into a kNN graph\, Leiden is
   run over a grid of graphs and resolutions with single\-copy\-marker constraints\,
   and the candidate bins are selected\, rescued\, refined\, recruited and purged using
   co\-located marker genes. Coverage is computed from paired\-end or single\-end reads
   \(Bowtie 2 \+ jgi\_summarize\_bam\_contig\_depths\)\, from BAM files\, or read from a depth
   table. Contigs adjacent in the SPAdes assembly graph can be used as must\-links.



.. conda:package:: alphabin

   |downloads_alphabin| |docker_alphabin|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on __osx: ``>=10.13``
   :depends on bowtie2: 
   :depends on libcxx: ``>=19``
   :depends on metabat2: 
   :depends on numpy: 
   :depends on prodigal: 
   :depends on pyhmmer: ``>=0.10``
   :depends on pynndescent: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pyyaml: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-fnn: 
   :depends on r-igraph: ``>=1.3``
   :depends on r-jsonlite: 
   :depends on r-matrix: 
   :depends on r-rcpp: 
   :depends on r-rcppparallel: 
   :depends on samtools: 
   :depends on tbb-devel: ``>=2023.0.0,<2023.1.0a0``

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

    pixi global install alphabin

to add into an existing workspace instead, run::

    pixi add alphabin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alphabin

Alternatively, to install into a new environment, run::

    conda create -n envname alphabin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alphabin:<tag>

(see `alphabin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alphabin| image:: https://img.shields.io/conda/dn/bioconda/alphabin.svg?style=flat
   :target: https://anaconda.org/bioconda/alphabin
   :alt:   (downloads)
.. |docker_alphabin| image:: https://quay.io/repository/biocontainers/alphabin/status
   :target: https://quay.io/repository/biocontainers/alphabin
.. _`alphabin/tags`: https://quay.io/repository/biocontainers/alphabin?tab=tags


.. raw:: html

   <script>
      var package = "alphabin";
      var versions = ["1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_alphabin"></div>
   <div style="width: 100%" id="platform_plot_alphabin"></div>
   <div style="width: 100%" id="cdf_plot_alphabin"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for alphabin
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/alphabin/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_alphabin', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for alphabin
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/alphabin/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_alphabin', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for alphabin
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/alphabin/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_alphabin', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alphabin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alphabin/README.html