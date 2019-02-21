:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circlator'
.. highlight: bash

circlator
=========

.. conda:recipe:: circlator
   :replaces_section_title:

   circlator\: a tool to circularise genome assemblies

   :homepage: https://github.com/sanger-pathogens/circlator
   :license: GPL / GNU General Public License v3 (GPLv3)
   :recipe: /`circlator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circlator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circlator/meta.yaml>`_

   


.. conda:package:: circlator

   |downloads_circlator| |docker_circlator|

   :versions: 1.5.5-1, 1.5.5-0, 1.5.2-1, 1.5.2-0, 1.5.1-0, 1.5.0-0, 1.4.0-0, 1.3.1-0, 1.3.0-0, 1.1.2-0
   
   :depends bio_assembly_refinement: >=0.4.0
   
   :depends bwa: 
   
   :depends openpyxl: 
   
   :depends prodigal: 
   
   :depends pyfastaq: >=3.12.1
   
   :depends pymummer: >=0.9.0
   
   :depends pysam: >=0.8.1
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends samtools: 
   
   :depends spades: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circlator

   and update with::

      conda update circlator

   or use the docker container::

      docker pull quay.io/biocontainers/circlator:<tag>

   (see `circlator/tags`_ for valid values for ``<tag>``)


.. |downloads_circlator| image:: https://img.shields.io/conda/dn/bioconda/circlator.svg?style=flat
   :alt:   (downloads)
.. |docker_circlator| image:: https://quay.io/repository/biocontainers/circlator/status
   :target: https://quay.io/repository/biocontainers/circlator
.. _`circlator/tags`: https://quay.io/repository/biocontainers/circlator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circlator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circlator/README.html