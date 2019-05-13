:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geodl'
.. highlight: bash

geodl
=====

.. conda:recipe:: geodl
   :replaces_section_title:

   Download FASTQ files from GEO\-NCBI and ENA with ease

   :homepage: https://github.com/jduc/geoDL
   :license: GPL-3-0
   :recipe: /`geodl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geodl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geodl/meta.yaml>`_

   


.. conda:package:: geodl

   |downloads_geodl| |docker_geodl|

   :versions: 1.0b5.1-1, 1.0b5.1-0, 1.0b1-0
   
   :depends beautifulsoup4: 
   :depends colorama: 
   :depends lxml: 
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install geodl

   and update with::

      conda update geodl

   or use the docker container::

      docker pull quay.io/biocontainers/geodl:<tag>

   (see `geodl/tags`_ for valid values for ``<tag>``)


.. |downloads_geodl| image:: https://img.shields.io/conda/dn/bioconda/geodl.svg?style=flat
   :target: https://anaconda.org/bioconda/geodl
   :alt:   (downloads)
.. |docker_geodl| image:: https://quay.io/repository/biocontainers/geodl/status
   :target: https://quay.io/repository/biocontainers/geodl
.. _`geodl/tags`: https://quay.io/repository/biocontainers/geodl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geodl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geodl/README.html