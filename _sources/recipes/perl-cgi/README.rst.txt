:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cgi'
.. highlight: bash

perl-cgi
========

.. conda:recipe:: perl-cgi
   :replaces_section_title:

   A generic file fetching mechanism

   :homepage: https://metacpan.org/pod/distribution/CGI/lib/CGI.pod
   :license: GPL
   :recipe: /`perl-cgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cgi/meta.yaml>`_

   


.. conda:package:: perl-cgi

   |downloads_perl-cgi| |docker_perl-cgi|

   :versions: 4.43-0, 4.40-2, 4.40-1, 4.40-0, 4.22-4, 4.22-3, 4.22-2, 4.22-1, 4.22-0
   
   :depends libgcc-ng: >=7.3.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-encode: 
   :depends perl-exporter: 
   :depends perl-file-temp: 
   :depends perl-html-parser: 
   :depends perl-parent: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-cgi

   and update with::

      conda update perl-cgi

   or use the docker container::

      docker pull quay.io/biocontainers/perl-cgi:<tag>

   (see `perl-cgi/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-cgi| image:: https://img.shields.io/conda/dn/bioconda/perl-cgi.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cgi
   :alt:   (downloads)
.. |docker_perl-cgi| image:: https://quay.io/repository/biocontainers/perl-cgi/status
   :target: https://quay.io/repository/biocontainers/perl-cgi
.. _`perl-cgi/tags`: https://quay.io/repository/biocontainers/perl-cgi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cgi/README.html