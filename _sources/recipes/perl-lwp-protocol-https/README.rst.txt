:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-lwp-protocol-https'
.. highlight: bash

perl-lwp-protocol-https
=======================

.. conda:recipe:: perl-lwp-protocol-https
   :replaces_section_title:
   :noindex:

   Provide https support for LWP\:\:UserAgent

   :homepage: https://metacpan.org/pod/LWP::Protocol::https
   :license: Perl
   :recipe: /`perl-lwp-protocol-https <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lwp-protocol-https>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lwp-protocol-https/meta.yaml>`_

   


.. conda:package:: perl-lwp-protocol-https

   |downloads_perl-lwp-protocol-https| |docker_perl-lwp-protocol-https|

   :versions:
      
      

      ``6.07-5``,  ``6.07-4``,  ``6.06-3``,  ``6.06-2``,  ``6.06-1``,  ``6.06-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-http-message: ``>=6.18``
   :depends perl-io-socket-ssl: 
   :depends perl-libwww-perl: 
   :depends perl-mozilla-ca: 
   :depends perl-net-http: 
   :depends perl-test-requiresinternet: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-lwp-protocol-https

   and update with::

      conda update perl-lwp-protocol-https

   or use the docker container::

      docker pull quay.io/biocontainers/perl-lwp-protocol-https:<tag>

   (see `perl-lwp-protocol-https/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-lwp-protocol-https| image:: https://img.shields.io/conda/dn/bioconda/perl-lwp-protocol-https.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-lwp-protocol-https
   :alt:   (downloads)
.. |docker_perl-lwp-protocol-https| image:: https://quay.io/repository/biocontainers/perl-lwp-protocol-https/status
   :target: https://quay.io/repository/biocontainers/perl-lwp-protocol-https
.. _`perl-lwp-protocol-https/tags`: https://quay.io/repository/biocontainers/perl-lwp-protocol-https?tab=tags


.. raw:: html

    <script>
        var package = "perl-lwp-protocol-https";
        var versions = ["6.07","6.07","6.06","6.06","6.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-lwp-protocol-https/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-lwp-protocol-https/README.html