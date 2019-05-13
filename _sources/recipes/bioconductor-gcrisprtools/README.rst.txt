:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcrisprtools'
.. highlight: bash

bioconductor-gcrisprtools
=========================

.. conda:recipe:: bioconductor-gcrisprtools
   :replaces_section_title:

   Set of tools for evaluating pooled high\-throughput screening experiments\, typically employing CRISPR\/Cas9 or shRNA expression cassettes. Contains methods for interrogating library and cassette behavior within an experiment\, identifying differentially abundant cassettes\, aggregating signals to identify candidate targets for empirical validation\, hypothesis testing\, and comprehensive reporting.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gCrisprTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gcrisprtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcrisprtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcrisprtools/meta.yaml>`_
   :links: biotools: :biotools:`gcrisprtools`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-gcrisprtools

   |downloads_bioconductor-gcrisprtools| |docker_bioconductor-gcrisprtools|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-panther.db: >=1.0.0,<1.1.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-ggplot2: 
   :depends r-rmarkdown: 
   :depends r-robustrankaggreg: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcrisprtools

   and update with::

      conda update bioconductor-gcrisprtools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcrisprtools:<tag>

   (see `bioconductor-gcrisprtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcrisprtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcrisprtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcrisprtools
   :alt:   (downloads)
.. |docker_bioconductor-gcrisprtools| image:: https://quay.io/repository/biocontainers/bioconductor-gcrisprtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcrisprtools
.. _`bioconductor-gcrisprtools/tags`: https://quay.io/repository/biocontainers/bioconductor-gcrisprtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcrisprtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcrisprtools/README.html