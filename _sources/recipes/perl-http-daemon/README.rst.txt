:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-daemon'
.. highlight: bash

perl-http-daemon
================

.. conda:recipe:: perl-http-daemon
   :replaces_section_title:
   :noindex:

   a simple http server class

   :homepage: http://metacpan.org/pod/HTTP-Daemon
   :license: perl_5
   :recipe: /`perl-http-daemon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-daemon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-daemon/meta.yaml>`_

   


.. conda:package:: perl-http-daemon

   |downloads_perl-http-daemon| |docker_perl-http-daemon|

   :versions:
      
      

      ``6.01-2``,  ``6.01-1``,  ``6.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-http-date: 
   :depends perl-http-message: 
   :depends perl-lwp-mediatypes: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-http-daemon

   and update with::

      conda update perl-http-daemon

   or use the docker container::

      docker pull quay.io/biocontainers/perl-http-daemon:<tag>

   (see `perl-http-daemon/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-daemon| image:: https://img.shields.io/conda/dn/bioconda/perl-http-daemon.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-daemon
   :alt:   (downloads)
.. |docker_perl-http-daemon| image:: https://quay.io/repository/biocontainers/perl-http-daemon/status
   :target: https://quay.io/repository/biocontainers/perl-http-daemon
.. _`perl-http-daemon/tags`: https://quay.io/repository/biocontainers/perl-http-daemon?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-daemon";
        var versions = ["6.01","6.01","6.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-daemon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-daemon/README.html