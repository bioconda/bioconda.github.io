.. title:: Package Recipe 'rna-seqc'
.. highlight: bash


rna-seqc
========

.. conda:recipe:: rna-seqc
   :replaces_section_title:

   RNA\-SeQC is a java program which computes a series of quality control metrics for RNA\-seq data. The input can be one or more BAM files

   :homepage: http://archive.broadinstitute.org/cancer/cga/rna-seqc
   :license: None
   :recipe: /`rna-seqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-seqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-seqc/meta.yaml>`_

   


.. conda:package:: rna-seqc

   |downloads_rna-seqc| |docker_rna-seqc|

   :versions: 1.1.8

   :depends: :conda:package:`openjdk`  

   :required~by: |required_by_rna-seqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rna-seqc

   and update with::

      conda update rna-seqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rna-seqc


.. |required_by_rna-seqc| conda:required_by:: rna-seqc
.. |downloads_rna-seqc| image:: https://img.shields.io/conda/dn/bioconda/rna-seqc.svg?style=flat
   :alt:   (downloads)
.. |docker_rna-seqc| image:: https://quay.io/repository/biocontainers/rna-seqc/status
   :target: https://quay.io/repository/biocontainers/rna-seqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rna-seqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rna-seqc/README.html

