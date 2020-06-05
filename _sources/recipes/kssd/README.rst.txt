:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kssd'
.. highlight: bash

kssd
====

.. conda:recipe:: kssd
   :replaces_section_title:
   :noindex:

   K\-mer substring space decomposition

   :homepage: https://github.com/yhg926/public_kssd
   :license: Apache Software License
   :recipe: /`kssd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kssd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kssd/meta.yaml>`_
   :links: doi: :doi:`10.1101/729665`

   Kssd is a command\-line tool for large\-scale sequences sketching and resemblance\- and 
   containment\-analysis. It sketches sequences by k\-mer substring space sampling\/shuffling. 
   It handles DNA sequences of both fasta or fastq format\, whether gzipped or not. 



.. conda:package:: kssd

   |downloads_kssd| |docker_kssd|

   :versions:
      
      

      ``1.1-0``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kssd

   and update with::

      conda update kssd

   or use the docker container::

      docker pull quay.io/biocontainers/kssd:<tag>

   (see `kssd/tags`_ for valid values for ``<tag>``)


.. |downloads_kssd| image:: https://img.shields.io/conda/dn/bioconda/kssd.svg?style=flat
   :target: https://anaconda.org/bioconda/kssd
   :alt:   (downloads)
.. |docker_kssd| image:: https://quay.io/repository/biocontainers/kssd/status
   :target: https://quay.io/repository/biocontainers/kssd
.. _`kssd/tags`: https://quay.io/repository/biocontainers/kssd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kssd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kssd/README.html