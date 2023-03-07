:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-bigfile'
.. highlight: bash

perl-bio-bigfile
================

.. conda:recipe:: perl-bio-bigfile
   :replaces_section_title:
   :noindex:

   Low\-level interface to BigWig \& BigBed files

   :homepage: https://metacpan.org/pod/Bio::DB::BigFile
   :license: Apache v2.0
   :recipe: /`perl-bio-bigfile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-bigfile>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-bigfile/meta.yaml>`_

   


.. conda:package:: perl-bio-bigfile

   |downloads_perl-bio-bigfile| |docker_perl-bio-bigfile|

   :versions:
      
      

      ``1.07-3``,  ``1.07-2``,  ``1.07-1``,  ``1.07-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mysql: 
   :depends openssl: ``>=1.1.1t,<1.1.2a``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bioperl: 
   :depends perl-io-string: 
   :depends perl-module-build: ``0.4232.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-bigfile

   and update with::

      conda update perl-bio-bigfile

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-bigfile:<tag>

   (see `perl-bio-bigfile/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-bigfile| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-bigfile.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-bigfile
   :alt:   (downloads)
.. |docker_perl-bio-bigfile| image:: https://quay.io/repository/biocontainers/perl-bio-bigfile/status
   :target: https://quay.io/repository/biocontainers/perl-bio-bigfile
.. _`perl-bio-bigfile/tags`: https://quay.io/repository/biocontainers/perl-bio-bigfile?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-bigfile";
        var versions = ["1.07","1.07","1.07","1.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-bigfile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-bigfile/README.html