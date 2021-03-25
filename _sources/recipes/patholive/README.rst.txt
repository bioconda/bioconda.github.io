:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'patholive'
.. highlight: bash

patholive
=========

.. conda:recipe:: patholive
   :replaces_section_title:
   :noindex:

   A real\-time pathogen diagnostics tool for metagenomic Illumina sequencing data.

   :homepage: https://gitlab.com/SimonHTausch/PathoLive
   :license: BSD / BSD 3-Clause
   :recipe: /`patholive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/patholive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/patholive/meta.yaml>`_

   


.. conda:package:: patholive

   |downloads_patholive| |docker_patholive|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends argparse: 
   :depends hilive2: 
   :depends matplotlib: 
   :depends numpy: ``>=1.11``
   :depends pysam: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install patholive

   and update with::

      conda update patholive

   or use the docker container::

      docker pull quay.io/biocontainers/patholive:<tag>

   (see `patholive/tags`_ for valid values for ``<tag>``)


.. |downloads_patholive| image:: https://img.shields.io/conda/dn/bioconda/patholive.svg?style=flat
   :target: https://anaconda.org/bioconda/patholive
   :alt:   (downloads)
.. |docker_patholive| image:: https://quay.io/repository/biocontainers/patholive/status
   :target: https://quay.io/repository/biocontainers/patholive
.. _`patholive/tags`: https://quay.io/repository/biocontainers/patholive?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/patholive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/patholive/README.html