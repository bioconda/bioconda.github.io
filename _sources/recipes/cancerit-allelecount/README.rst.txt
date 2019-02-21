:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cancerit-allelecount'
.. highlight: bash

cancerit-allelecount
====================

.. conda:recipe:: cancerit-allelecount
   :replaces_section_title:

   Support code for NGS copy number algorithms

   :homepage: https://github.com/cancerit/alleleCount
   :license: GPLv3
   :recipe: /`cancerit-allelecount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cancerit-allelecount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cancerit-allelecount/meta.yaml>`_

   


.. conda:package:: cancerit-allelecount

   |downloads_cancerit-allelecount| |docker_cancerit-allelecount|

   :versions: 2.1.2-3, 2.1.2-2, 2.1.2-1, 2.1.2-0
   
   :depends libgcc-ng: >=4.9
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cancerit-allelecount

   and update with::

      conda update cancerit-allelecount

   or use the docker container::

      docker pull quay.io/biocontainers/cancerit-allelecount:<tag>

   (see `cancerit-allelecount/tags`_ for valid values for ``<tag>``)


.. |downloads_cancerit-allelecount| image:: https://img.shields.io/conda/dn/bioconda/cancerit-allelecount.svg?style=flat
   :alt:   (downloads)
.. |docker_cancerit-allelecount| image:: https://quay.io/repository/biocontainers/cancerit-allelecount/status
   :target: https://quay.io/repository/biocontainers/cancerit-allelecount
.. _`cancerit-allelecount/tags`: https://quay.io/repository/biocontainers/cancerit-allelecount?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cancerit-allelecount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cancerit-allelecount/README.html