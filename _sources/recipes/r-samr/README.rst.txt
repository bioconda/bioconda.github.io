:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-samr'
.. highlight: bash

r-samr
======

.. conda:recipe:: r-samr
   :replaces_section_title:
   :noindex:

   Significance Analysis of Microarrays

   :homepage: http://www-stat.stanford.edu/~tibs/SAM
   :license: LGPL / LGPL
   :recipe: /`r-samr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-samr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-samr/meta.yaml>`_

   


.. conda:package:: r-samr

   |downloads_r-samr| |docker_r-samr|

   :versions:
      
      

      ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends bioconductor-impute: ``>=1.56.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gsa: 
   :depends r-matrixstats: 
   :depends r-openxlsx: 
   :depends r-shiny: 
   :depends r-shinyfiles: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-samr

   and update with::

      conda update r-samr

   or use the docker container::

      docker pull quay.io/biocontainers/r-samr:<tag>

   (see `r-samr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-samr| image:: https://img.shields.io/conda/dn/bioconda/r-samr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-samr
   :alt:   (downloads)
.. |docker_r-samr| image:: https://quay.io/repository/biocontainers/r-samr/status
   :target: https://quay.io/repository/biocontainers/r-samr
.. _`r-samr/tags`: https://quay.io/repository/biocontainers/r-samr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-samr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-samr/README.html