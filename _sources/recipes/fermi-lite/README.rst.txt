:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fermi-lite'
.. highlight: bash

fermi-lite
==========

.. conda:recipe:: fermi-lite
   :replaces_section_title:
   :noindex:

   Fermi\-lite is a standalone C library as well as a command\-line tool for assembling Illumina short reads in regions from 100bp to 10 million bp in size.

   :homepage: https://github.com/lh3/fermi-lite
   :license: MIT / MIT
   :recipe: /`fermi-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi-lite/meta.yaml>`_

   


.. conda:package:: fermi-lite

   |downloads_fermi-lite| |docker_fermi-lite|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fermi-lite

   and update with::

      conda update fermi-lite

   or use the docker container::

      docker pull quay.io/biocontainers/fermi-lite:<tag>

   (see `fermi-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_fermi-lite| image:: https://img.shields.io/conda/dn/bioconda/fermi-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/fermi-lite
   :alt:   (downloads)
.. |docker_fermi-lite| image:: https://quay.io/repository/biocontainers/fermi-lite/status
   :target: https://quay.io/repository/biocontainers/fermi-lite
.. _`fermi-lite/tags`: https://quay.io/repository/biocontainers/fermi-lite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fermi-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fermi-lite/README.html