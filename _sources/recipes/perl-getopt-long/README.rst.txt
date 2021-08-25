:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-getopt-long'
.. highlight: bash

perl-getopt-long
================

.. conda:recipe:: perl-getopt-long
   :replaces_section_title:
   :noindex:

   Module to handle parsing command line options

   :homepage: http://metacpan.org/pod/Getopt::Long
   :license: unknown
   :recipe: /`perl-getopt-long <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-long>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-long/meta.yaml>`_

   


.. conda:package:: perl-getopt-long

   |downloads_perl-getopt-long| |docker_perl-getopt-long|

   :versions:
      
      

      ``2.50-1``,  ``2.50-0``,  ``2.49-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-getopt-long

   and update with::

      conda update perl-getopt-long

   or use the docker container::

      docker pull quay.io/biocontainers/perl-getopt-long:<tag>

   (see `perl-getopt-long/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-getopt-long| image:: https://img.shields.io/conda/dn/bioconda/perl-getopt-long.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-getopt-long
   :alt:   (downloads)
.. |docker_perl-getopt-long| image:: https://quay.io/repository/biocontainers/perl-getopt-long/status
   :target: https://quay.io/repository/biocontainers/perl-getopt-long
.. _`perl-getopt-long/tags`: https://quay.io/repository/biocontainers/perl-getopt-long?tab=tags


.. raw:: html

    <script>
        var package = "perl-getopt-long";
        var versions = ["2.50","2.50","2.49"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-getopt-long/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-getopt-long/README.html