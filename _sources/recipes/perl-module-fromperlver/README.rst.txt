:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-fromperlver'
.. highlight: bash

perl-module-fromperlver
=======================

.. conda:recipe:: perl-module-fromperlver/0.008002
   :replaces_section_title:
   :noindex:

   install modules compatible with the running perl.

   :homepage: http://metacpan.org/pod/Module::FromPerlVer
   :license: perl_5
   :recipe: /`perl-module-fromperlver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-fromperlver>`_/`0.008002 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-fromperlver/0.008002>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-fromperlver/0.008002/meta.yaml>`_

   


.. conda:package:: perl-module-fromperlver

   |downloads_perl-module-fromperlver| |docker_perl-module-fromperlver|

   :versions:
      
      

      ``0.008002-2``,  ``0.008002-1``,  ``0.008002-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-archive-tar: 
   :depends perl-carp: 
   :depends perl-file-copy-recursive: 
   :depends perl-lib: 
   :depends perl-list-moreutils: 
   :depends perl-parent: 
   :depends perl-pathtools: 
   :depends perl-perl-version: 
   :depends perl-scalar-list-utils: 
   :depends perl-test-deep: 
   :depends perl-test-simple: 
   :depends perl-version-next: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-fromperlver

   and update with::

      conda update perl-module-fromperlver

   or use the docker container::

      docker pull quay.io/biocontainers/perl-module-fromperlver:<tag>

   (see `perl-module-fromperlver/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-fromperlver| image:: https://img.shields.io/conda/dn/bioconda/perl-module-fromperlver.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-fromperlver
   :alt:   (downloads)
.. |docker_perl-module-fromperlver| image:: https://quay.io/repository/biocontainers/perl-module-fromperlver/status
   :target: https://quay.io/repository/biocontainers/perl-module-fromperlver
.. _`perl-module-fromperlver/tags`: https://quay.io/repository/biocontainers/perl-module-fromperlver?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-fromperlver";
        var versions = ["0.008002","0.008002","0.008002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-fromperlver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-fromperlver/README.html