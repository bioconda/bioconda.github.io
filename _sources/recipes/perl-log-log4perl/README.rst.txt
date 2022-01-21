:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-log-log4perl'
.. highlight: bash

perl-log-log4perl
=================

.. conda:recipe:: perl-log-log4perl
   :replaces_section_title:
   :noindex:

   Log4j implementation for Perl

   :homepage: http://metacpan.org/pod/Log::Log4perl
   :license: unknown
   :recipe: /`perl-log-log4perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-log-log4perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-log-log4perl/meta.yaml>`_

   


.. conda:package:: perl-log-log4perl

   |downloads_perl-log-log4perl| |docker_perl-log-log4perl|

   :versions:
      
      

      ``1.49-1``,  ``1.49-0``,  ``1.47-2``,  ``1.47-1``,  ``1.47-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-dbi: 
   :depends perl-file-path: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-log-log4perl

   and update with::

      conda update perl-log-log4perl

   or use the docker container::

      docker pull quay.io/biocontainers/perl-log-log4perl:<tag>

   (see `perl-log-log4perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-log-log4perl| image:: https://img.shields.io/conda/dn/bioconda/perl-log-log4perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-log-log4perl
   :alt:   (downloads)
.. |docker_perl-log-log4perl| image:: https://quay.io/repository/biocontainers/perl-log-log4perl/status
   :target: https://quay.io/repository/biocontainers/perl-log-log4perl
.. _`perl-log-log4perl/tags`: https://quay.io/repository/biocontainers/perl-log-log4perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-log-log4perl";
        var versions = ["1.49","1.49","1.47","1.47","1.47"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-log-log4perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-log-log4perl/README.html