:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conterminator'
.. highlight: bash

conterminator
=============

.. conda:recipe:: conterminator
   :replaces_section_title:
   :noindex:

   Conterminator\: software to detect contamination in large sequence sets

   :homepage: https://github.com/martin-steinegger/conterminator
   :license: GPL3
   :recipe: /`conterminator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conterminator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conterminator/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-020-02023-1`, biotools: :biotools:`conterminator`

   


.. conda:package:: conterminator

   |downloads_conterminator| |docker_conterminator|

   :versions:
      
      

      ``1.c74b5-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends openmp: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install conterminator

   and update with::

      conda update conterminator

   or use the docker container::

      docker pull quay.io/biocontainers/conterminator:<tag>

   (see `conterminator/tags`_ for valid values for ``<tag>``)


.. |downloads_conterminator| image:: https://img.shields.io/conda/dn/bioconda/conterminator.svg?style=flat
   :target: https://anaconda.org/bioconda/conterminator
   :alt:   (downloads)
.. |docker_conterminator| image:: https://quay.io/repository/biocontainers/conterminator/status
   :target: https://quay.io/repository/biocontainers/conterminator
.. _`conterminator/tags`: https://quay.io/repository/biocontainers/conterminator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conterminator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conterminator/README.html