:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-structstrings'
.. highlight: bash

bioconductor-structstrings
==========================

.. conda:recipe:: bioconductor-structstrings
   :replaces_section_title:

   Implementation of the dot bracket annotations with Biostrings

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/Structstrings.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-structstrings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structstrings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structstrings/meta.yaml>`_

   The Structstrings package implements the widely used dot bracket annotation for storing base pairing information in structured RNA. Structstrings uses the infrastructure provided by the Biostrings package and derives the DotBracketString and related classes from the BString class. From these\, base pair tables can be produced for in depth analysis. In addition\, the loop indices of the base pairs can be retrieved as well. For better efficiency\, information conversion is implemented in C\, inspired to a large extend by the ViennaRNA package.


.. conda:package:: bioconductor-structstrings

   |downloads_bioconductor-structstrings| |docker_bioconductor-structstrings|

   :versions: 1.4.0-0, 1.2.0-0, 1.0.3-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-xvector: >=0.28.0,<0.29.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-assertive: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-crayon: 
   :depends r-stringi: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-structstrings

   and update with::

      conda update bioconductor-structstrings

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-structstrings:<tag>

   (see `bioconductor-structstrings/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-structstrings| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-structstrings.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-structstrings
   :alt:   (downloads)
.. |docker_bioconductor-structstrings| image:: https://quay.io/repository/biocontainers/bioconductor-structstrings/status
   :target: https://quay.io/repository/biocontainers/bioconductor-structstrings
.. _`bioconductor-structstrings/tags`: https://quay.io/repository/biocontainers/bioconductor-structstrings?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-structstrings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-structstrings/README.html