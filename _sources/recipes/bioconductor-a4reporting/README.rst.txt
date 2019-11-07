:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-a4reporting'
.. highlight: bash

bioconductor-a4reporting
========================

.. conda:recipe:: bioconductor-a4reporting
   :replaces_section_title:

   Automated Affymetrix Array Analysis Reporting Package

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/a4Reporting.html
   :license: GPL-3
   :recipe: /`bioconductor-a4reporting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4reporting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4reporting/meta.yaml>`_
   :links: biotools: :biotools:`a4reporting`, doi: :doi:`10.1038/nmeth.3252`

   Automated Affymetrix Array Analysis Reporting Package


.. conda:package:: bioconductor-a4reporting

   |downloads_bioconductor-a4reporting| |docker_bioconductor-a4reporting|

   :versions: 1.34.0-0, 1.32.0-1, 1.30.0-0, 1.28.0-0, 1.26.0-0
   
   :depends bioconductor-annaffy: >=1.58.0,<1.59.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-a4reporting

   and update with::

      conda update bioconductor-a4reporting

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-a4reporting:<tag>

   (see `bioconductor-a4reporting/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-a4reporting| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-a4reporting.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-a4reporting
   :alt:   (downloads)
.. |docker_bioconductor-a4reporting| image:: https://quay.io/repository/biocontainers/bioconductor-a4reporting/status
   :target: https://quay.io/repository/biocontainers/bioconductor-a4reporting
.. _`bioconductor-a4reporting/tags`: https://quay.io/repository/biocontainers/bioconductor-a4reporting?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-a4reporting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-a4reporting/README.html