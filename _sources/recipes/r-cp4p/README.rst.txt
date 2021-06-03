:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cp4p'
.. highlight: bash

r-cp4p
======

.. conda:recipe:: r-cp4p
   :replaces_section_title:
   :noindex:

   Functions to check whether a vector of p\-values respects the assumptions of FDR \(false discovery rate\) control procedures and to compute adjusted p\-values.

   :homepage: https://CRAN.R-project.org/package=cp4p
   :license: GPL3 / GPL-3
   :recipe: /`r-cp4p <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cp4p>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cp4p/meta.yaml>`_

   


.. conda:package:: r-cp4p

   |downloads_r-cp4p| |docker_r-cp4p|

   :versions:
      
      

      ``0.3.6-4``,  ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-1``,  ``0.3.5-0``

      

   
   :depends bioconductor-limma: 
   :depends bioconductor-multtest: 
   :depends bioconductor-qvalue: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-mess: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-cp4p

   and update with::

      conda update r-cp4p

   or use the docker container::

      docker pull quay.io/biocontainers/r-cp4p:<tag>

   (see `r-cp4p/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cp4p| image:: https://img.shields.io/conda/dn/bioconda/r-cp4p.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cp4p
   :alt:   (downloads)
.. |docker_r-cp4p| image:: https://quay.io/repository/biocontainers/r-cp4p/status
   :target: https://quay.io/repository/biocontainers/r-cp4p
.. _`r-cp4p/tags`: https://quay.io/repository/biocontainers/r-cp4p?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cp4p/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cp4p/README.html