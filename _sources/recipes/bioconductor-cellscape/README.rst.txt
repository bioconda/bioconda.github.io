:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellscape'
.. highlight: bash

bioconductor-cellscape
======================

.. conda:recipe:: bioconductor-cellscape
   :replaces_section_title:
   :noindex:

   Explores single cell copy number profiles in the context of a single cell tree

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cellscape.html
   :license: GPL-3
   :recipe: /`bioconductor-cellscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellscape/meta.yaml>`_

   CellScape facilitates interactive browsing of single cell clonal evolution datasets. The tool requires two main inputs\: \(i\) the genomic content of each single cell in the form of either copy number segments or targeted mutation values\, and \(ii\) a single cell phylogeny. Phylogenetic formats can vary from dendrogram\-like phylogenies with leaf nodes to evolutionary model\-derived phylogenies with observed or latent internal nodes. The CellScape phylogeny is flexibly input as a table of source\-target edges to support arbitrary representations\, where each node may or may not have associated genomic data. The output of CellScape is an interactive interface displaying a single cell phylogeny and a cell\-by\-locus genomic heatmap representing the mutation status in each cell for each locus.


.. conda:package:: bioconductor-cellscape

   |downloads_bioconductor-cellscape| |docker_bioconductor-cellscape|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=0.4.3``
   :depends on r-gtools: ``>=3.5.0``
   :depends on r-htmlwidgets: ``>=0.5``
   :depends on r-jsonlite: ``>=0.9.19``
   :depends on r-reshape2: ``>=1.4.1``
   :depends on r-stringr: ``>=1.0.0``

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

    pixi global install bioconductor-cellscape

to add into an existing workspace instead, run::

    pixi add bioconductor-cellscape

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cellscape

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cellscape

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cellscape:<tag>

(see `bioconductor-cellscape/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cellscape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellscape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellscape
   :alt:   (downloads)
.. |docker_bioconductor-cellscape| image:: https://quay.io/repository/biocontainers/bioconductor-cellscape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellscape
.. _`bioconductor-cellscape/tags`: https://quay.io/repository/biocontainers/bioconductor-cellscape?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellscape";
        var versions = ["1.34.0","1.30.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellscape/README.html