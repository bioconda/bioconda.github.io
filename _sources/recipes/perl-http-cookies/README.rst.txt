:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-cookies'
.. highlight: bash

perl-http-cookies
=================

.. conda:recipe:: perl-http-cookies
   :replaces_section_title:
   :noindex:

   HTTP cookie jars

   :homepage: https://github.com/libwww-perl/http-cookies
   :license: perl_5
   :recipe: /`perl-http-cookies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-cookies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-cookies/meta.yaml>`_

   


.. conda:package:: perl-http-cookies

   |downloads_perl-http-cookies| |docker_perl-http-cookies|

   :versions:
      
      

      ``6.10-0``,  ``6.04-1``,  ``6.04-0``,  ``6.01-1``,  ``6.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-http-date: 
   :depends perl-http-message: 
   :depends perl-time-local: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-http-cookies

   and update with::

      conda update perl-http-cookies

   or use the docker container::

      docker pull quay.io/biocontainers/perl-http-cookies:<tag>

   (see `perl-http-cookies/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-cookies| image:: https://img.shields.io/conda/dn/bioconda/perl-http-cookies.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-cookies
   :alt:   (downloads)
.. |docker_perl-http-cookies| image:: https://quay.io/repository/biocontainers/perl-http-cookies/status
   :target: https://quay.io/repository/biocontainers/perl-http-cookies
.. _`perl-http-cookies/tags`: https://quay.io/repository/biocontainers/perl-http-cookies?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-cookies";
        var versions = ["6.10","6.04","6.04","6.01","6.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-cookies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-cookies/README.html