:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scimpute'
.. highlight: bash

r-scimpute
==========

.. conda:recipe:: r-scimpute
   :replaces_section_title:
   :noindex:

   scImpute is accurate and robust imputation of single\-cell RNA sequencing data.

   :homepage: https://github.com/Vivianstats/scImpute
   :license: GPL / GPL
   :recipe: /`r-scimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scimpute/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-018-03405-7`

   


.. conda:package:: r-scimpute

   |downloads_r-scimpute| |docker_r-scimpute|

   :versions:
      
      

      ``0.0.8-1``,  ``0.0.8-0``,  ``0.0.6-1``,  ``0.0.6-0``

      

   
   :depends parallel: 
   :depends r: ``>=3.3.2``
   :depends r-devtools: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-kernlab: 
   :depends r-knitr: 
   :depends r-markdown: 
   :depends r-penalized: 
   :depends r-rsvd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-scimpute

   and update with::

      conda update r-scimpute

   or use the docker container::

      docker pull quay.io/biocontainers/r-scimpute:<tag>

   (see `r-scimpute/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scimpute| image:: https://img.shields.io/conda/dn/bioconda/r-scimpute.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scimpute
   :alt:   (downloads)
.. |docker_r-scimpute| image:: https://quay.io/repository/biocontainers/r-scimpute/status
   :target: https://quay.io/repository/biocontainers/r-scimpute
.. _`r-scimpute/tags`: https://quay.io/repository/biocontainers/r-scimpute?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scimpute/README.html