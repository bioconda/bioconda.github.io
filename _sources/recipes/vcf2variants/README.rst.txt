:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2variants'
.. highlight: bash

vcf2variants
============

.. conda:recipe:: vcf2variants
   :replaces_section_title:

   Convert vcf files to varda variant files.

   :homepage: https://github.com/varda/varda2_preprocessing
   :license: MIT / MIT
   :recipe: /`vcf2variants <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2variants>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2variants/meta.yaml>`_

   


.. conda:package:: vcf2variants

   |downloads_vcf2variants| |docker_vcf2variants|

   :versions: 0.3-0, 0.2-0
   
   :depends cyvcf2: 
   :depends python: >=3.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcf2variants

   and update with::

      conda update vcf2variants

   or use the docker container::

      docker pull quay.io/biocontainers/vcf2variants:<tag>

   (see `vcf2variants/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2variants| image:: https://img.shields.io/conda/dn/bioconda/vcf2variants.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2variants
   :alt:   (downloads)
.. |docker_vcf2variants| image:: https://quay.io/repository/biocontainers/vcf2variants/status
   :target: https://quay.io/repository/biocontainers/vcf2variants
.. _`vcf2variants/tags`: https://quay.io/repository/biocontainers/vcf2variants?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2variants/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2variants/README.html