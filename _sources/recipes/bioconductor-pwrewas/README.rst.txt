:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwrewas'
.. highlight: bash

bioconductor-pwrewas
====================

.. conda:recipe:: bioconductor-pwrewas
   :replaces_section_title:
   :noindex:

   A user\-friendly tool for comprehensive power estimation for epigenome wide association studies \(EWAS\)

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/pwrEWAS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pwrewas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwrewas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwrewas/meta.yaml>`_

   pwrEWAS is a user\-friendly tool to assists researchers in the design and planning of EWAS to help circumvent under\- and overpowered studies.


.. conda:package:: bioconductor-pwrewas

   |downloads_bioconductor-pwrewas| |docker_bioconductor-pwrewas|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-genefilter: ``>=1.72.0,<1.73.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-pwrewas.data: ``>=1.4.0,<1.5.0``
   :depends r-abind: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-biocmanager: 
   :depends r-cpgassoc: 
   :depends r-doparallel: 
   :depends r-dosnow: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinywidgets: 
   :depends r-truncnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pwrewas

   and update with::

      conda update bioconductor-pwrewas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pwrewas:<tag>

   (see `bioconductor-pwrewas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pwrewas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwrewas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwrewas
   :alt:   (downloads)
.. |docker_bioconductor-pwrewas| image:: https://quay.io/repository/biocontainers/bioconductor-pwrewas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwrewas
.. _`bioconductor-pwrewas/tags`: https://quay.io/repository/biocontainers/bioconductor-pwrewas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwrewas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwrewas/README.html