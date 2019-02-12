:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scbn'
.. highlight: bash

bioconductor-scbn
=================

.. conda:recipe:: bioconductor-scbn
   :replaces_section_title:

   This package provides a scale based normalization \(SCBN\) method to identify genes with differential expression between different species. It takes into account the available knowledge of conserved orthologous genes and the hypothesis testing framework to detect differentially expressed orthologous genes. The method on this package are described in the article \'A statistical normalization method and differential expression analysis for RNA\-seq data between different species\' by Yan Zhou\, Jiadi Zhu\, Tiejun Tong\, Junhui Wang\, Bingqing Lin\, Jun Zhang \(2018\, pending publication\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SCBN.html
   :license: GPL-2
   :recipe: /`bioconductor-scbn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scbn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scbn/meta.yaml>`_

   


.. conda:package:: bioconductor-scbn

   |downloads_bioconductor-scbn| |docker_bioconductor-scbn|

   :versions: 1.0.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scbn

   and update with::

      conda update bioconductor-scbn

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scbn:<tag>

   (see `bioconductor-scbn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scbn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scbn.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scbn| image:: https://quay.io/repository/biocontainers/bioconductor-scbn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scbn
.. _`bioconductor-scbn/tags`: https://quay.io/repository/biocontainers/bioconductor-scbn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scbn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scbn/README.html