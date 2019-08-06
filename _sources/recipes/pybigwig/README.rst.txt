:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybigwig'
.. highlight: bash

pybigwig
========

.. conda:recipe:: pybigwig
   :replaces_section_title:

   A python extension written in C for quick access to bigWig files.

   :homepage: https://github.com/dpryan79/pyBigWig
   :license: MIT
   :recipe: /`pybigwig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybigwig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybigwig/meta.yaml>`_

   


.. conda:package:: pybigwig

   |downloads_pybigwig| |docker_pybigwig|

   :versions: 0.3.17-0, 0.3.16-0, 0.3.15-0, 0.3.14-0, 0.3.13-2, 0.3.13-1, 0.3.13-0, 0.3.12-2, 0.3.12-1, 0.3.12-0, 0.3.11-2, 0.3.11-1, 0.3.11-0, 0.3.10-0, 0.3.9-0, 0.3.8-0, 0.3.7-0, 0.3.6-1, 0.3.6-0, 0.3.5-0, 0.3.4-0, 0.3.3-0, 0.2.8-0, 0.2.7-0, 0.2.6-0, 0.2.5-0, 0.2.4-0, 0.2.3-0, 0.2.1b-1, 0.2.1b-0, 0.1.11-1, 0.1.11-0
   
   :depends libcurl: >=7.64.1,<8.0a0
   :depends libgcc-ng: >=7.3.0
   :depends numpy: >=1.16.4,<2.0a0
   :depends python: >=2.7,<2.8.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pybigwig

   and update with::

      conda update pybigwig

   or use the docker container::

      docker pull quay.io/biocontainers/pybigwig:<tag>

   (see `pybigwig/tags`_ for valid values for ``<tag>``)


.. |downloads_pybigwig| image:: https://img.shields.io/conda/dn/bioconda/pybigwig.svg?style=flat
   :target: https://anaconda.org/bioconda/pybigwig
   :alt:   (downloads)
.. |docker_pybigwig| image:: https://quay.io/repository/biocontainers/pybigwig/status
   :target: https://quay.io/repository/biocontainers/pybigwig
.. _`pybigwig/tags`: https://quay.io/repository/biocontainers/pybigwig?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybigwig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybigwig/README.html