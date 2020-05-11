:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtca'
.. highlight: bash

bioconductor-rtca
=================

.. conda:recipe:: bioconductor-rtca
   :replaces_section_title:

   Open\-source toolkit to analyse data from xCELLigence System \(RTCA\)

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/RTCA.html
   :license: LGPL-3
   :recipe: /`bioconductor-rtca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtca/meta.yaml>`_
   :links: biotools: :biotools:`rtca`, doi: :doi:`10.1016/j.compbiolchem.2013.12.004`

   Import\, analyze and visualize data from Roche\(R\) xCELLigence RTCA systems. The package imports real\-time cell electrical impedance data into R. As an alternative to commercial software shipped along the system\, the Bioconductor package RTCA provides several unique transformation \(normalization\) strategies and various visualization tools.


.. conda:package:: bioconductor-rtca

   |downloads_bioconductor-rtca| |docker_bioconductor-rtca|

   :versions: 1.40.0-0, 1.38.0-0, 1.36.0-1, 1.34.1-0, 1.34.0-0, 1.32.0-0, 1.30.0-0, 1.28.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-gtools: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtca

   and update with::

      conda update bioconductor-rtca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtca:<tag>

   (see `bioconductor-rtca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtca
   :alt:   (downloads)
.. |docker_bioconductor-rtca| image:: https://quay.io/repository/biocontainers/bioconductor-rtca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtca
.. _`bioconductor-rtca/tags`: https://quay.io/repository/biocontainers/bioconductor-rtca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtca/README.html