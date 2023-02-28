:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dino'
.. highlight: bash

bioconductor-dino
=================

.. conda:recipe:: bioconductor-dino
   :replaces_section_title:
   :noindex:

   Normalization of Single\-Cell mRNA Sequencing Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/Dino.html
   :license: GPL-3
   :recipe: /`bioconductor-dino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dino/meta.yaml>`_

   Dino normalizes single\-cell\, mRNA sequencing data to correct for technical variation\, particularly sequencing depth\, prior to downstream analysis. The approach produces a matrix of corrected expression for which the dependency between sequencing depth and the full distribution of normalized expression\; many existing methods aim to remove only the dependency between sequencing depth and the mean of the normalized expression. This is particuarly useful in the context of highly sparse datasets such as those produced by 10X genomics and other uninque molecular identifier \(UMI\) based microfluidics protocols for which the depth\-dependent proportion of zeros in the raw expression data can otherwise present a challenge.


.. conda:package:: bioconductor-dino

   |downloads_bioconductor-dino| |docker_bioconductor-dino|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biocsingular: ``>=1.14.0,<1.15.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-scran: ``>=1.26.0,<1.27.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dino

   and update with::

      conda update bioconductor-dino

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dino:<tag>

   (see `bioconductor-dino/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dino| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dino.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dino
   :alt:   (downloads)
.. |docker_bioconductor-dino| image:: https://quay.io/repository/biocontainers/bioconductor-dino/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dino
.. _`bioconductor-dino/tags`: https://quay.io/repository/biocontainers/bioconductor-dino?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dino";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dino/README.html