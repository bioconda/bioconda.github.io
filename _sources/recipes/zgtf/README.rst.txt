:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zgtf'
.. highlight: bash

zgtf
====

.. conda:recipe:: zgtf
   :replaces_section_title:
   :noindex:

   gtf conversion utility.

   :homepage: The package home page
   :license: APACHE / Apache License 2.0
   :recipe: /`zgtf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zgtf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zgtf/meta.yaml>`_

   


.. conda:package:: zgtf

   |downloads_zgtf| |docker_zgtf|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends htseq: ``>=0.11``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install zgtf

   and update with::

      conda update zgtf

   or use the docker container::

      docker pull quay.io/biocontainers/zgtf:<tag>

   (see `zgtf/tags`_ for valid values for ``<tag>``)


.. |downloads_zgtf| image:: https://img.shields.io/conda/dn/bioconda/zgtf.svg?style=flat
   :target: https://anaconda.org/bioconda/zgtf
   :alt:   (downloads)
.. |docker_zgtf| image:: https://quay.io/repository/biocontainers/zgtf/status
   :target: https://quay.io/repository/biocontainers/zgtf
.. _`zgtf/tags`: https://quay.io/repository/biocontainers/zgtf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zgtf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zgtf/README.html