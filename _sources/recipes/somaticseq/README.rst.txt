.. title:: Package Recipe 'somaticseq'
.. highlight: bash


somaticseq
==========

.. conda:recipe:: somaticseq
   :replaces_section_title:

   An ensemble approach to accurately detect somatic mutations

   :homepage: http://bioinform.github.io/somaticseq/
   :license: 2-clause BSD
   :recipe: /`somaticseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somaticseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somaticseq/meta.yaml>`_

   SomaticSeq is an ensemble caller that has the ability to use machine learning to filter out false positives. The detailed documentation is included in the package\, located in docs\/Manual.pdf. A quick guide can also be found here. SomaticSeq\'s open\-access paper\: Fang LT\, Afshar PT\, Chhibber A\, et al. An ensemble approach to accurately detect somatic mutations using SomaticSeq. Genome Biol. 2015\;16\:197.


.. conda:package:: somaticseq

   |downloads_somaticseq| |docker_somaticseq|

   :versions: 2.8.1

   :depends: :conda:package:`bedtools`  :conda:package:`gatk4`  :conda:package:`lofreq`  :conda:package:`muse`  :conda:package:`numpy`  :conda:package:`pysam`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`r-ada`  :conda:package:`regex`  :conda:package:`scalpel`  :conda:package:`scipy`  :conda:package:`vardict`  :conda:package:`varscan` >=2 

   :required~by: |required_by_somaticseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install somaticseq

   and update with::

      conda update somaticseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/somaticseq


.. |required_by_somaticseq| conda:required_by:: somaticseq
.. |downloads_somaticseq| image:: https://img.shields.io/conda/dn/bioconda/somaticseq.svg?style=flat
   :alt:   (downloads)
.. |docker_somaticseq| image:: https://quay.io/repository/biocontainers/somaticseq/status
   :target: https://quay.io/repository/biocontainers/somaticseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/somaticseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/somaticseq/README.html

