.. title:: Package Recipe 'perl-bio-viennangs'
.. highlight: bash


perl-bio-viennangs
==================

.. conda:recipe:: perl-bio-viennangs
   :replaces_section_title:

   A Perl distribution for Next\-Generation Sequencing \(NGS\) data analysis

   :homepage: http://metacpan.org/pod/Bio::ViennaNGS
   :license: perl_5
   :recipe: /`perl-bio-viennangs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-viennangs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-viennangs/meta.yaml>`_

   


.. conda:package:: perl-bio-viennangs

   |downloads_perl-bio-viennangs| |docker_perl-bio-viennangs|

   :versions: v0.19.2, v0.19, v0.18, v0.16

   :depends: :conda:package:`bedtools` >=2.24 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-bio-samtools`  :conda:package:`perl-bioperl`  :conda:package:`perl-carp`  :conda:package:`perl-constant`  :conda:package:`perl-data-dumper`  :conda:package:`perl-exporter`  :conda:package:`perl-file-find`  :conda:package:`perl-file-path`  :conda:package:`perl-file-share`  :conda:package:`perl-file-slurp`  :conda:package:`perl-file-temp`  :conda:package:`perl-findbin`  :conda:package:`perl-getopt-long`  :conda:package:`perl-ipc-cmd`  :conda:package:`perl-lib`  :conda:package:`perl-list-util`  :conda:package:`perl-math-round`  :conda:package:`perl-moose`  :conda:package:`perl-moosex-clone`  :conda:package:`perl-namespace-autoclean`  :conda:package:`perl-params-coerce`  :conda:package:`perl-path-class`  :conda:package:`perl-perlio-gzip`  :conda:package:`perl-pod-usage`  :conda:package:`perl-posix`  :conda:package:`perl-template-toolkit`  :conda:package:`perl-test-deep`  :conda:package:`perl-test-file-contents`  :conda:package:`perl-test-files`  :conda:package:`perl-tie-hash-indexed`  :conda:package:`ucsc-bedgraphtobigwig`  :conda:package:`ucsc-bedtobigbed`  :conda:package:`ucsc-fatotwobit`  :conda:package:`ucsc-fetchchromsizes`  

   :required~by: |required_by_perl-bio-viennangs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-viennangs

   and update with::

      conda update perl-bio-viennangs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-viennangs


.. |required_by_perl-bio-viennangs| conda:required_by:: perl-bio-viennangs
.. |downloads_perl-bio-viennangs| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-viennangs.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-viennangs| image:: https://quay.io/repository/biocontainers/perl-bio-viennangs/status
   :target: https://quay.io/repository/biocontainers/perl-bio-viennangs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-viennangs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-viennangs/README.html

