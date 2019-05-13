:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipenrich.data'
.. highlight: bash

bioconductor-chipenrich.data
============================

.. conda:recipe:: bioconductor-chipenrich.data
   :replaces_section_title:

   Supporting data for the chipenrich package. Includes pre\-defined gene sets\, gene locus definitions\, and mappability estimates.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/chipenrich.data.html
   :license: GPL-3
   :recipe: /`bioconductor-chipenrich.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipenrich.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipenrich.data/meta.yaml>`_

   


.. conda:package:: bioconductor-chipenrich.data

   |downloads_bioconductor-chipenrich.data| |docker_bioconductor-chipenrich.data|

   :versions: 2.6.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-readr: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipenrich.data

   and update with::

      conda update bioconductor-chipenrich.data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipenrich.data:<tag>

   (see `bioconductor-chipenrich.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipenrich.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipenrich.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipenrich.data
   :alt:   (downloads)
.. |docker_bioconductor-chipenrich.data| image:: https://quay.io/repository/biocontainers/bioconductor-chipenrich.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipenrich.data
.. _`bioconductor-chipenrich.data/tags`: https://quay.io/repository/biocontainers/bioconductor-chipenrich.data?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipenrich.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipenrich.data/README.html