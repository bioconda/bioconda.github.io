:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-spieceasi'
.. highlight: bash

r-spieceasi
===========

.. conda:recipe:: r-spieceasi
   :replaces_section_title:
   :noindex:

   Estimate networks from the precision matrix of compositional microbial abundance data.

   :homepage: http://github.com/zdk123/SpiecEasi
   :license: GPL-2.0-or-later
   :recipe: /`r-spieceasi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spieceasi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spieceasi/meta.yaml>`_

   


.. conda:package:: r-spieceasi

   |downloads_r-spieceasi| |docker_r-spieceasi|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends libcxx: ``>=11.1.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-glmnet: 
   :depends r-huge: ``>=1.3.2``
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-pulsar: ``>=0.3.4``
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-spieceasi

   and update with::

      conda update r-spieceasi

   or use the docker container::

      docker pull quay.io/biocontainers/r-spieceasi:<tag>

   (see `r-spieceasi/tags`_ for valid values for ``<tag>``)


.. |downloads_r-spieceasi| image:: https://img.shields.io/conda/dn/bioconda/r-spieceasi.svg?style=flat
   :target: https://anaconda.org/bioconda/r-spieceasi
   :alt:   (downloads)
.. |docker_r-spieceasi| image:: https://quay.io/repository/biocontainers/r-spieceasi/status
   :target: https://quay.io/repository/biocontainers/r-spieceasi
.. _`r-spieceasi/tags`: https://quay.io/repository/biocontainers/r-spieceasi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-spieceasi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-spieceasi/README.html