:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbwt'
.. highlight: bash

pbwt
====

.. conda:recipe:: pbwt
   :replaces_section_title:

   Positional Burrows\-Wheeler Transform \-  methods for storing and computing on genome variation data sets

   :homepage: https://github.com/richarddurbin/pbwt
   :license: Apache / Apache-2.0
   :recipe: /`pbwt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbwt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbwt/meta.yaml>`_
   :links: biotools: :biotools:`pbwt`

   


.. conda:package:: pbwt

   |downloads_pbwt| |docker_pbwt|

   :versions: 3.0-0
   
   :depends htslib: >=1.9,<1.10.0a0
   :depends libgcc-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbwt

   and update with::

      conda update pbwt

   or use the docker container::

      docker pull quay.io/biocontainers/pbwt:<tag>

   (see `pbwt/tags`_ for valid values for ``<tag>``)


.. |downloads_pbwt| image:: https://img.shields.io/conda/dn/bioconda/pbwt.svg?style=flat
   :target: https://anaconda.org/bioconda/pbwt
   :alt:   (downloads)
.. |docker_pbwt| image:: https://quay.io/repository/biocontainers/pbwt/status
   :target: https://quay.io/repository/biocontainers/pbwt
.. _`pbwt/tags`: https://quay.io/repository/biocontainers/pbwt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbwt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbwt/README.html