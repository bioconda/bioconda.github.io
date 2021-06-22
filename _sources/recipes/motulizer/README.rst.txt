:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'motulizer'
.. highlight: bash

motulizer
=========

.. conda:recipe:: motulizer
   :replaces_section_title:
   :noindex:

   making OTUs from genomes\, and stats on them. and even core\-genomes

   :homepage: https://github.com/moritzbuck/mOTUlizer/
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`motulizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motulizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motulizer/meta.yaml>`_

   


.. conda:package:: motulizer

   |downloads_motulizer| |docker_motulizer|

   :versions:
      
      

      ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1a0-1``,  ``0.2.1a0-0``

      

   
   :depends biopython: 
   :depends cd-hit: 
   :depends fastani: 
   :depends h5py: 
   :depends hdf5plugin: 
   :depends mmseqs2: 
   :depends python: ``>=3.7``
   :depends python-igraph: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install motulizer

   and update with::

      conda update motulizer

   or use the docker container::

      docker pull quay.io/biocontainers/motulizer:<tag>

   (see `motulizer/tags`_ for valid values for ``<tag>``)


.. |downloads_motulizer| image:: https://img.shields.io/conda/dn/bioconda/motulizer.svg?style=flat
   :target: https://anaconda.org/bioconda/motulizer
   :alt:   (downloads)
.. |docker_motulizer| image:: https://quay.io/repository/biocontainers/motulizer/status
   :target: https://quay.io/repository/biocontainers/motulizer
.. _`motulizer/tags`: https://quay.io/repository/biocontainers/motulizer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/motulizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/motulizer/README.html