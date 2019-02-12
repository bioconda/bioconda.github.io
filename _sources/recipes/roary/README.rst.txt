.. title:: Package Recipe 'roary'
.. highlight: bash


roary
=====

.. conda:recipe:: roary
   :replaces_section_title:

   Rapid large\-scale prokaryote pan genome analysis

   :homepage: https://github.com/sanger-pathogens/Roary
   :license: GPL-3.0
   :recipe: /`roary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roary/meta.yaml>`_
   :links: biotools: :biotools:`roary`

   


.. conda:package:: roary

   |downloads_roary| |docker_roary|

   :versions: 3.12.0, 3.10.2, 3.9.1, 3.8.2, 3.8.0, 3.7.0

   :depends: :conda:package:`bedtools`  :conda:package:`blast`  :conda:package:`cd-hit`  :conda:package:`fasttree`  :conda:package:`libgcc`  :conda:package:`mafft`  :conda:package:`mcl`  :conda:package:`parallel`  :conda:package:`perl` 5.22.0* :conda:package:`perl-array-utils`  :conda:package:`perl-bioperl` <1.7 :conda:package:`perl-bioperl-core` <1.7 :conda:package:`perl-digest-md5-file`  :conda:package:`perl-env-path`  :conda:package:`perl-exception-class`  :conda:package:`perl-file-find-rule`  :conda:package:`perl-file-grep`  :conda:package:`perl-file-slurper`  :conda:package:`perl-graph-readwrite`  :conda:package:`perl-log-log4perl`  :conda:package:`perl-moose`  :conda:package:`perl-perlio-utf8_strict`  :conda:package:`perl-test-files`  :conda:package:`perl-test-most`  :conda:package:`perl-test-output`  :conda:package:`perl-text-csv`  :conda:package:`prank`  

   :required~by: |required_by_roary|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install roary

   and update with::

      conda update roary

   or use the docker container::

      docker pull quay.io/repository/biocontainers/roary


.. |required_by_roary| conda:required_by:: roary
.. |downloads_roary| image:: https://img.shields.io/conda/dn/bioconda/roary.svg?style=flat
   :alt:   (downloads)
.. |docker_roary| image:: https://quay.io/repository/biocontainers/roary/status
   :target: https://quay.io/repository/biocontainers/roary







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/roary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/roary/README.html

