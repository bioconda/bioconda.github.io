:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-polyfit'
.. highlight: bash

bioconductor-polyfit
====================

.. conda:recipe:: bioconductor-polyfit
   :replaces_section_title:

   Polyfit is an add\-on to the packages DESeq which ensures the p\-value distribution is uniform over the interval \[0\, 1\] for data satisfying the null hypothesis of no differential expression\, and uses an adpated Storey\-Tibshiran method to calculate q\-values.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Polyfit.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-polyfit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-polyfit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-polyfit/meta.yaml>`_
   :links: biotools: :biotools:`polyfit`, doi: :doi:`10.7717/peerj.576`

   


.. conda:package:: bioconductor-polyfit

   |downloads_bioconductor-polyfit| |docker_bioconductor-polyfit|

   :versions: 1.20.0-0, 1.18.0-1, 1.16.1-0, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-deseq: >=1.38.0,<1.39.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-polyfit

   and update with::

      conda update bioconductor-polyfit

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-polyfit:<tag>

   (see `bioconductor-polyfit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-polyfit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-polyfit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-polyfit
   :alt:   (downloads)
.. |docker_bioconductor-polyfit| image:: https://quay.io/repository/biocontainers/bioconductor-polyfit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-polyfit
.. _`bioconductor-polyfit/tags`: https://quay.io/repository/biocontainers/bioconductor-polyfit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-polyfit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-polyfit/README.html