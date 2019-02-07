.. title:: Package Recipe 'rnaquast'
.. highlight: bash


rnaquast
========

.. conda:recipe:: rnaquast
   :replaces_section_title:

   rnaQUAST is a tool for evaluating RNA\-Seq assemblies using reference genome and gene database. In addition\, rnaQUAST is also capable of estimating gene database coverage by raw reads and de novo quality assessment using third\-party software.

   :homepage: http://cab.spbu.ru/software/rnaquast/
   :license: GPLv2
   :recipe: /`rnaquast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaquast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaquast/meta.yaml>`_

   


.. conda:package:: rnaquast

   |downloads_rnaquast| |docker_rnaquast|

   :versions: 1.5.1

   :depends: :conda:package:`blast`  :conda:package:`blat`  :conda:package:`busco` >=2 :conda:package:`emboss`  :conda:package:`gffutils`  :conda:package:`gmap`  :conda:package:`joblib`  :conda:package:`matplotlib`  :conda:package:`python` <3 :conda:package:`samtools`  :conda:package:`star`  :conda:package:`tophat`  :conda:package:`ucsc-pslsort`  

   :required~by: |required_by_rnaquast|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnaquast

   and update with::

      conda update rnaquast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rnaquast


.. |required_by_rnaquast| conda:required_by:: rnaquast
.. |downloads_rnaquast| image:: https://img.shields.io/conda/dn/bioconda/rnaquast.svg?style=flat
   :alt:   (downloads)
.. |docker_rnaquast| image:: https://quay.io/repository/biocontainers/rnaquast/status
   :target: https://quay.io/repository/biocontainers/rnaquast







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaquast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaquast/README.html

