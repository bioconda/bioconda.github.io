:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dittoseq'
.. highlight: bash

bioconductor-dittoseq
=====================

.. conda:recipe:: bioconductor-dittoseq
   :replaces_section_title:
   :noindex:

   User Friendly Single\-Cell and Bulk RNA Sequencing Visualization

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/dittoSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dittoseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dittoseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dittoseq/meta.yaml>`_

   A universal\, user friendly\, single\-cell and bulk RNA sequencing visualization toolkit that allows highly customizable creation of color blindness friendly\, publication\-quality figures. dittoSeq accepts both SingleCellExperiment \(SCE\) and Seurat objects\, as well as the import and usage\, via conversion to an SCE\, of SummarizedExperiment or DGEList bulk data. Visualizations include dimensionality reduction plots\, heatmaps\, scatterplots\, percent composition or expression across groups\, and more. Customizations range from size and title adjustments to automatic generation of annotations for heatmaps\, overlay of trajectory analysis onto any dimensionality reduciton plot\, hidden data overlay upon cursor hovering via ggplotly conversion\, and many more. All with simple\, discrete inputs. Color blindness friendliness is powered by legend adjustments \(enlarged keys\)\, and by allowing the use of shapes or letter\-overlay in addition to the carefully selected dittoColors\(\).


.. conda:package:: bioconductor-dittoseq

   |downloads_bioconductor-dittoseq| |docker_bioconductor-dittoseq|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.5-0``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-colorspace: ``>=1.4``
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-ggridges: 
   :depends r-gridextra: 
   :depends r-pheatmap: 
   :depends r-reshape2: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-dittoseq

   and update with::

      mamba update bioconductor-dittoseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dittoseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dittoseq:<tag>

   (see `bioconductor-dittoseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dittoseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dittoseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dittoseq
   :alt:   (downloads)
.. |docker_bioconductor-dittoseq| image:: https://quay.io/repository/biocontainers/bioconductor-dittoseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dittoseq
.. _`bioconductor-dittoseq/tags`: https://quay.io/repository/biocontainers/bioconductor-dittoseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dittoseq";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dittoseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dittoseq/README.html