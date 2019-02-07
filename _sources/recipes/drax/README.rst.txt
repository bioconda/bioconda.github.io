.. title:: Package Recipe 'drax'
.. highlight: bash


drax
====

.. conda:recipe:: drax
   :replaces_section_title:

   A pipeline for Detecting Resistome Associated taXa.

   :homepage: https://github.com/will-rowe/drax
   :license: MIT
   :recipe: /`drax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drax/meta.yaml>`_

   


.. conda:package:: drax

   |downloads_drax| |docker_drax|

   :versions: 0.0.0

   :depends: :conda:package:`bbmap` ==37.90 :conda:package:`fastp` ==0.12.4 :conda:package:`fastqc` ==0.11.7 :conda:package:`groot` ==0.5 :conda:package:`kaiju` ==1.6.2 :conda:package:`krona` ==2.7 :conda:package:`metacherchant` ==0.1.0 :conda:package:`multiqc` ==1.4 :conda:package:`nextflow` ==0.27.6 :conda:package:`r-essentials` ==1.7.0 :conda:package:`samtools` ==1.4 :conda:package:`seqkit` ==0.7.2 

   :required~by: |required_by_drax|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install drax

   and update with::

      conda update drax

   or use the docker container::

      docker pull quay.io/repository/biocontainers/drax


.. |required_by_drax| conda:required_by:: drax
.. |downloads_drax| image:: https://img.shields.io/conda/dn/bioconda/drax.svg?style=flat
   :alt:   (downloads)
.. |docker_drax| image:: https://quay.io/repository/biocontainers/drax/status
   :target: https://quay.io/repository/biocontainers/drax







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drax/README.html

