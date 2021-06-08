:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-survtype'
.. highlight: bash

bioconductor-survtype
=====================

.. conda:recipe:: bioconductor-survtype
   :replaces_section_title:
   :noindex:

   Subtype Identification with Survival Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/survtype.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-survtype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survtype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survtype/meta.yaml>`_

   Subtypes are defined as groups of samples that have distinct molecular and clinical features. Genomic data can be analyzed for discovering patient subtypes\, associated with clinical data\, especially for survival information. This package is aimed to identify subtypes that are both clinically relevant and biologically meaningful.


.. conda:package:: bioconductor-survtype

   |downloads_bioconductor-survtype| |docker_bioconductor-survtype|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-clustvarsel: 
   :depends r-pheatmap: 
   :depends r-survival: 
   :depends r-survminer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-survtype

   and update with::

      conda update bioconductor-survtype

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-survtype:<tag>

   (see `bioconductor-survtype/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-survtype| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-survtype.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-survtype
   :alt:   (downloads)
.. |docker_bioconductor-survtype| image:: https://quay.io/repository/biocontainers/bioconductor-survtype/status
   :target: https://quay.io/repository/biocontainers/bioconductor-survtype
.. _`bioconductor-survtype/tags`: https://quay.io/repository/biocontainers/bioconductor-survtype?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-survtype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-survtype/README.html