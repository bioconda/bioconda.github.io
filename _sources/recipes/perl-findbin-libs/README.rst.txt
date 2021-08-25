:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-findbin-libs'
.. highlight: bash

perl-findbin-libs
=================

.. conda:recipe:: perl-findbin-libs/2.017008
   :replaces_section_title:
   :noindex:

   locate and a \'use lib\' or export directories based on \$FindBin\:\:Bin.

   :homepage: http://metacpan.org/pod/FindBin::libs
   :license: perl_5
   :recipe: /`perl-findbin-libs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-libs>`_/`2.017008 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-libs/2.017008>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-libs/2.017008/meta.yaml>`_

   


.. conda:package:: perl-findbin-libs

   |downloads_perl-findbin-libs| |docker_perl-findbin-libs|

   :versions:
      
      

      ``2.017008-1``,  ``2.017008-0``

      

   
   :depends perl: ``>=5.22.0.1,<5.23.0a0``
   :depends perl-carp: 
   :depends perl-file-temp: 
   :depends perl-module-fromperlver: 
   :depends perl-pathtools: 
   :depends perl-scalar-list-utils: 
   :depends perl-test-simple: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-findbin-libs

   and update with::

      conda update perl-findbin-libs

   or use the docker container::

      docker pull quay.io/biocontainers/perl-findbin-libs:<tag>

   (see `perl-findbin-libs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-findbin-libs| image:: https://img.shields.io/conda/dn/bioconda/perl-findbin-libs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-findbin-libs
   :alt:   (downloads)
.. |docker_perl-findbin-libs| image:: https://quay.io/repository/biocontainers/perl-findbin-libs/status
   :target: https://quay.io/repository/biocontainers/perl-findbin-libs
.. _`perl-findbin-libs/tags`: https://quay.io/repository/biocontainers/perl-findbin-libs?tab=tags


.. raw:: html

    <script>
        var package = "perl-findbin-libs";
        var versions = ["2.017008","2.017008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-findbin-libs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-findbin-libs/README.html