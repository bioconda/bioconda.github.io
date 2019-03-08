:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squeakr'
.. highlight: bash

squeakr
=======

.. conda:recipe:: squeakr
   :replaces_section_title:

   An Exact and Approximate k\-mer Counting System

   :homepage: https://github.com/splatlab/squeakr
   :license: BSD / BSD-3-Clause
   :recipe: /`squeakr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squeakr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squeakr/meta.yaml>`_

   


.. conda:package:: squeakr

   |downloads_squeakr| |docker_squeakr|

   :versions: 0.5-2, 0.5-1, 0.5-0
   
   :depends boost: >=1.66.0,<1.66.1.0a0
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install squeakr

   and update with::

      conda update squeakr

   or use the docker container::

      docker pull quay.io/biocontainers/squeakr:<tag>

   (see `squeakr/tags`_ for valid values for ``<tag>``)


.. |downloads_squeakr| image:: https://img.shields.io/conda/dn/bioconda/squeakr.svg?style=flat
   :alt:   (downloads)
.. |docker_squeakr| image:: https://quay.io/repository/biocontainers/squeakr/status
   :target: https://quay.io/repository/biocontainers/squeakr
.. _`squeakr/tags`: https://quay.io/repository/biocontainers/squeakr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squeakr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squeakr/README.html