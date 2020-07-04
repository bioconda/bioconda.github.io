:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zorro'
.. highlight: bash

zorro
=====

.. conda:recipe:: zorro
   :replaces_section_title:
   :noindex:

   ZORRO is a probabilistic masking program that assigns confidence scores to each column in a multiple sequence alignment.

   :homepage: https://sourceforge.net/projects/probmask/
   :license: Apache / Apache License 2.0
   :recipe: /`zorro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zorro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zorro/meta.yaml>`_

   


.. conda:package:: zorro

   |downloads_zorro| |docker_zorro|

   :versions:
      
      

      ``2011.12.01-1``,  ``2011.12.01-0``

      

   
   :depends fasttree: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install zorro

   and update with::

      conda update zorro

   or use the docker container::

      docker pull quay.io/biocontainers/zorro:<tag>

   (see `zorro/tags`_ for valid values for ``<tag>``)


.. |downloads_zorro| image:: https://img.shields.io/conda/dn/bioconda/zorro.svg?style=flat
   :target: https://anaconda.org/bioconda/zorro
   :alt:   (downloads)
.. |docker_zorro| image:: https://quay.io/repository/biocontainers/zorro/status
   :target: https://quay.io/repository/biocontainers/zorro
.. _`zorro/tags`: https://quay.io/repository/biocontainers/zorro?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zorro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zorro/README.html