.. title:: Package Recipe 'variantbam'
.. highlight: bash


variantbam
==========

.. conda:recipe:: variantbam
   :replaces_section_title:

   Filtering and profiling of next\-generational sequencing data using region\-specific rules

   :homepage: https://github.com/jwalabroad/VariantBam
   :license: GPLv3
   :recipe: /`variantbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantbam/meta.yaml>`_

   


.. conda:package:: variantbam

   |downloads_variantbam| |docker_variantbam|

   :versions: 1.4.4a, 1.4.3, 1.3.0, 1.2.1_2015.01.08

   :depends: :conda:package:`bzip2`  :conda:package:`libgcc`  :conda:package:`xz`  :conda:package:`zlib`  

   :required~by: |required_by_variantbam|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install variantbam

   and update with::

      conda update variantbam

   or use the docker container::

      docker pull quay.io/repository/biocontainers/variantbam


.. |required_by_variantbam| conda:required_by:: variantbam
.. |downloads_variantbam| image:: https://img.shields.io/conda/dn/bioconda/variantbam.svg?style=flat
   :alt:   (downloads)
.. |docker_variantbam| image:: https://quay.io/repository/biocontainers/variantbam/status
   :target: https://quay.io/repository/biocontainers/variantbam







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/variantbam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/variantbam/README.html

