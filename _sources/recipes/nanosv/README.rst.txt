:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanosv'
.. highlight: bash

nanosv
======

.. conda:recipe:: nanosv
   :replaces_section_title:

   Structural variation detection tool for Oxford Nanopore data.

   :homepage: https://github.com/mroosmalen/nanosv
   :license: MIT / MIT License
   :recipe: /`nanosv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosv/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-017-01343-4`

   


.. conda:package:: nanosv

   |downloads_nanosv| |docker_nanosv|

   :versions: 1.2.4-0, 1.2.3-0, 1.2.2-0, 1.2.0-1, 1.1.2-1, 1.1.2-0, 0.0.1-0
   
   :depends pysam: 
   :depends python: >3
   :depends pyvcf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanosv

   and update with::

      conda update nanosv

   or use the docker container::

      docker pull quay.io/biocontainers/nanosv:<tag>

   (see `nanosv/tags`_ for valid values for ``<tag>``)


.. |downloads_nanosv| image:: https://img.shields.io/conda/dn/bioconda/nanosv.svg?style=flat
   :target: https://anaconda.org/bioconda/nanosv
   :alt:   (downloads)
.. |docker_nanosv| image:: https://quay.io/repository/biocontainers/nanosv/status
   :target: https://quay.io/repository/biocontainers/nanosv
.. _`nanosv/tags`: https://quay.io/repository/biocontainers/nanosv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanosv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanosv/README.html