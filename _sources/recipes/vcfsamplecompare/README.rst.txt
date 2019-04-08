:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfsamplecompare'
.. highlight: bash

vcfsamplecompare
================

.. conda:recipe:: vcfsamplecompare
   :replaces_section_title:

   This script sorts and \(optionally\) filters the rows\/variants of a VCF file \(containing data for 2 or more samples\) based on the differences in the variant data between samples or sample groups. Degree of \"difference\" is determined by either the best possible degree of separation of sample groups by genotype calls or the difference in average allelic frequency of each sample or sample group \(with a gap size threshold\). The pair of samples or sample groups used to represent the difference for a variant row is the one leading to the greatest difference in consistent genotype or average allelic frequencies \(i.e. observation ratios\, e.g. AO\/DP\) of the same variant state. If sample groups are not specified\, the pair of samples leading to the greatest difference is greedily discovered and chosen to represent the variant\/row.

   :homepage: https://github.com/hepcat72/vcfSampleCompare
   :license: GNU
   :recipe: /`vcfsamplecompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfsamplecompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfsamplecompare/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.1463080`

   


.. conda:package:: vcfsamplecompare

   |downloads_vcfsamplecompare| |docker_vcfsamplecompare|

   :versions: v2.008-0, v2.006-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcfsamplecompare

   and update with::

      conda update vcfsamplecompare

   or use the docker container::

      docker pull quay.io/biocontainers/vcfsamplecompare:<tag>

   (see `vcfsamplecompare/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfsamplecompare| image:: https://img.shields.io/conda/dn/bioconda/vcfsamplecompare.svg?style=flat
   :alt:   (downloads)
.. |docker_vcfsamplecompare| image:: https://quay.io/repository/biocontainers/vcfsamplecompare/status
   :target: https://quay.io/repository/biocontainers/vcfsamplecompare
.. _`vcfsamplecompare/tags`: https://quay.io/repository/biocontainers/vcfsamplecompare?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfsamplecompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfsamplecompare/README.html