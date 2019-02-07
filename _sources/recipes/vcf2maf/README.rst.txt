.. title:: Package Recipe 'vcf2maf'
.. highlight: bash


vcf2maf
=======

.. conda:recipe:: vcf2maf
   :replaces_section_title:

   Convert a VCF into a MAF where each variant is annotated to only one of all possible gene isoforms

   :homepage: https://github.com/mskcc/vcf2maf
   :license: Apache / Apache-2.0
   :recipe: /`vcf2maf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf/meta.yaml>`_

   


.. conda:package:: vcf2maf

   |downloads_vcf2maf| |docker_vcf2maf|

   :versions: 1.6.16, 1.6.15, 1.6.14, 1.6.12, 1.6.8

   :depends: :conda:package:`htslib` 1.7* :conda:package:`perl` 5.22.0* :conda:package:`samtools`  :conda:package:`variant-effect-predictor`  

   :required~by: |required_by_vcf2maf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcf2maf

   and update with::

      conda update vcf2maf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vcf2maf


.. |required_by_vcf2maf| conda:required_by:: vcf2maf
.. |downloads_vcf2maf| image:: https://img.shields.io/conda/dn/bioconda/vcf2maf.svg?style=flat
   :alt:   (downloads)
.. |docker_vcf2maf| image:: https://quay.io/repository/biocontainers/vcf2maf/status
   :target: https://quay.io/repository/biocontainers/vcf2maf






Notes
-----
This package installs only vcf2maf and does not integrate with the variant\-effect\-predictor \(VEP\). To
do so\, please follow the instructions at https\:\/\/github.com\/mskcc\/vcf2maf\/blob\/master\/README.md.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2maf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2maf/README.html

