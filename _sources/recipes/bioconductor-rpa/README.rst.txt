:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rpa'
.. highlight: bash

bioconductor-rpa
================

.. conda:recipe:: bioconductor-rpa
   :replaces_section_title:

   Probabilistic analysis of probe reliability and differential gene expression on short oligonucleotide arrays.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RPA.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-rpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpa/meta.yaml>`_
   :links: biotools: :biotools:`rpa`

   


.. conda:package:: bioconductor-rpa

   |downloads_bioconductor-rpa| |docker_bioconductor-rpa|

   :versions: 1.38.0-0, 1.36.0-0, 1.34.0-0, 1.32.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-phyloseq: >=1.26.0,<1.27.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rpa

   and update with::

      conda update bioconductor-rpa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rpa:<tag>

   (see `bioconductor-rpa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rpa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rpa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rpa| image:: https://quay.io/repository/biocontainers/bioconductor-rpa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rpa
.. _`bioconductor-rpa/tags`: https://quay.io/repository/biocontainers/bioconductor-rpa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rpa/README.html