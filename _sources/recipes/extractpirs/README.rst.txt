.. title:: Package Recipe 'extractpirs'
.. highlight: bash


extractpirs
===========

.. conda:recipe:: extractpirs
   :replaces_section_title:

   A phase informative read \(PIR\) is a sequencing read that span at least 2 heterozyguous sites. In the following\, we require first that the sequence data is stored in BAM files and second that the genotype data to be phased is in VCF format. We developed a small tool\, extractPIRs\, to extract the PIRs from BAM files that relies on the samtools API for efficiency

   :homepage: https://mathgen.stats.ox.ac.uk/genetics_software/shapeit/shapeit.html
   :license: Free for Academic Use
   :recipe: /`extractpirs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extractpirs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extractpirs/meta.yaml>`_

   


.. conda:package:: extractpirs

   |downloads_extractpirs| |docker_extractpirs|

   :versions: 1.0

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_extractpirs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install extractpirs

   and update with::

      conda update extractpirs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/extractpirs


.. |required_by_extractpirs| conda:required_by:: extractpirs
.. |downloads_extractpirs| image:: https://img.shields.io/conda/dn/bioconda/extractpirs.svg?style=flat
   :alt:   (downloads)
.. |docker_extractpirs| image:: https://quay.io/repository/biocontainers/extractpirs/status
   :target: https://quay.io/repository/biocontainers/extractpirs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extractpirs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extractpirs/README.html

