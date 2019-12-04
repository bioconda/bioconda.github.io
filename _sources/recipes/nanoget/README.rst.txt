:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoget'
.. highlight: bash

nanoget
=======

.. conda:recipe:: nanoget
   :replaces_section_title:

   Functions to extract information from Oxford Nanopore sequencing data and alignments.

   :homepage: https://github.com/wdecoster/nanoget
   :license: MIT / MIT License
   :recipe: /`nanoget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoget/meta.yaml>`_

   


.. conda:package:: nanoget

   |downloads_nanoget| |docker_nanoget|

   :versions: 1.12.0-0, 1.11.0-0, 1.10.0-0, 1.9.1-0, 1.9.0-0, 1.8.0-1, 1.8.0-0, 1.7.6-0, 1.7.4-0, 1.5.2-0, 1.5.0-1, 1.5.0-0, 1.2.2-0, 1.0.2-0, 1.0.0-0, 0.11.7-0, 0.11.5-0
   
   :depends biopython: 
   :depends nanomath: 
   :depends numpy: 
   :depends pandas: >=0.22.0
   :depends pysam: >0.10.0
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoget

   and update with::

      conda update nanoget

   or use the docker container::

      docker pull quay.io/biocontainers/nanoget:<tag>

   (see `nanoget/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoget| image:: https://img.shields.io/conda/dn/bioconda/nanoget.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoget
   :alt:   (downloads)
.. |docker_nanoget| image:: https://quay.io/repository/biocontainers/nanoget/status
   :target: https://quay.io/repository/biocontainers/nanoget
.. _`nanoget/tags`: https://quay.io/repository/biocontainers/nanoget?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoget/README.html