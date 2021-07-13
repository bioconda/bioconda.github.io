:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-recetox-xmsannotator'
.. highlight: bash

r-recetox-xmsannotator
======================

.. conda:recipe:: r-recetox-xmsannotator
   :replaces_section_title:
   :noindex:

   Annotate peak intensity table with compounds from the compounds database. A heavily modified fork of the original xMSannotator by Karan Uppal.

   :homepage: https://github.com/recetox/recetox-xMSannotator
   :license: GPL2.0
   :recipe: /`r-recetox-xmsannotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-xmsannotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-xmsannotator/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.analchem.6b01214`

   


.. conda:package:: r-recetox-xmsannotator

   |downloads_r-recetox-xmsannotator| |docker_r-recetox-xmsannotator|

   :versions:
      
      

      ``0.9.0-0``

      

   
   :depends bioconductor-rhdf5: 
   :depends r-arrow: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: ``>=1``
   :depends r-flashclust: 
   :depends r-purrr: 
   :depends r-rcpp: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-recetox-xmsannotator

   and update with::

      conda update r-recetox-xmsannotator

   or use the docker container::

      docker pull quay.io/biocontainers/r-recetox-xmsannotator:<tag>

   (see `r-recetox-xmsannotator/tags`_ for valid values for ``<tag>``)


.. |downloads_r-recetox-xmsannotator| image:: https://img.shields.io/conda/dn/bioconda/r-recetox-xmsannotator.svg?style=flat
   :target: https://anaconda.org/bioconda/r-recetox-xmsannotator
   :alt:   (downloads)
.. |docker_r-recetox-xmsannotator| image:: https://quay.io/repository/biocontainers/r-recetox-xmsannotator/status
   :target: https://quay.io/repository/biocontainers/r-recetox-xmsannotator
.. _`r-recetox-xmsannotator/tags`: https://quay.io/repository/biocontainers/r-recetox-xmsannotator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-recetox-xmsannotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-recetox-xmsannotator/README.html