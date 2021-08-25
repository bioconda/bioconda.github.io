:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perl4-corelibs'
.. highlight: bash

perl-perl4-corelibs
===================

.. conda:recipe:: perl-perl4-corelibs/0.004
   :replaces_section_title:
   :noindex:

   libraries historically supplied with Perl 4

   :homepage: http://metacpan.org/pod/Perl4-CoreLibs
   :license: GPL / GPL-3.0
   :recipe: /`perl-perl4-corelibs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl4-corelibs>`_/`0.004 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl4-corelibs/0.004>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl4-corelibs/0.004/meta.yaml>`_

   


.. conda:package:: perl-perl4-corelibs

   |downloads_perl-perl4-corelibs| |docker_perl-perl4-corelibs|

   :versions:
      
      

      ``0.004-1``,  ``0.004-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-getopt-long: 
   :depends perl-socket: 
   :depends perl-text-parsewords: 
   :depends perl-time-local: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-perl4-corelibs

   and update with::

      conda update perl-perl4-corelibs

   or use the docker container::

      docker pull quay.io/biocontainers/perl-perl4-corelibs:<tag>

   (see `perl-perl4-corelibs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perl4-corelibs| image:: https://img.shields.io/conda/dn/bioconda/perl-perl4-corelibs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perl4-corelibs
   :alt:   (downloads)
.. |docker_perl-perl4-corelibs| image:: https://quay.io/repository/biocontainers/perl-perl4-corelibs/status
   :target: https://quay.io/repository/biocontainers/perl-perl4-corelibs
.. _`perl-perl4-corelibs/tags`: https://quay.io/repository/biocontainers/perl-perl4-corelibs?tab=tags


.. raw:: html

    <script>
        var package = "perl-perl4-corelibs";
        var versions = ["0.004","0.004"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perl4-corelibs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perl4-corelibs/README.html