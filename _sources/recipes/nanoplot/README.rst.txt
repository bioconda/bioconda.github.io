:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoplot'
.. highlight: bash

nanoplot
========

.. conda:recipe:: nanoplot
   :replaces_section_title:

   Plotting suite for long read sequencing data and alignments

   :homepage: https://github.com/wdecoster/NanoPlot
   :license: MIT / MIT License
   :recipe: /`nanoplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplot/meta.yaml>`_

   


.. conda:package:: nanoplot

   |downloads_nanoplot| |docker_nanoplot|

   :versions: 1.24.0-0, 1.23.1-0, 1.20.0-1, 1.20.0-0, 1.19.0-0, 1.18.2-1, 1.13.0-1, 1.13.0-0, 1.11.0-0, 1.10.4-0, 1.8.1-0, 1.2.2-0, 1.1.0-0, 1.0.0-0, 0.16.4-0, 0.16.2-0
   
   :depends biopython: 
   :depends nanoget: >=1.4.0
   :depends nanomath: >=0.21.0
   :depends nanoplotter: >=0.38.0
   :depends numpy: 
   :depends pandas: >=0.22.0
   :depends pysam: >0.10.0.0
   :depends python: 3.*
   :depends python-dateutil: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoplot

   and update with::

      conda update nanoplot

   or use the docker container::

      docker pull quay.io/biocontainers/nanoplot:<tag>

   (see `nanoplot/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoplot| image:: https://img.shields.io/conda/dn/bioconda/nanoplot.svg?style=flat
   :alt:   (downloads)
.. |docker_nanoplot| image:: https://quay.io/repository/biocontainers/nanoplot/status
   :target: https://quay.io/repository/biocontainers/nanoplot
.. _`nanoplot/tags`: https://quay.io/repository/biocontainers/nanoplot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoplot/README.html