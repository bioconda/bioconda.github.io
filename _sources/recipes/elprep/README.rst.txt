.. title:: Package Recipe 'elprep'
.. highlight: bash


elprep
======

.. conda:recipe:: elprep
   :replaces_section_title:

   elPrep is a high\-performance tool for preparing .sam\/.bam files for variant calling in sequencing pipelines. It can be used as a drop\-in replacement for SAMtools\/Picard\/GATK4\, and was extensively tested with different pipelines for variant analysis with GATK. The key advantage of elPrep is that it only performs a single\-pass to process a .sam\/.bam file\, independent of the number of processing steps that need to be applied in a particular pipeline\, greatly improving runtime performance.

   :homepage: https://github.com/ExaScience/elprep
   :license: GNU AFFERO GENERAL PUBLIC LICENSE
   :recipe: /`elprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elprep/meta.yaml>`_

   


.. conda:package:: elprep

   |downloads_elprep| |docker_elprep|

   :versions: 4.1.1, 4.1.0, 4.0.1, 4.0.0, 3.04

   :depends: 

   :required~by: |required_by_elprep|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install elprep

   and update with::

      conda update elprep

   or use the docker container::

      docker pull quay.io/repository/biocontainers/elprep


.. |required_by_elprep| conda:required_by:: elprep
.. |downloads_elprep| image:: https://img.shields.io/conda/dn/bioconda/elprep.svg?style=flat
   :alt:   (downloads)
.. |docker_elprep| image:: https://quay.io/repository/biocontainers/elprep/status
   :target: https://quay.io/repository/biocontainers/elprep







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/elprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/elprep/README.html

