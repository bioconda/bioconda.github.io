:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cleaver'
.. highlight: bash

bioconductor-cleaver
====================

.. conda:recipe:: bioconductor-cleaver
   :replaces_section_title:

   Cleavage of Polypeptide Sequences

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/cleaver.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-cleaver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cleaver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cleaver/meta.yaml>`_
   :links: biotools: :biotools:`cleaver`, doi: :doi:`10.1038/nmeth.3252`

   In\-silico cleavage of polypeptide sequences. The cleavage rules are taken from\: http\:\/\/web.expasy.org\/peptide\_cutter\/peptidecutter\_enzymes.html


.. conda:package:: bioconductor-cleaver

   |downloads_bioconductor-cleaver| |docker_bioconductor-cleaver|

   :versions: 1.26.0-0, 1.24.0-0, 1.22.0-1, 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cleaver

   and update with::

      conda update bioconductor-cleaver

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cleaver:<tag>

   (see `bioconductor-cleaver/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cleaver| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cleaver.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cleaver
   :alt:   (downloads)
.. |docker_bioconductor-cleaver| image:: https://quay.io/repository/biocontainers/bioconductor-cleaver/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cleaver
.. _`bioconductor-cleaver/tags`: https://quay.io/repository/biocontainers/bioconductor-cleaver?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cleaver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cleaver/README.html