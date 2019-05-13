:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamread'
.. highlight: bash

bamread
=======

.. conda:recipe:: bamread
   :replaces_section_title:

   Read bam files quickly into dataframes in Python

   :homepage: http://github.com/endrebak/bamread
   :license: MIT
   :recipe: /`bamread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamread/meta.yaml>`_

   


.. conda:package:: bamread

   |downloads_bamread| |docker_bamread|

   :versions: 0.0.4-0
   
   :depends cython: 
   :depends libgcc-ng: >=7.3.0
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: >=3.7,<3.8.0a0
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamread

   and update with::

      conda update bamread

   or use the docker container::

      docker pull quay.io/biocontainers/bamread:<tag>

   (see `bamread/tags`_ for valid values for ``<tag>``)


.. |downloads_bamread| image:: https://img.shields.io/conda/dn/bioconda/bamread.svg?style=flat
   :target: https://anaconda.org/bioconda/bamread
   :alt:   (downloads)
.. |docker_bamread| image:: https://quay.io/repository/biocontainers/bamread/status
   :target: https://quay.io/repository/biocontainers/bamread
.. _`bamread/tags`: https://quay.io/repository/biocontainers/bamread?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamread/README.html