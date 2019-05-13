:orphan:  .. only available via index, not via toctree

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

   :versions: 2.1.0-0, 2.0.1-5, 2.0.1-4, 2.0.1-3, 2.0.1-2, 2.0.1-1, 2.0.1-0, 2.0.0-4, 2.0.0-3, 2.0.0-0, 1.0-0
   
   :depends bcftools: 
   :depends gatk4: 
   :depends openjdk: >=8
   :depends picard: 2.18.14.*
   :depends pysam: 
   :depends python: >=3.6,<3.7.0a0
   :depends requests: 2.18.4.*
   :depends samtools: 
   :depends star: 
   :depends tabix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ctat-mutations

   and update with::

      conda update ctat-mutations

   or use the docker container::

      docker pull quay.io/biocontainers/ctat-mutations:<tag>

   (see `ctat-mutations/tags`_ for valid values for ``<tag>``)


.. |downloads_ctat-mutations| image:: https://img.shields.io/conda/dn/bioconda/ctat-mutations.svg?style=flat
   :target: https://anaconda.org/bioconda/ctat-mutations
   :alt:   (downloads)
.. |docker_ctat-mutations| image:: https://quay.io/repository/biocontainers/ctat-mutations/status
   :target: https://quay.io/repository/biocontainers/ctat-mutations
.. _`ctat-mutations/tags`: https://quay.io/repository/biocontainers/ctat-mutations?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ctat-mutations/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ctat-mutations/README.html