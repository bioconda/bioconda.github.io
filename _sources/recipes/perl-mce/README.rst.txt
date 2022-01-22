:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mce'
.. highlight: bash

perl-mce
========

.. conda:recipe:: perl-mce
   :replaces_section_title:
   :noindex:

   Many\-Core Engine for Perl providing parallel processing capabilities

   :homepage: https://github.com/marioroy/mce-perl
   :license: perl_5
   :recipe: /`perl-mce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce/meta.yaml>`_

   


.. conda:package:: perl-mce

   |downloads_perl-mce| |docker_perl-mce|

   :versions:
      
      

      ``1.837-1``,  ``1.837-0``,  ``1.836-0``,  ``1.835-1``,  ``1.835-0``,  ``1.814-1``,  ``1.814-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-file-path: 
   :depends perl-getopt-long: 
   :depends perl-socket: 
   :depends perl-storable: 
   :depends perl-time-hires: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mce

   and update with::

      conda update perl-mce

   or use the docker container::

      docker pull quay.io/biocontainers/perl-mce:<tag>

   (see `perl-mce/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mce| image:: https://img.shields.io/conda/dn/bioconda/perl-mce.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mce
   :alt:   (downloads)
.. |docker_perl-mce| image:: https://quay.io/repository/biocontainers/perl-mce/status
   :target: https://quay.io/repository/biocontainers/perl-mce
.. _`perl-mce/tags`: https://quay.io/repository/biocontainers/perl-mce?tab=tags


.. raw:: html

    <script>
        var package = "perl-mce";
        var versions = ["1.837","1.837","1.836","1.835","1.835"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mce/README.html