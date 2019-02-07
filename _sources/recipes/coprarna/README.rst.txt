.. title:: Package Recipe 'coprarna'
.. highlight: bash


coprarna
========

.. conda:recipe:: coprarna
   :replaces_section_title:

   Target prediction for prokaryotic trans\-acting small RNAs

   :homepage: https://github.com/PatrickRWright/CopraRNA
   :license: MIT
   :recipe: /`coprarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coprarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coprarna/meta.yaml>`_

   


.. conda:package:: coprarna

   |downloads_coprarna| |docker_coprarna|

   :versions: 2.1.3, 2.1.2, 2.1.1, 2.1.0

   :depends: :conda:package:`blast-legacy` 2.2.22 :conda:package:`bzip2`  :conda:package:`clustalo`  :conda:package:`coreutils` 8.25 :conda:package:`domclust`  :conda:package:`embassy-phylip` 3.69.650 :conda:package:`emboss` 6.5.7 :conda:package:`gawk`  :conda:package:`grep`  :conda:package:`intarna` 2.3.1 :conda:package:`mafft` 7.310 :conda:package:`perl` >=5.22 :conda:package:`perl-bio-eutilities` 1.75 :conda:package:`perl-bioperl` 1.6.924 :conda:package:`perl-getopt-long`  :conda:package:`perl-list-moreutils` 0.428 :conda:package:`perl-parallel-forkmanager` 1.17 :conda:package:`phantomjs`  :conda:package:`python`  :conda:package:`r-base` 3.4.1 :conda:package:`r-pheatmap`  :conda:package:`r-robustrankaggreg`  :conda:package:`r-seqinr`  :conda:package:`sed`  :conda:package:`suds-jurko` 0.6 

   :required~by: |required_by_coprarna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coprarna

   and update with::

      conda update coprarna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/coprarna


.. |required_by_coprarna| conda:required_by:: coprarna
.. |downloads_coprarna| image:: https://img.shields.io/conda/dn/bioconda/coprarna.svg?style=flat
   :alt:   (downloads)
.. |docker_coprarna| image:: https://quay.io/repository/biocontainers/coprarna/status
   :target: https://quay.io/repository/biocontainers/coprarna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coprarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coprarna/README.html

