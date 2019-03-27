:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bedops'
.. highlight: bash

bedops
======

.. conda:recipe:: bedops
   :replaces_section_title:

   High\-performance genomic feature operations.

   :homepage: http://bedops.readthedocs.io
   :license: GPLv2
   :recipe: /`bedops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedops/meta.yaml>`_
   :links: biotools: :biotools:`Bedops`, doi: :doi:`10.1093/bioinformatics/bts277`

   


.. conda:package:: bedops

   |downloads_bedops| |docker_bedops|

   :versions: 2.4.35-1, 2.4.35-0, 2.4.34-0, 2.4.33-0, 2.4.32-0, 2.4.30-0, 2.4.27-0, 2.4.26-0, 2.4.25-0, 2.4.24-0, 2.4.23-0, 2.4.22-0, 2.4.21-0, 2.4.20-0, 2.4.19-0
   
   :depends libstdcxx-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bedops

   and update with::

      conda update bedops

   or use the docker container::

      docker pull quay.io/biocontainers/bedops:<tag>

   (see `bedops/tags`_ for valid values for ``<tag>``)


.. |downloads_bedops| image:: https://img.shields.io/conda/dn/bioconda/bedops.svg?style=flat
   :alt:   (downloads)
.. |docker_bedops| image:: https://quay.io/repository/biocontainers/bedops/status
   :target: https://quay.io/repository/biocontainers/bedops
.. _`bedops/tags`: https://quay.io/repository/biocontainers/bedops?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bedops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bedops/README.html