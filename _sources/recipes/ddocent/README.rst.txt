.. title:: Package Recipe 'ddocent'
.. highlight: bash


ddocent
=======

.. conda:recipe:: ddocent
   :replaces_section_title:

    dDocent is  an interactive bash wrapper to QC\, assemble\, map\, and call SNPs from all types of RAD data

   :homepage: http://ddocent.com
   :license: The MIT License (MIT)
   :recipe: /`ddocent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddocent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddocent/meta.yaml>`_

   


.. conda:package:: ddocent

   |downloads_ddocent| |docker_ddocent|

   :versions: 2.6.0, 2.5.6, 2.5.5, 2.5.2, 2.5.1, 2.3.8, 2.2.25, 2.2.20, 2.2.19, 2.2.16, 2.2.15, 2.2.13, 2.2.8, 2.2.7, 2.2.4, 2.1

   :depends: :conda:package:`bedtools` >=2.26.0 :conda:package:`bwa`  :conda:package:`cd-hit`  :conda:package:`coreutils` >=8.22 :conda:package:`curl`  :conda:package:`freebayes`  :conda:package:`gnuplot`  :conda:package:`grep`  :conda:package:`mawk`  :conda:package:`openjdk`  :conda:package:`parallel`  :conda:package:`pear`  :conda:package:`rainbow`  :conda:package:`samtools`  :conda:package:`seqtk` >=1.3 :conda:package:`stacks` >=2.0 :conda:package:`trimmomatic`  :conda:package:`unzip`  :conda:package:`vcflib`  :conda:package:`vcftools` >=0.1.15 

   :required~by: |required_by_ddocent|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ddocent

   and update with::

      conda update ddocent

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ddocent


.. |required_by_ddocent| conda:required_by:: ddocent
.. |downloads_ddocent| image:: https://img.shields.io/conda/dn/bioconda/ddocent.svg?style=flat
   :alt:   (downloads)
.. |docker_ddocent| image:: https://quay.io/repository/biocontainers/ddocent/status
   :target: https://quay.io/repository/biocontainers/ddocent







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ddocent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ddocent/README.html

