:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocstyle'
.. highlight: bash

bioconductor-biocstyle
======================

.. conda:recipe:: bioconductor-biocstyle
   :replaces_section_title:

   Provides standard formatting styles for Bioconductor PDF and HTML documents. Package vignettes illustrate use and functionality.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiocStyle.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocstyle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocstyle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocstyle/meta.yaml>`_
   :links: biotools: :biotools:`biocstyle`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-biocstyle

   |downloads_bioconductor-biocstyle| |docker_bioconductor-biocstyle|

   :versions: 2.12.0-0, 2.10.0-0, 2.8.2-0, 2.6.0-0, 2.4.1-0, 2.0.3-1, 2.0.3-0, 2.0.2-0, 1.8.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-biocmanager: 
   :depends r-bookdown: 
   :depends r-knitr: >=1.12
   :depends r-rmarkdown: >=1.2
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocstyle

   and update with::

      conda update bioconductor-biocstyle

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocstyle:<tag>

   (see `bioconductor-biocstyle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocstyle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocstyle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocstyle
   :alt:   (downloads)
.. |docker_bioconductor-biocstyle| image:: https://quay.io/repository/biocontainers/bioconductor-biocstyle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocstyle
.. _`bioconductor-biocstyle/tags`: https://quay.io/repository/biocontainers/bioconductor-biocstyle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocstyle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocstyle/README.html