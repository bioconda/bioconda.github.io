:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmph'
.. highlight: bash

cmph
====

.. conda:recipe:: cmph
   :replaces_section_title:

   CMPH \- C Minimal Perfect Hashing Library

   :homepage: http://cmph.sourceforge.net/
   :license: LGPL and the MPL 1.1
   :recipe: /`cmph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmph/meta.yaml>`_

   


.. conda:package:: cmph

   |downloads_cmph| |docker_cmph|

   :versions: 2.0-1, 2.0-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cmph

   and update with::

      conda update cmph

   or use the docker container::

      docker pull quay.io/biocontainers/cmph:<tag>

   (see `cmph/tags`_ for valid values for ``<tag>``)


.. |downloads_cmph| image:: https://img.shields.io/conda/dn/bioconda/cmph.svg?style=flat
   :alt:   (downloads)
.. |docker_cmph| image:: https://quay.io/repository/biocontainers/cmph/status
   :target: https://quay.io/repository/biocontainers/cmph
.. _`cmph/tags`: https://quay.io/repository/biocontainers/cmph?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmph/README.html