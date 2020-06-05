:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clomial'
.. highlight: bash

bioconductor-clomial
====================

.. conda:recipe:: bioconductor-clomial
   :replaces_section_title:
   :noindex:

   Infers clonal composition of a tumor

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/Clomial.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-clomial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clomial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clomial/meta.yaml>`_
   :links: biotools: :biotools:`clomial`

   Clomial fits binomial distributions to counts obtained from Next Gen Sequencing data of multiple samples of the same tumor. The trained parameters can be interpreted to infer the clonal structure of the tumor.


.. conda:package:: bioconductor-clomial

   |downloads_bioconductor-clomial| |docker_bioconductor-clomial|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-matrixstats: 
   :depends r-permute: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clomial

   and update with::

      conda update bioconductor-clomial

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clomial:<tag>

   (see `bioconductor-clomial/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clomial| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clomial.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clomial
   :alt:   (downloads)
.. |docker_bioconductor-clomial| image:: https://quay.io/repository/biocontainers/bioconductor-clomial/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clomial
.. _`bioconductor-clomial/tags`: https://quay.io/repository/biocontainers/bioconductor-clomial?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clomial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clomial/README.html