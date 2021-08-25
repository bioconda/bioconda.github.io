:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-socket-inet6'
.. highlight: bash

perl-io-socket-inet6
====================

.. conda:recipe:: perl-io-socket-inet6
   :replaces_section_title:
   :noindex:

   Object interface for AF\_INET\/AF\_INET6 domain sockets

   :homepage: http://metacpan.org/pod/IO::Socket::INET6
   :license: perl_5
   :recipe: /`perl-io-socket-inet6 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-socket-inet6>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-socket-inet6/meta.yaml>`_

   


.. conda:package:: perl-io-socket-inet6

   |downloads_perl-io-socket-inet6| |docker_perl-io-socket-inet6|

   :versions:
      
      

      ``2.72-2``,  ``2.72-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-socket: 
   :depends perl-socket6: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-socket-inet6

   and update with::

      conda update perl-io-socket-inet6

   or use the docker container::

      docker pull quay.io/biocontainers/perl-io-socket-inet6:<tag>

   (see `perl-io-socket-inet6/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-socket-inet6| image:: https://img.shields.io/conda/dn/bioconda/perl-io-socket-inet6.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-socket-inet6
   :alt:   (downloads)
.. |docker_perl-io-socket-inet6| image:: https://quay.io/repository/biocontainers/perl-io-socket-inet6/status
   :target: https://quay.io/repository/biocontainers/perl-io-socket-inet6
.. _`perl-io-socket-inet6/tags`: https://quay.io/repository/biocontainers/perl-io-socket-inet6?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-socket-inet6";
        var versions = ["2.72","2.72"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-socket-inet6/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-socket-inet6/README.html