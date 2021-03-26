:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cimpl'
.. highlight: bash

r-cimpl
=======

.. conda:recipe:: r-cimpl
   :replaces_section_title:
   :noindex:

   An analysis package for multi sample insertional mutagenesis data \(including viral\- and transposon\-based systems\) using Gaussian kernel convolution to identify common insertion sites.

   :homepage: http://ccb.nki.nl/software/
   :license: GPL-3
   :recipe: /`r-cimpl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cimpl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cimpl/meta.yaml>`_

   


.. conda:package:: r-cimpl

   |downloads_r-cimpl| |docker_r-cimpl|

   :versions:
      
      

      ``1.1-3``,  ``1.1-2``,  ``1.1-0``

      

   
   :depends bioconductor-biomart: 
   :depends bioconductor-biostrings: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-kernsmooth: 
   :depends r-mass: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-cimpl

   and update with::

      conda update r-cimpl

   or use the docker container::

      docker pull quay.io/biocontainers/r-cimpl:<tag>

   (see `r-cimpl/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cimpl| image:: https://img.shields.io/conda/dn/bioconda/r-cimpl.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cimpl
   :alt:   (downloads)
.. |docker_r-cimpl| image:: https://quay.io/repository/biocontainers/r-cimpl/status
   :target: https://quay.io/repository/biocontainers/r-cimpl
.. _`r-cimpl/tags`: https://quay.io/repository/biocontainers/r-cimpl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cimpl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cimpl/README.html