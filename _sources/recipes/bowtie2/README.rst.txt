:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bowtie2'
.. highlight: bash

bowtie2
=======

.. conda:recipe:: bowtie2
   :replaces_section_title:

   Fast and sensitive read alignment

   :homepage: http://bowtie-bio.sourceforge.net/bowtie2/index.shtml
   :license: GPLv3
   :recipe: /`bowtie2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bowtie2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bowtie2/meta.yaml>`_
   :links: biotools: :biotools:`bowtie2`, doi: :doi:`10.1038/nmeth.1923`

   


.. conda:package:: bowtie2

   |downloads_bowtie2| |docker_bowtie2|

   :versions: 2.3.4.3-1, 2.3.4.3-0, 2.3.4.2-0, 2.3.4.1-1, 2.3.4.1-0, 2.3.4-0, 2.3.3.1-0, 2.3.2-1, 2.3.0-1, 2.3.0-0, 2.2.8-2, 2.2.8-1, 2.2.8-0, 2.2.7-1, 2.2.7-0, 2.2.6-0, 2.2.5-4, 2.2.5-3, 2.2.5-2, 2.2.5-1, 2.2.4-3, 2.2.4-2, 2.2.4-1, 2.2.4-0, 2.2.1-1, 2.2.1-0
   
   :depends libcxx: >=4.0.1
   
   :depends perl: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends tbb: >=2019.3
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bowtie2

   and update with::

      conda update bowtie2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bowtie2:<tag>

   (see `bowtie2/tags`_ for valid values for ``<tag>``)


.. |downloads_bowtie2| image:: https://img.shields.io/conda/dn/bioconda/bowtie2.svg?style=flat
   :alt:   (downloads)
.. |docker_bowtie2| image:: https://quay.io/repository/biocontainers/bowtie2/status
   :target: https://quay.io/repository/biocontainers/bowtie2
.. _`bowtie2/tags`: https://quay.io/repository/biocontainers/bowtie2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bowtie2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bowtie2/README.html