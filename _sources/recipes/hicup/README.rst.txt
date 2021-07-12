:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hicup'
.. highlight: bash

hicup
=====

.. conda:recipe:: hicup
   :replaces_section_title:
   :noindex:

   A tool for mapping and performing quality control on Hi\-C data

   :homepage: http://www.bioinformatics.babraham.ac.uk/projects/hicup/
   :license: GPLv3
   :recipe: /`hicup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicup/meta.yaml>`_
   :links: biotools: :biotools:`hicup`, doi: :doi:`10.12688/f1000research.7334.1`

   


.. conda:package:: hicup

   |downloads_hicup| |docker_hicup|

   :versions:
      
      

      ``0.8.1-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.10-0``,  ``0.5.9-0``

      

   
   :depends bowtie: 
   :depends bowtie2: 
   :depends perl: 
   :depends r-base: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hicup

   and update with::

      conda update hicup

   or use the docker container::

      docker pull quay.io/biocontainers/hicup:<tag>

   (see `hicup/tags`_ for valid values for ``<tag>``)


.. |downloads_hicup| image:: https://img.shields.io/conda/dn/bioconda/hicup.svg?style=flat
   :target: https://anaconda.org/bioconda/hicup
   :alt:   (downloads)
.. |docker_hicup| image:: https://quay.io/repository/biocontainers/hicup/status
   :target: https://quay.io/repository/biocontainers/hicup
.. _`hicup/tags`: https://quay.io/repository/biocontainers/hicup?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicup/README.html