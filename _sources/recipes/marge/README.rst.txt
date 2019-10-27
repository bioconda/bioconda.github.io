:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'marge'
.. highlight: bash

marge
=====

.. conda:recipe:: marge
   :replaces_section_title:

   Model\-based Analysis of Regulation of Gene Expression

   :homepage: http://cistrome.org/MARGE
   :license: MIT / MIT
   :recipe: /`marge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marge/meta.yaml>`_

   


.. conda:package:: marge

   |downloads_marge| |docker_marge|

   :versions: 1.0-2, 1.0-1, 1.0-0
   
   :depends hdf5: 
   :depends numpy: 
   :depends pytables: 
   :depends python: >3
   :depends scikit-learn: 
   :depends scipy: 
   :depends snakemake: 3.*
   :depends twobitreader: 
   :depends ucsc-bedclip: 
   :depends ucsc-bigwigaverageoverbed: 
   :depends ucsc-bigwigsummary: 
   :depends ucsc-bigwigtobedgraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install marge

   and update with::

      conda update marge

   or use the docker container::

      docker pull quay.io/biocontainers/marge:<tag>

   (see `marge/tags`_ for valid values for ``<tag>``)


.. |downloads_marge| image:: https://img.shields.io/conda/dn/bioconda/marge.svg?style=flat
   :target: https://anaconda.org/bioconda/marge
   :alt:   (downloads)
.. |docker_marge| image:: https://quay.io/repository/biocontainers/marge/status
   :target: https://quay.io/repository/biocontainers/marge
.. _`marge/tags`: https://quay.io/repository/biocontainers/marge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/marge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/marge/README.html