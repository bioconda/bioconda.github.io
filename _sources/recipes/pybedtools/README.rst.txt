:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybedtools'
.. highlight: bash

pybedtools
==========

.. conda:recipe:: pybedtools
   :replaces_section_title:

   Wraps BEDTools for use in Python and adds many additional features.

   :homepage: https://github.com/daler/pybedtools
   :license: MIT
   :recipe: /`pybedtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedtools/meta.yaml>`_
   :links: biotools: :biotools:`pybedtools`

   


.. conda:package:: pybedtools

   |downloads_pybedtools| |docker_pybedtools|

   :versions: 0.8.0-1, 0.8.0-0, 0.7.10-3, 0.7.10-2, 0.7.10-1, 0.7.10-0, 0.7.9-0, 0.7.8-1, 0.7.7-1, 0.7.6-1, 0.7.5-0, 0.7.4-0, 0.7.2-1, 0.7.0-1, 0.6.9-3, 0.6.9-2, 0.6.9-1, 0.6.9-0
   
   :depends bedtools: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends pandas: 
   :depends pysam: >=0.8.1
   :depends python: >=2.7,<2.8.0a0
   :depends six: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pybedtools

   and update with::

      conda update pybedtools

   or use the docker container::

      docker pull quay.io/biocontainers/pybedtools:<tag>

   (see `pybedtools/tags`_ for valid values for ``<tag>``)


.. |downloads_pybedtools| image:: https://img.shields.io/conda/dn/bioconda/pybedtools.svg?style=flat
   :alt:   (downloads)
.. |docker_pybedtools| image:: https://quay.io/repository/biocontainers/pybedtools/status
   :target: https://quay.io/repository/biocontainers/pybedtools
.. _`pybedtools/tags`: https://quay.io/repository/biocontainers/pybedtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybedtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybedtools/README.html