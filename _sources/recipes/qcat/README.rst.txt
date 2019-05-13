:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qcat'
.. highlight: bash

qcat
====

.. conda:recipe:: qcat
   :replaces_section_title:

   Qcat is Python command\-line tool for demultiplexing Oxford Nanopore reads from FASTQ files.

   :homepage: https://github.com/nanoporetech/qcat
   :license: Mozilla Public License Version 2.0
   :recipe: /`qcat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcat/meta.yaml>`_

   


.. conda:package:: qcat

   |downloads_qcat| |docker_qcat|

   :versions: 1.0.1-0, 1.0.0-0
   
   :depends biopython: 
   :depends mappy: 
   :depends pandas: 
   :depends parasail-python: 
   :depends pysam: 
   :depends python: 
   :depends pyyaml: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qcat

   and update with::

      conda update qcat

   or use the docker container::

      docker pull quay.io/biocontainers/qcat:<tag>

   (see `qcat/tags`_ for valid values for ``<tag>``)


.. |downloads_qcat| image:: https://img.shields.io/conda/dn/bioconda/qcat.svg?style=flat
   :target: https://anaconda.org/bioconda/qcat
   :alt:   (downloads)
.. |docker_qcat| image:: https://quay.io/repository/biocontainers/qcat/status
   :target: https://quay.io/repository/biocontainers/qcat
.. _`qcat/tags`: https://quay.io/repository/biocontainers/qcat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qcat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qcat/README.html