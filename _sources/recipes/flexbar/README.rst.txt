:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexbar'
.. highlight: bash

flexbar
=======

.. conda:recipe:: flexbar/2.5.0
   :replaces_section_title:

   Flexible barcode and adapter removal

   :homepage: https://github.com/seqan/flexbar
   :license: BSD-3-Clause
   :recipe: /`flexbar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexbar>`_/`2.5.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexbar/2.5.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexbar/2.5.0/meta.yaml>`_
   :links: biotools: :biotools:`flexbar`

   


.. conda:package:: flexbar

   |downloads_flexbar| |docker_flexbar|

   :versions: 3.3.0-1, 2.5.0-2, 2.5.0-1, 2.5.0-0
   
   :depends bzip2: 1.0*
   
   :depends libcxx: 
   
   :depends libgcc: 
   
   :depends seqan-library: ==2.4.0
   
   :depends tbb: 
   
   :depends zlib: 1.2.11*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flexbar

   and update with::

      conda update flexbar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/flexbar:<tag>

   (see `flexbar/tags`_ for valid values for ``<tag>``)


.. |downloads_flexbar| image:: https://img.shields.io/conda/dn/bioconda/flexbar.svg?style=flat
   :alt:   (downloads)
.. |docker_flexbar| image:: https://quay.io/repository/biocontainers/flexbar/status
   :target: https://quay.io/repository/biocontainers/flexbar
.. _`flexbar/tags`: https://quay.io/repository/biocontainers/flexbar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexbar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexbar/README.html