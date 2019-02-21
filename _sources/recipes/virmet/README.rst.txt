:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virmet'
.. highlight: bash

virmet
======

.. conda:recipe:: virmet
   :replaces_section_title:

   A pipeline for viral metagenomics

   :homepage: http://virmet.readthedocs.io
   :developer docs: https://github.com/ozagordi/VirMet
   :license: MIT / MIT
   :recipe: /`virmet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virmet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virmet/meta.yaml>`_

   


.. conda:package:: virmet

   |downloads_virmet| |docker_virmet|

   :versions: v1.1.1-3, v1.1.1-2, v1.1.1-1, v1.1.1-0, v1.1-2, v1.1-1, v1.1-0, v1.0-0
   
   :depends biopython: 
   
   :depends blast: >=2.3
   
   :depends bwa: 
   
   :depends entrez-direct: 
   
   :depends htslib: 
   
   :depends pandas: 
   
   :depends prinseq: 
   
   :depends python: >=3
   
   :depends r-ggplot2: 
   
   :depends samtools: >=1.3
   
   :depends seqtk: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install virmet

   and update with::

      conda update virmet

   or use the docker container::

      docker pull quay.io/biocontainers/virmet:<tag>

   (see `virmet/tags`_ for valid values for ``<tag>``)


.. |downloads_virmet| image:: https://img.shields.io/conda/dn/bioconda/virmet.svg?style=flat
   :alt:   (downloads)
.. |docker_virmet| image:: https://quay.io/repository/biocontainers/virmet/status
   :target: https://quay.io/repository/biocontainers/virmet
.. _`virmet/tags`: https://quay.io/repository/biocontainers/virmet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virmet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virmet/README.html