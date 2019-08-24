:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ega2'
.. highlight: bash

ega2
====

.. conda:recipe:: ega2
   :replaces_section_title:

   EGA download client v2

   :homepage: https://ega-archive.org/download/downloader-quickguide-v2
   :license: unknown
   :recipe: /`ega2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ega2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ega2/meta.yaml>`_

   The most up\-to\-date download client for EGA can be found in the pyega3
   package. However\, that tool does not download a fairly large chunk of EGA
   files \(those ending in .gpg rather than .cip\)\, which limits its generic
   usefulness. This package attempts to provide the v2 Java client in a more
   useful manner than a simple .jar.


.. conda:package:: ega2

   |downloads_ega2| |docker_ega2|

   :versions: 2.2.2-0
   
   :depends openjdk: >=8
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ega2

   and update with::

      conda update ega2

   or use the docker container::

      docker pull quay.io/biocontainers/ega2:<tag>

   (see `ega2/tags`_ for valid values for ``<tag>``)


.. |downloads_ega2| image:: https://img.shields.io/conda/dn/bioconda/ega2.svg?style=flat
   :target: https://anaconda.org/bioconda/ega2
   :alt:   (downloads)
.. |docker_ega2| image:: https://quay.io/repository/biocontainers/ega2/status
   :target: https://quay.io/repository/biocontainers/ega2
.. _`ega2/tags`: https://quay.io/repository/biocontainers/ega2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ega2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ega2/README.html