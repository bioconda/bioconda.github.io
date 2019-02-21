:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'readseq'
.. highlight: bash

readseq
=======

.. conda:recipe:: readseq
   :replaces_section_title:

   Read \& reformat biosequences\, Java command\-line version

   :homepage: http://iubio.bio.indiana.edu/soft/molbio/readseq/java/
   :license: PUBLIC DOMAIN
   :recipe: /`readseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readseq/meta.yaml>`_

   


.. conda:package:: readseq

   |downloads_readseq| |docker_readseq|

   :versions: 2.1.30-1, 2.1.30-0
   
   :depends openjdk: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install readseq

   and update with::

      conda update readseq

   or use the docker container::

      docker pull quay.io/biocontainers/readseq:<tag>

   (see `readseq/tags`_ for valid values for ``<tag>``)


.. |downloads_readseq| image:: https://img.shields.io/conda/dn/bioconda/readseq.svg?style=flat
   :alt:   (downloads)
.. |docker_readseq| image:: https://quay.io/repository/biocontainers/readseq/status
   :target: https://quay.io/repository/biocontainers/readseq
.. _`readseq/tags`: https://quay.io/repository/biocontainers/readseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/readseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/readseq/README.html