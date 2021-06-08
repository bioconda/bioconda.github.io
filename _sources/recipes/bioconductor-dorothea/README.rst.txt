:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dorothea'
.. highlight: bash

bioconductor-dorothea
=====================

.. conda:recipe:: bioconductor-dorothea
   :replaces_section_title:
   :noindex:

   Collection Of Human And Mouse TF Regulons

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/dorothea.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-dorothea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dorothea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dorothea/meta.yaml>`_

   This package contains human and mouse TF regulons. The human regulons were curated and collected from different types of evidence such as literature curated resources\, ChIP\-seq peaks\, TF binding site motifs and interactions inferred directly from gene expression. The mouse regulons were constructed by mapping the human gene symbols to their orthologs in mice. Those regulons can be coupled with any statistical method that aims to analyse gene sets to infer TF activity from gene expression data. Preferably the statistical method viper is used.


.. conda:package:: bioconductor-dorothea

   |downloads_bioconductor-dorothea| |docker_bioconductor-dorothea|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-bcellviper: ``>=1.28.0,<1.29.0``
   :depends bioconductor-viper: ``>=1.26.0,<1.27.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dorothea

   and update with::

      conda update bioconductor-dorothea

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dorothea:<tag>

   (see `bioconductor-dorothea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dorothea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dorothea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dorothea
   :alt:   (downloads)
.. |docker_bioconductor-dorothea| image:: https://quay.io/repository/biocontainers/bioconductor-dorothea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dorothea
.. _`bioconductor-dorothea/tags`: https://quay.io/repository/biocontainers/bioconductor-dorothea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dorothea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dorothea/README.html