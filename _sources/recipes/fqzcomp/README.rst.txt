:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fqzcomp'
.. highlight: bash

fqzcomp
=======

.. conda:recipe:: fqzcomp
   :replaces_section_title:

   Fqzcomp is a basic fastq compressor\, designed primarily for high performance.

   :homepage: https://sourceforge.net/projects/fqzcomp/
   :license: BSD / BSD License
   :recipe: /`fqzcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqzcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqzcomp/meta.yaml>`_

   


.. conda:package:: fqzcomp

   |downloads_fqzcomp| |docker_fqzcomp|

   :versions: 4.6-0
   
   :depends libstdcxx-ng: >=4.9
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fqzcomp

   and update with::

      conda update fqzcomp

   or use the docker container::

      docker pull quay.io/biocontainers/fqzcomp:<tag>

   (see `fqzcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_fqzcomp| image:: https://img.shields.io/conda/dn/bioconda/fqzcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/fqzcomp
   :alt:   (downloads)
.. |docker_fqzcomp| image:: https://quay.io/repository/biocontainers/fqzcomp/status
   :target: https://quay.io/repository/biocontainers/fqzcomp
.. _`fqzcomp/tags`: https://quay.io/repository/biocontainers/fqzcomp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqzcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqzcomp/README.html