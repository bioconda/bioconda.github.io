:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msmseda'
.. highlight: bash

bioconductor-msmseda
====================

.. conda:recipe:: bioconductor-msmseda
   :replaces_section_title:
   :noindex:

   Exploratory Data Analysis of LC\-MS\/MS data by spectral counts

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/msmsEDA.html
   :license: GPL-2
   :recipe: /`bioconductor-msmseda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmseda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmseda/meta.yaml>`_
   :links: biotools: :biotools:`msmseda`, doi: :doi:`10.1038/nmeth.3252`

   Exploratory data analysis to assess the quality of a set of LC\-MS\/MS experiments\, and visualize de influence of the involved factors.


.. conda:package:: bioconductor-msmseda

   |downloads_bioconductor-msmseda| |docker_bioconductor-msmseda|

   :versions:
      
      

      ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.16.0-0``

      

   
   :depends bioconductor-msnbase: ``>=2.16.0,<2.17.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gplots: 
   :depends r-mass: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msmseda

   and update with::

      conda update bioconductor-msmseda

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msmseda:<tag>

   (see `bioconductor-msmseda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msmseda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msmseda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msmseda
   :alt:   (downloads)
.. |docker_bioconductor-msmseda| image:: https://quay.io/repository/biocontainers/bioconductor-msmseda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msmseda
.. _`bioconductor-msmseda/tags`: https://quay.io/repository/biocontainers/bioconductor-msmseda?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msmseda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msmseda/README.html