.. title:: Package Recipe 'seq-seq-pan'
.. highlight: bash


seq-seq-pan
===========

.. conda:recipe:: seq-seq-pan
   :replaces_section_title:

   seq\-seq\-pan is a workflow for the SEQuential alignment of SEQuences to build a PAN\-genome data structure and a whole\-genome\-alignment.

   :homepage: https://gitlab.com/chrjan/seq-seq-pan
   :license: FreeBSD
   :recipe: /`seq-seq-pan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-seq-pan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-seq-pan/meta.yaml>`_

   


.. conda:package:: seq-seq-pan

   |downloads_seq-seq-pan| |docker_seq-seq-pan|

   :versions: 1.0.1, 1.0.0

   :depends: :conda:package:`argparse`  :conda:package:`biopython` 1.69 :conda:package:`blat` 35 :conda:package:`mauvealigner` 1.2.0 :conda:package:`openjdk`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`snakemake`  

   :required~by: |required_by_seq-seq-pan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seq-seq-pan

   and update with::

      conda update seq-seq-pan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seq-seq-pan


.. |required_by_seq-seq-pan| conda:required_by:: seq-seq-pan
.. |downloads_seq-seq-pan| image:: https://img.shields.io/conda/dn/bioconda/seq-seq-pan.svg?style=flat
   :alt:   (downloads)
.. |docker_seq-seq-pan| image:: https://quay.io/repository/biocontainers/seq-seq-pan/status
   :target: https://quay.io/repository/biocontainers/seq-seq-pan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq-seq-pan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq-seq-pan/README.html

