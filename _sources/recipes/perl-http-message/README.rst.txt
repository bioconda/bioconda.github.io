:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-message'
.. highlight: bash

perl-http-message
=================

.. conda:recipe:: perl-http-message
   :replaces_section_title:
   :noindex:

   HTTP style message \(base class\)

   :homepage: https://github.com/libwww-perl/HTTP-Message
   :license: perl_5
   :recipe: /`perl-http-message <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-message>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-message/meta.yaml>`_

   


.. conda:package:: perl-http-message

   |downloads_perl-http-message| |docker_perl-http-message|

   :versions:
      
      

      ``6.36-0``,  ``6.18-1``,  ``6.18-0``,  ``6.11-1``,  ``6.11-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-compress-raw-zlib: 
   :depends perl-encode: ``>=3.01``
   :depends perl-encode-locale: 
   :depends perl-exporter: 
   :depends perl-file-spec: 
   :depends perl-http-date: 
   :depends perl-io-html: 
   :depends perl-lwp-mediatypes: 
   :depends perl-mime-base64: 
   :depends perl-uri: 
   :depends perl-url-encode: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-http-message

   and update with::

      conda update perl-http-message

   or use the docker container::

      docker pull quay.io/biocontainers/perl-http-message:<tag>

   (see `perl-http-message/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-message| image:: https://img.shields.io/conda/dn/bioconda/perl-http-message.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-message
   :alt:   (downloads)
.. |docker_perl-http-message| image:: https://quay.io/repository/biocontainers/perl-http-message/status
   :target: https://quay.io/repository/biocontainers/perl-http-message
.. _`perl-http-message/tags`: https://quay.io/repository/biocontainers/perl-http-message?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-message";
        var versions = ["6.36","6.18","6.18","6.11","6.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-message/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-message/README.html