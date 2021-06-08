:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-recetox-aplcms'
.. highlight: bash

r-recetox-aplcms
================

.. conda:recipe:: r-recetox-aplcms
   :replaces_section_title:
   :noindex:

   apLCMS generates a feature table from a batch of LC\/MS spectra.

   :homepage: https://github.com/RECETOX
   :license: GPL-2.0
   :recipe: /`r-recetox-aplcms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-aplcms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-aplcms/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.analchem.6b01214`

   


.. conda:package:: r-recetox-aplcms

   |downloads_r-recetox-aplcms| |docker_r-recetox-aplcms|

   :versions:
      
      

      ``0-0``

      

   
   :depends bioconductor-mzr: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-doparallel: 
   :depends r-e1071: 
   :depends r-foreach: 
   :depends r-gbm: 
   :depends r-iterators: 
   :depends r-mass: 
   :depends r-randomforest: 
   :depends r-rcpp: 
   :depends r-rgl: 
   :depends r-rocr: 
   :depends r-rocs: 
   :depends r-snow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-recetox-aplcms

   and update with::

      conda update r-recetox-aplcms

   or use the docker container::

      docker pull quay.io/biocontainers/r-recetox-aplcms:<tag>

   (see `r-recetox-aplcms/tags`_ for valid values for ``<tag>``)


.. |downloads_r-recetox-aplcms| image:: https://img.shields.io/conda/dn/bioconda/r-recetox-aplcms.svg?style=flat
   :target: https://anaconda.org/bioconda/r-recetox-aplcms
   :alt:   (downloads)
.. |docker_r-recetox-aplcms| image:: https://quay.io/repository/biocontainers/r-recetox-aplcms/status
   :target: https://quay.io/repository/biocontainers/r-recetox-aplcms
.. _`r-recetox-aplcms/tags`: https://quay.io/repository/biocontainers/r-recetox-aplcms?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-recetox-aplcms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-recetox-aplcms/README.html