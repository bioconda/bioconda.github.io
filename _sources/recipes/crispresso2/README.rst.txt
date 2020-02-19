:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispresso2'
.. highlight: bash

crispresso2
===========

.. conda:recipe:: crispresso2
   :replaces_section_title:

   A software pipeline designed to enable rapid and intuitive interpretation of genome editing experiments

   :homepage: https://github.com/pinellolab/CRISPResso2
   :license: Partners
   :recipe: /`crispresso2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso2/meta.yaml>`_

   


.. conda:package:: crispresso2

   |downloads_crispresso2| |docker_crispresso2|

   :versions: 2.0.32-0, 2.0.31-0, 2.0.30-0, 2.0.29-0, 2.0.28-0, 2.0.27-3, 2.0.23-1, 2.0.23-0
   
   :depends argparse: 
   :depends biopython: >=1.6.5
   :depends bowtie2: 
   :depends flash: 
   :depends jinja2: 
   :depends libgcc-ng: >=7.3.0
   :depends matplotlib-base: >=1.3.1
   :depends networkx: 2.2.*
   :depends numpy: >=1.9
   :depends pandas: >=0.15,<=0.24
   :depends python: >=2.7,<2.8.0a0
   :depends samtools: 
   :depends scipy: 1.1.0.*
   :depends seaborn: 0.7.1.*
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crispresso2

   and update with::

      conda update crispresso2

   or use the docker container::

      docker pull quay.io/biocontainers/crispresso2:<tag>

   (see `crispresso2/tags`_ for valid values for ``<tag>``)


.. |downloads_crispresso2| image:: https://img.shields.io/conda/dn/bioconda/crispresso2.svg?style=flat
   :target: https://anaconda.org/bioconda/crispresso2
   :alt:   (downloads)
.. |docker_crispresso2| image:: https://quay.io/repository/biocontainers/crispresso2/status
   :target: https://quay.io/repository/biocontainers/crispresso2
.. _`crispresso2/tags`: https://quay.io/repository/biocontainers/crispresso2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispresso2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispresso2/README.html