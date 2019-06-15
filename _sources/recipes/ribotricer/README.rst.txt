:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotricer'
.. highlight: bash

ribotricer
==========

.. conda:recipe:: ribotricer
   :replaces_section_title:

   Python package to detect translating ORF from Ribo\-seq data

   :homepage: https://github.com/smithlabcode/ribotricer
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`ribotricer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotricer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotricer/meta.yaml>`_

   Ribotricer is a method for detecting actively\-translating 
   ORFs by directly leveraging the three\-nucleotide periodicity of
   Ribo\-seq data. It accurately identifies both short and long
   active ORFs.



.. conda:package:: ribotricer

   |downloads_ribotricer| |docker_ribotricer|

   :versions: 1.0.3-0, 1.0.2-0
   
   :depends click: >=6.0
   :depends click-help-colors: >=0.3
   :depends matplotlib: >=2.1.0
   :depends numpy: >=1.11.0
   :depends pandas: >=0.20.3
   :depends pyfaidx: >=0.5.0
   :depends pysam: >=0.11.2.2
   :depends python: >3
   :depends quicksect: >=0.2.0
   :depends scipy: >=0.19.1
   :depends tqdm: >=4.23.4
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribotricer

   and update with::

      conda update ribotricer

   or use the docker container::

      docker pull quay.io/biocontainers/ribotricer:<tag>

   (see `ribotricer/tags`_ for valid values for ``<tag>``)


.. |downloads_ribotricer| image:: https://img.shields.io/conda/dn/bioconda/ribotricer.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotricer
   :alt:   (downloads)
.. |docker_ribotricer| image:: https://quay.io/repository/biocontainers/ribotricer/status
   :target: https://quay.io/repository/biocontainers/ribotricer
.. _`ribotricer/tags`: https://quay.io/repository/biocontainers/ribotricer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotricer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotricer/README.html