:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnasamba'
.. highlight: bash

rnasamba
========

.. conda:recipe:: rnasamba
   :replaces_section_title:

   A tool for computing the coding potential of RNA transcript sequences using deep learning.

   :homepage: http://apcamargo.github.io/RNAsamba/
   :license: GPL / GPL-3
   :recipe: /`rnasamba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasamba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasamba/meta.yaml>`_

   


.. conda:package:: rnasamba

   |downloads_rnasamba| |docker_rnasamba|

   :versions: 0.2.4-0, 0.2.3-0, 0.2.2-0, 0.2.1-0, 0.2.0-2, 0.2.0-1, 0.2.0-0, 0.1.6-0, 0.1.5-0, 0.1.4-0, 0.1.2-0, 0.1.0-1, 0.1.0-0
   
   :depends biopython: 
   :depends keras: >=2.1.0,<2.3.0
   :depends libgcc-ng: >=7.3.0
   :depends numpy: <1.17
   :depends python: >=3.6,<3.7.0a0
   :depends tensorflow: >=1.5.0,<2.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnasamba

   and update with::

      conda update rnasamba

   or use the docker container::

      docker pull quay.io/biocontainers/rnasamba:<tag>

   (see `rnasamba/tags`_ for valid values for ``<tag>``)


.. |downloads_rnasamba| image:: https://img.shields.io/conda/dn/bioconda/rnasamba.svg?style=flat
   :target: https://anaconda.org/bioconda/rnasamba
   :alt:   (downloads)
.. |docker_rnasamba| image:: https://quay.io/repository/biocontainers/rnasamba/status
   :target: https://quay.io/repository/biocontainers/rnasamba
.. _`rnasamba/tags`: https://quay.io/repository/biocontainers/rnasamba?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnasamba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnasamba/README.html