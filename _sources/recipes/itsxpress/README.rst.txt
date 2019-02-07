.. title:: Package Recipe 'itsxpress'
.. highlight: bash


itsxpress
=========

.. conda:recipe:: itsxpress
   :replaces_section_title:

   ITSxpress\: Software to rapidly trim the Internally Transcribed Spacer \(ITS\) region from FASTQ files

   :homepage: http://github.com/usda-ars-gbru/itsxpress
   :license: PUBLIC-DOMAIN / CC0 1.0
   :recipe: /`itsxpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itsxpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itsxpress/meta.yaml>`_
   :links: biotools: :biotools:`ITSxpress`, doi: :doi:`10.5281/zenodo.1304349`, doi: :doi:`10.12688/f1000research.15704.1`

   


.. conda:package:: itsxpress

   |downloads_itsxpress| |docker_itsxpress|

   :versions: 1.7.2, 1.7.1, 1.6.4, 1.6.3, 1.6.1, 1.5.6

   :depends: :conda:package:`bbmap`  :conda:package:`biopython` >=1.60 :conda:package:`hmmer` >=3.1 :conda:package:`pip`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`vsearch`  

   :required~by: |required_by_itsxpress|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install itsxpress

   and update with::

      conda update itsxpress

   or use the docker container::

      docker pull quay.io/repository/biocontainers/itsxpress


.. |required_by_itsxpress| conda:required_by:: itsxpress
.. |downloads_itsxpress| image:: https://img.shields.io/conda/dn/bioconda/itsxpress.svg?style=flat
   :alt:   (downloads)
.. |docker_itsxpress| image:: https://quay.io/repository/biocontainers/itsxpress/status
   :target: https://quay.io/repository/biocontainers/itsxpress







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itsxpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itsxpress/README.html

