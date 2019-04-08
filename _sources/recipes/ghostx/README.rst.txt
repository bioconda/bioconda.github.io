:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ghostx'
.. highlight: bash

ghostx
======

.. conda:recipe:: ghostx
   :replaces_section_title:

   GHOSTX is a homology search tool which can detect remote homologues like BLAST and is about 100 times more efficient than BLAST by using suffix arrays. GHOSTX outputs search results in the format similar to BLAST\-tabular format.

   :homepage: http://www.bi.cs.titech.ac.jp/ghostx/
   :license: BSD-2-Clause
   :recipe: /`ghostx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghostx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghostx/meta.yaml>`_

   


.. conda:package:: ghostx

   |downloads_ghostx| |docker_ghostx|

   :versions: 1.3.7-1, 1.3.7-0
   
   :depends libgcc-ng: >=4.9
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ghostx

   and update with::

      conda update ghostx

   or use the docker container::

      docker pull quay.io/biocontainers/ghostx:<tag>

   (see `ghostx/tags`_ for valid values for ``<tag>``)


.. |downloads_ghostx| image:: https://img.shields.io/conda/dn/bioconda/ghostx.svg?style=flat
   :alt:   (downloads)
.. |docker_ghostx| image:: https://quay.io/repository/biocontainers/ghostx/status
   :target: https://quay.io/repository/biocontainers/ghostx
.. _`ghostx/tags`: https://quay.io/repository/biocontainers/ghostx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghostx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghostx/README.html