:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iqtree'
.. highlight: bash

iqtree
======

.. conda:recipe:: iqtree
   :replaces_section_title:

   Efficient phylogenomic software by maximum likelihood.

   :homepage: http://www.iqtree.org/
   :license: GPL-2.0
   :recipe: /`iqtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqtree/meta.yaml>`_

   


.. conda:package:: iqtree

   |downloads_iqtree| |docker_iqtree|

   :versions: 1.6.12-0, 1.6.11.1-0, 1.6.11-0, 1.6.10-0, 1.6.9-1, 1.6.9-0, 1.6.8-0, 1.6.7.2-0, 1.6.7.1-0, 1.6.7-1, 1.6.7-0, 1.6.6-0, 1.5.5-2, 1.5.5-1, 1.5.5-0, 1.5.3-2, 1.5.3-1, 1.5.3-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install iqtree

   and update with::

      conda update iqtree

   or use the docker container::

      docker pull quay.io/biocontainers/iqtree:<tag>

   (see `iqtree/tags`_ for valid values for ``<tag>``)


.. |downloads_iqtree| image:: https://img.shields.io/conda/dn/bioconda/iqtree.svg?style=flat
   :target: https://anaconda.org/bioconda/iqtree
   :alt:   (downloads)
.. |docker_iqtree| image:: https://quay.io/repository/biocontainers/iqtree/status
   :target: https://quay.io/repository/biocontainers/iqtree
.. _`iqtree/tags`: https://quay.io/repository/biocontainers/iqtree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iqtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iqtree/README.html