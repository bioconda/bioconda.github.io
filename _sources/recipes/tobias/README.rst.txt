:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tobias'
.. highlight: bash

tobias
======

.. conda:recipe:: tobias
   :replaces_section_title:

   Transcription factor Occupancy prediction By Investigation of ATAC\-seq Signal

   :homepage: https://github.molgen.mpg.de/loosolab/TOBIAS
   :documentation: https://github.molgen.mpg.de/loosolab/TOBIAS/wiki
   
   :license: MIT
   :recipe: /`tobias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tobias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tobias/meta.yaml>`_

   TOBIAS \(Transcription factor Occupancy prediction By Investigation of ATAC\-seq Signal\) is a collection
   of command\-line bioinformatics tools for performing footprinting analysis on ATAC\-seq data. 



.. conda:package:: tobias

   |downloads_tobias| |docker_tobias|

   :versions: 0.8.0-0, 0.7.0-0, 0.6.4-0, 0.6.1-0, 0.5.0-0
   
   :depends adjusttext: 
   :depends libgcc-ng: >=7.3.0
   :depends matplotlib: >=2
   :depends moods: 
   :depends numpy: >=1.14.6,<2.0a0
   :depends pandas: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pypdf2: 
   :depends pysam: >=0.15.3
   :depends python: >=3.6,<3.7.0a0
   :depends scikit-learn: 
   :depends scipy: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tobias

   and update with::

      conda update tobias

   or use the docker container::

      docker pull quay.io/biocontainers/tobias:<tag>

   (see `tobias/tags`_ for valid values for ``<tag>``)


.. |downloads_tobias| image:: https://img.shields.io/conda/dn/bioconda/tobias.svg?style=flat
   :target: https://anaconda.org/bioconda/tobias
   :alt:   (downloads)
.. |docker_tobias| image:: https://quay.io/repository/biocontainers/tobias/status
   :target: https://quay.io/repository/biocontainers/tobias
.. _`tobias/tags`: https://quay.io/repository/biocontainers/tobias?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tobias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tobias/README.html