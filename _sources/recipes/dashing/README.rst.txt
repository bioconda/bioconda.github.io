:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dashing'
.. highlight: bash

dashing
=======

.. conda:recipe:: dashing
   :replaces_section_title:

   Fast and accurate genomic distances using HyperLogLog

   :homepage: https://github.com/dnbaker/dashing
   :license: GPL-3
   :recipe: /`dashing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dashing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dashing/meta.yaml>`_
   :links: doi: :doi:`10.1101/501726`

   


.. conda:package:: dashing

   |downloads_dashing| |docker_dashing|

   :versions: 0.4.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dashing

   and update with::

      conda update dashing

   or use the docker container::

      docker pull quay.io/biocontainers/dashing:<tag>

   (see `dashing/tags`_ for valid values for ``<tag>``)


.. |downloads_dashing| image:: https://img.shields.io/conda/dn/bioconda/dashing.svg?style=flat
   :target: https://anaconda.org/bioconda/dashing
   :alt:   (downloads)
.. |docker_dashing| image:: https://quay.io/repository/biocontainers/dashing/status
   :target: https://quay.io/repository/biocontainers/dashing
.. _`dashing/tags`: https://quay.io/repository/biocontainers/dashing?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dashing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dashing/README.html