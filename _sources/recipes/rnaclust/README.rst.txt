:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaclust'
.. highlight: bash

rnaclust
========

.. conda:recipe:: rnaclust
   :replaces_section_title:
   :noindex:

   A tool for clustering of RNAs based on their secondary structures using LocARNA

   :homepage: http://www.bioinf.uni-leipzig.de/~kristin/Software/RNAclust/
   :license: GPL / GPL-2.0
   :recipe: /`rnaclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaclust/meta.yaml>`_
   :links: biotools: :biotools:`RNAclust`

   RNAclust is a perl script summarizing all the single steps required for
   clustering of structured RNA motifs\, i.e. identifying groups of RNA
   sequences sharing a secondary structure motif. It requires as input a
   multiple FASTA file. In the first step for each input sequence the base
   pair probability matrix of its secondary structure distribution is
   calculated \(using RNAfold from the Vienna RNA package\). Secondly\, for
   each pair of base pair probability matrices a sequence\-structure alignment
   is calculated using LocARNA. Lastly\, a hierarchical cluster\-tree \(in
   NEWICK format\) is derived by WPGMA clustering of the pairwise alignment
   distances and the optimal number of clusters is calculated from the tree.



.. conda:package:: rnaclust

   |downloads_rnaclust| |docker_rnaclust|

   :versions:
      
      

      ``1.3-0``

      

   
   :depends on libgcc: 
   :depends on locarna: 
   :depends on perl: ``5.22.0*``
   :depends on viennarna: 

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

    pixi global install rnaclust

to add into an existing workspace instead, run::

    pixi add rnaclust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnaclust

Alternatively, to install into a new environment, run::

    conda create -n envname rnaclust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnaclust:<tag>

(see `rnaclust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnaclust| image:: https://img.shields.io/conda/dn/bioconda/rnaclust.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaclust
   :alt:   (downloads)
.. |docker_rnaclust| image:: https://quay.io/repository/biocontainers/rnaclust/status
   :target: https://quay.io/repository/biocontainers/rnaclust
.. _`rnaclust/tags`: https://quay.io/repository/biocontainers/rnaclust?tab=tags


.. raw:: html

   <script>
      var package = "rnaclust";
      var versions = ["1.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_rnaclust"></div>
   <div style="width: 100%" id="platform_plot_rnaclust"></div>
   <div style="width: 100%" id="cdf_plot_rnaclust"></div>



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
         
            // Build cdf plot for rnaclust
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rnaclust/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_rnaclust', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for rnaclust
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rnaclust/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_rnaclust', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for rnaclust
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/rnaclust/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_rnaclust', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaclust/README.html