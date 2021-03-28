:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'necat'
.. highlight: bash

necat
=====

.. conda:recipe:: necat
   :replaces_section_title:
   :noindex:

   Nanopore data assembler

   :homepage: https://github.com/xiaochuanle/NECAT
   :license: Unknow
   :recipe: /`necat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/necat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/necat/meta.yaml>`_

   


.. conda:package:: necat

   |downloads_necat| |docker_necat|

   :versions:
      
      

      ``0.0.1_update20200803-1``,  ``0.0.1_update20200803-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends perl: 
   :depends perl-env: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install necat

   and update with::

      conda update necat

   or use the docker container::

      docker pull quay.io/biocontainers/necat:<tag>

   (see `necat/tags`_ for valid values for ``<tag>``)


.. |downloads_necat| image:: https://img.shields.io/conda/dn/bioconda/necat.svg?style=flat
   :target: https://anaconda.org/bioconda/necat
   :alt:   (downloads)
.. |docker_necat| image:: https://quay.io/repository/biocontainers/necat/status
   :target: https://quay.io/repository/biocontainers/necat
.. _`necat/tags`: https://quay.io/repository/biocontainers/necat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/necat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/necat/README.html