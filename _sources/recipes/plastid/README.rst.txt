:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plastid'
.. highlight: bash

plastid
=======

.. conda:recipe:: plastid
   :replaces_section_title:

   plastid is a Python library for genomic analysis \-\- in particular\, high\-throughput sequencing data

   :homepage: http://plastid.readthedocs.io/en/latest/
   :license: BSD 3-Clause
   :recipe: /`plastid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plastid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plastid/meta.yaml>`_

   


.. conda:package:: plastid

   |downloads_plastid| |docker_plastid|

   :versions: 0.4.8-1, 0.4.8-0, 0.4.7-1, 0.4.7-0
   
   :depends biopython: >=1.64
   :depends bowtie: 
   :depends cython: >=0.22.0
   :depends fastx_toolkit: 
   :depends libgcc: 
   :depends matplotlib: >=1.4.0
   :depends numpy: >=1.9.0,<1.12.0
   :depends pandas: >=0.17.0
   :depends pysam: >=0.8.4
   :depends python: 2.7*
   :depends scipy: >=0.15.1
   :depends termcolor: 
   :depends twobitreader: >=3.0.0
   :depends zlib: 1.2.11*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plastid

   and update with::

      conda update plastid

   or use the docker container::

      docker pull quay.io/biocontainers/plastid:<tag>

   (see `plastid/tags`_ for valid values for ``<tag>``)


.. |downloads_plastid| image:: https://img.shields.io/conda/dn/bioconda/plastid.svg?style=flat
   :alt:   (downloads)
.. |docker_plastid| image:: https://quay.io/repository/biocontainers/plastid/status
   :target: https://quay.io/repository/biocontainers/plastid
.. _`plastid/tags`: https://quay.io/repository/biocontainers/plastid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plastid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plastid/README.html