:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biasaway'
.. highlight: bash

biasaway
========

.. conda:recipe:: biasaway
   :replaces_section_title:

   BiasAway\: a tool to generate composition\-matched background sequences

   :homepage: https://bitbucket.org/CBGR/biasaway
   :documentation: https://biasaway.rtfd.io
   
   :license: GPL / GPLv3
   :recipe: /`biasaway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biasaway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biasaway/meta.yaml>`_

   BiasAway provides user with six models for generating background sequences useful to enrichment analyses. These backgrounds derived from mono\- and di\- nucleotide shuffled sequences\, and genomic sequences matched to the GC content of the target data.


.. conda:package:: biasaway

   |downloads_biasaway| |docker_biasaway|

   :versions: 2.0.4-0, 2.0.1-0, 1.0.4-0, 1.0.2-0
   
   :depends biopython: 
   :depends numpy: <=1.16.5
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biasaway

   and update with::

      conda update biasaway

   or use the docker container::

      docker pull quay.io/biocontainers/biasaway:<tag>

   (see `biasaway/tags`_ for valid values for ``<tag>``)


.. |downloads_biasaway| image:: https://img.shields.io/conda/dn/bioconda/biasaway.svg?style=flat
   :target: https://anaconda.org/bioconda/biasaway
   :alt:   (downloads)
.. |docker_biasaway| image:: https://quay.io/repository/biocontainers/biasaway/status
   :target: https://quay.io/repository/biocontainers/biasaway
.. _`biasaway/tags`: https://quay.io/repository/biocontainers/biasaway?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biasaway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biasaway/README.html