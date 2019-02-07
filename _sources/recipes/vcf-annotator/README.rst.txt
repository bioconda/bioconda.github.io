.. title:: Package Recipe 'vcf-annotator'
.. highlight: bash


vcf-annotator
=============

.. conda:recipe:: vcf-annotator
   :replaces_section_title:

   Use the reference GenBank file to add biological annotations to the variant calls in a VCF.

   :homepage: https://github.com/rpetit3/vcf-annotator
   :license: MIT
   :recipe: /`vcf-annotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-annotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-annotator/meta.yaml>`_

   


.. conda:package:: vcf-annotator

   |downloads_vcf-annotator| |docker_vcf-annotator|

   :versions: 0.5

   :depends: :conda:package:`biopython`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`pyvcf`  

   :required~by: |required_by_vcf-annotator|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcf-annotator

   and update with::

      conda update vcf-annotator

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vcf-annotator


.. |required_by_vcf-annotator| conda:required_by:: vcf-annotator
.. |downloads_vcf-annotator| image:: https://img.shields.io/conda/dn/bioconda/vcf-annotator.svg?style=flat
   :alt:   (downloads)
.. |docker_vcf-annotator| image:: https://quay.io/repository/biocontainers/vcf-annotator/status
   :target: https://quay.io/repository/biocontainers/vcf-annotator







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf-annotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf-annotator/README.html

