:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-structssi'
.. highlight: bash

r-structssi
===========

.. conda:recipe:: r-structssi
   :replaces_section_title:
   :noindex:

   Performs multiple testing corrections that take specific structure of hypotheses into account.

   :homepage: https://CRAN.R-project.org/package=structSSI
   :license: GPL2 / GPL-2
   :recipe: /`r-structssi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-structssi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-structssi/meta.yaml>`_

   


.. conda:package:: r-structssi

   |downloads_r-structssi| |docker_r-structssi|

   :versions:
      
      

      ``1.1.1-6``,  ``1.1.1-5``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends bioconductor-multtest: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-reshape2: 
   :depends r-rjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-structssi

   and update with::

      conda update r-structssi

   or use the docker container::

      docker pull quay.io/biocontainers/r-structssi:<tag>

   (see `r-structssi/tags`_ for valid values for ``<tag>``)


.. |downloads_r-structssi| image:: https://img.shields.io/conda/dn/bioconda/r-structssi.svg?style=flat
   :target: https://anaconda.org/bioconda/r-structssi
   :alt:   (downloads)
.. |docker_r-structssi| image:: https://quay.io/repository/biocontainers/r-structssi/status
   :target: https://quay.io/repository/biocontainers/r-structssi
.. _`r-structssi/tags`: https://quay.io/repository/biocontainers/r-structssi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-structssi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-structssi/README.html