:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pathfindr'
.. highlight: bash

r-pathfindr
===========

.. conda:recipe:: r-pathfindr
   :replaces_section_title:
   :noindex:

   Enrichment analysis enables researchers to uncover mechanisms underlying a phenotype. However\, conventional methods for enrichment analysis do not take into account protein\-protein interaction information\, resulting in incomplete conclusions. pathfindR is a tool for enrichment analysis utilizing active subnetworks. The main function identifies active subnetworks in a protein\-protein interaction network using a user\-provided list of genes and associated p values. It then performs enrichment analyses on the identified subnetworks\, identifying enriched terms \(i.e. pathways or\, more broadly\, gene sets\) that possibly underlie the phenotype of interest. pathfindR also offers functionalities to cluster the enriched terms and identify representative terms in each cluster\, to score the enriched terms per sample and to visualize analysis results. The enrichment\, clustering and other methods implemented in pathfindR are described in detail in Ulgen E\, Ozisik O\, Sezerman OU. 2019. pathfindR\: An R Package for Comprehensive Identification of Enriched Pathways in Omics Data Through Active Subnetworks. Front. Genet. \<doi\:10.3389\/fgene.2019.00858\>.

   :homepage: https://github.com/egeulgen/pathfindR
   :documentation: https://egeulgen.github.io/pathfindR/
   
   :license: MIT / MIT
   :recipe: /`r-pathfindr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pathfindr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pathfindr/meta.yaml>`_

   


.. conda:package:: r-pathfindr

   |downloads_r-pathfindr| |docker_r-pathfindr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.0-0</code>,  <code>2.6.0-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-0</code>,  <code>2.4.2-0</code>,  <code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.3.1-0</code>,  <code>2.3.0-0</code>,  </span></summary>
      

      ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: 
   :depends on bioconductor-ggkegg: 
   :depends on bioconductor-kegggraph: 
   :depends on bioconductor-keggrest: 
   :depends on bioconductor-org.hs.eg.db: 
   :depends on openjdk: ``8.*``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dbi: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-fpc: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-ggupset: 
   :depends on r-httr: 
   :depends on r-igraph: 
   :depends on r-knitr: 
   :depends on r-magick: 
   :depends on r-msigdbr: 
   :depends on r-pathfindr.data: ``>=2.0``
   :depends on r-r.utils: 
   :depends on r-rmarkdown: 

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

    pixi global install r-pathfindr

to add into an existing workspace instead, run::

    pixi add r-pathfindr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-pathfindr

Alternatively, to install into a new environment, run::

    conda create -n envname r-pathfindr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-pathfindr:<tag>

(see `r-pathfindr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-pathfindr| image:: https://img.shields.io/conda/dn/bioconda/r-pathfindr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pathfindr
   :alt:   (downloads)
.. |docker_r-pathfindr| image:: https://quay.io/repository/biocontainers/r-pathfindr/status
   :target: https://quay.io/repository/biocontainers/r-pathfindr
.. _`r-pathfindr/tags`: https://quay.io/repository/biocontainers/r-pathfindr?tab=tags


.. raw:: html

    <script>
        var package = "r-pathfindr";
        var versions = ["2.7.0","2.6.0","2.5.1","2.5.0","2.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pathfindr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pathfindr/README.html