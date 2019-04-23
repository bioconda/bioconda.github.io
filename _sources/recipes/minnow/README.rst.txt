:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minnow'
.. highlight: bash

minnow
======

.. conda:recipe:: minnow
   :replaces_section_title:

   A principled framework for rapid simulation of dscRNA\-seq data at the read level

   :homepage: https://github.com/COMBINE-lab/minnow
   :license: GPLv3
   :recipe: /`minnow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minnow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minnow/meta.yaml>`_

   


.. conda:package:: minnow

   |downloads_minnow| |docker_minnow|

   :versions: 1.2-0, 1.1-0, beta_1.3-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   :depends libcxx: >=4.0.1
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minnow

   and update with::

      conda update minnow

   or use the docker container::

      docker pull quay.io/biocontainers/minnow:<tag>

   (see `minnow/tags`_ for valid values for ``<tag>``)


.. |downloads_minnow| image:: https://img.shields.io/conda/dn/bioconda/minnow.svg?style=flat
   :alt:   (downloads)
.. |docker_minnow| image:: https://quay.io/repository/biocontainers/minnow/status
   :target: https://quay.io/repository/biocontainers/minnow
.. _`minnow/tags`: https://quay.io/repository/biocontainers/minnow?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minnow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minnow/README.html