:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmmratac'
.. highlight: bash

hmmratac
========

.. conda:recipe:: hmmratac
   :replaces_section_title:

   Peak caller for ATAC\-seq data

   :homepage: https://github.com/LiuLabUB/HMMRATAC
   :license: GPLv3
   :recipe: /`hmmratac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmratac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmratac/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkz533`

   


.. conda:package:: hmmratac

   |downloads_hmmratac| |docker_hmmratac|

   :versions: 1.2.7-0, 1.2.6-0, 1.2.5-0
   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmmratac

   and update with::

      conda update hmmratac

   or use the docker container::

      docker pull quay.io/biocontainers/hmmratac:<tag>

   (see `hmmratac/tags`_ for valid values for ``<tag>``)


.. |downloads_hmmratac| image:: https://img.shields.io/conda/dn/bioconda/hmmratac.svg?style=flat
   :target: https://anaconda.org/bioconda/hmmratac
   :alt:   (downloads)
.. |docker_hmmratac| image:: https://quay.io/repository/biocontainers/hmmratac/status
   :target: https://quay.io/repository/biocontainers/hmmratac
.. _`hmmratac/tags`: https://quay.io/repository/biocontainers/hmmratac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmmratac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmmratac/README.html