:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unitig-caller'
.. highlight: bash

unitig-caller
=============

.. conda:recipe:: unitig-caller
   :replaces_section_title:

   Determines presence\/absence of sequence elements in bacterial sequence data.

   :homepage: https://github.com/johnlees/unitig-caller
   :license: APACHE / Apache-2.0
   :recipe: /`unitig-caller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitig-caller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitig-caller/meta.yaml>`_

   


.. conda:package:: unitig-caller

   |downloads_unitig-caller| |docker_unitig-caller|

   :versions: 1.0.1-0, 1.0.0-0, 0.2.0-0
   
   :depends bzip2: >=1.0.8,<2.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends mantis: >=0.2.0
   :depends python: >=3.6,<3.7.0a0
   :depends python_abi: 3.6.* *_cp36m
   :depends squeakr: >=0.6
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unitig-caller

   and update with::

      conda update unitig-caller

   or use the docker container::

      docker pull quay.io/biocontainers/unitig-caller:<tag>

   (see `unitig-caller/tags`_ for valid values for ``<tag>``)


.. |downloads_unitig-caller| image:: https://img.shields.io/conda/dn/bioconda/unitig-caller.svg?style=flat
   :target: https://anaconda.org/bioconda/unitig-caller
   :alt:   (downloads)
.. |docker_unitig-caller| image:: https://quay.io/repository/biocontainers/unitig-caller/status
   :target: https://quay.io/repository/biocontainers/unitig-caller
.. _`unitig-caller/tags`: https://quay.io/repository/biocontainers/unitig-caller?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unitig-caller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unitig-caller/README.html