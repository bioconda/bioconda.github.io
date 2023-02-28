:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-listing'
.. highlight: bash

perl-file-listing
=================

.. conda:recipe:: perl-file-listing
   :replaces_section_title:
   :noindex:

   parse directory listing

   :homepage: http://metacpan.org/pod/File-Listing
   :license: perl_5
   :recipe: /`perl-file-listing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-listing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-listing/meta.yaml>`_

   


.. conda:package:: perl-file-listing

   |downloads_perl-file-listing| |docker_perl-file-listing|

   :versions:
      
      

      ``6.15-0``,  ``6.14-0``,  ``6.04-2``,  ``6.04-1``,  ``6.04-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-http-date: 
   :depends perl-time-local: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-listing

   and update with::

      conda update perl-file-listing

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-listing:<tag>

   (see `perl-file-listing/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-listing| image:: https://img.shields.io/conda/dn/bioconda/perl-file-listing.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-listing
   :alt:   (downloads)
.. |docker_perl-file-listing| image:: https://quay.io/repository/biocontainers/perl-file-listing/status
   :target: https://quay.io/repository/biocontainers/perl-file-listing
.. _`perl-file-listing/tags`: https://quay.io/repository/biocontainers/perl-file-listing?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-listing";
        var versions = ["6.15","6.14","6.04","6.04","6.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-listing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-listing/README.html