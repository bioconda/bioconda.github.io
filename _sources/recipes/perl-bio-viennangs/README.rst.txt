:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-viennangs'
.. highlight: bash

perl-bio-viennangs
==================

.. conda:recipe:: perl-bio-viennangs
   :replaces_section_title:
   :noindex:

   A Perl distribution for Next\-Generation Sequencing \(NGS\) data analysis

   :homepage: http://metacpan.org/pod/Bio::ViennaNGS
   :license: perl_5
   :recipe: /`perl-bio-viennangs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-viennangs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-viennangs/meta.yaml>`_

   


.. conda:package:: perl-bio-viennangs

   |downloads_perl-bio-viennangs| |docker_perl-bio-viennangs|

   :versions:
      
      

      ``0.19.2-1``,  ``0.19.2-0``,  ``v0.19.2-5``,  ``v0.19-1``,  ``v0.18-2``,  ``v0.18-1``,  ``v0.18-0``,  ``v0.16-0``

      

   
   :depends bedtools: ``>=2.24``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-procedural: 
   :depends perl-bio-samtools: 
   :depends perl-bioperl: 
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-data-dumper: 
   :depends perl-exporter: 
   :depends perl-file-find: 
   :depends perl-file-path: 
   :depends perl-file-share: 
   :depends perl-file-slurp: 
   :depends perl-file-temp: 
   :depends perl-findbin: 
   :depends perl-getopt-long: 
   :depends perl-ipc-cmd: 
   :depends perl-lib: 
   :depends perl-math-round: 
   :depends perl-moose: 
   :depends perl-moosex-clone: 
   :depends perl-namespace-autoclean: 
   :depends perl-params-coerce: 
   :depends perl-path-class: 
   :depends perl-perlio-gzip: 
   :depends perl-pod-usage: 
   :depends perl-posix: 
   :depends perl-scalar-list-utils: 
   :depends perl-template-toolkit: 
   :depends perl-test-deep: 
   :depends perl-test-file-contents: 
   :depends perl-test-files: 
   :depends perl-tie-hash-indexed: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-fatotwobit: 
   :depends ucsc-fetchchromsizes: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-viennangs

   and update with::

      conda update perl-bio-viennangs

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-viennangs:<tag>

   (see `perl-bio-viennangs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-viennangs| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-viennangs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-viennangs
   :alt:   (downloads)
.. |docker_perl-bio-viennangs| image:: https://quay.io/repository/biocontainers/perl-bio-viennangs/status
   :target: https://quay.io/repository/biocontainers/perl-bio-viennangs
.. _`perl-bio-viennangs/tags`: https://quay.io/repository/biocontainers/perl-bio-viennangs?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-viennangs";
        var versions = ["0.19.2","0.19.2","v0.19.2","v0.19","v0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-viennangs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-viennangs/README.html