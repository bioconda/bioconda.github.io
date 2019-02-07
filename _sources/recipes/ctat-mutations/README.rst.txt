.. title:: Package Recipe 'ctat-mutations'
.. highlight: bash


ctat-mutations
==============

.. conda:recipe:: ctat-mutations
   :replaces_section_title:

    Mutation detection in RNA\-Seq using GATK\-v4.0 in RNA\-Seq variant calling\, several sources of variant annotation\, and filtering based on CRAVAT.

   :homepage: https://github.com/NCIP/ctat-mutations
   :license: BSD-3-Clause
   :recipe: /`ctat-mutations <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctat-mutations>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctat-mutations/meta.yaml>`_

   


.. conda:package:: ctat-mutations

   |downloads_ctat-mutations| |docker_ctat-mutations|

   :versions: 2.0.1, 2.0.0, 1.0

   :depends: :conda:package:`bcftools`  :conda:package:`gatk4`  :conda:package:`picard` >=2.0.1 :conda:package:`python`  :conda:package:`samtools`  :conda:package:`star`  :conda:package:`tabix`  

   :required~by: |required_by_ctat-mutations|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ctat-mutations

   and update with::

      conda update ctat-mutations

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ctat-mutations


.. |required_by_ctat-mutations| conda:required_by:: ctat-mutations
.. |downloads_ctat-mutations| image:: https://img.shields.io/conda/dn/bioconda/ctat-mutations.svg?style=flat
   :alt:   (downloads)
.. |docker_ctat-mutations| image:: https://quay.io/repository/biocontainers/ctat-mutations/status
   :target: https://quay.io/repository/biocontainers/ctat-mutations







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ctat-mutations/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ctat-mutations/README.html

