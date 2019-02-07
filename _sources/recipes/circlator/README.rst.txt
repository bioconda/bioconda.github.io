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

   :versions: 1.5.5, 1.5.2, 1.5.1, 1.5.0, 1.4.0, 1.3.1, 1.3.0, 1.1.2

   :depends: :conda:package:`bio_assembly_refinement` >=0.4.0 :conda:package:`bwa`  :conda:package:`openpyxl`  :conda:package:`prodigal`  :conda:package:`pyfastaq` >=3.12.1 :conda:package:`pymummer` >=0.9.0 :conda:package:`pysam` >=0.8.1 :conda:package:`python` 3.5* :conda:package:`samtools`  :conda:package:`spades`  

   :required~by: |required_by_circlator|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circlator

   and update with::

      conda update circlator

   or use the docker container::

      docker pull quay.io/repository/biocontainers/circlator


.. |required_by_circlator| conda:required_by:: circlator
.. |downloads_circlator| image:: https://img.shields.io/conda/dn/bioconda/circlator.svg?style=flat
   :alt:   (downloads)
.. |docker_circlator| image:: https://quay.io/repository/biocontainers/circlator/status
   :target: https://quay.io/repository/biocontainers/circlator







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circlator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circlator/README.html

