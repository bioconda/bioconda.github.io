:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-string-rewriteprefix'
.. highlight: bash

perl-string-rewriteprefix
=========================

.. conda:recipe:: perl-string-rewriteprefix
   :replaces_section_title:
   :noindex:

   rewrite strings based on a set of known prefixes

   :homepage: https://github.com/rjbs/String-RewritePrefix
   :license: perl_5
   :recipe: /`perl-string-rewriteprefix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-rewriteprefix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-rewriteprefix/meta.yaml>`_

   


.. conda:package:: perl-string-rewriteprefix

   |downloads_perl-string-rewriteprefix| |docker_perl-string-rewriteprefix|

   :versions:
      
      

      ``0.007-1``,  ``0.007-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-sub-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-string-rewriteprefix

   and update with::

      conda update perl-string-rewriteprefix

   or use the docker container::

      docker pull quay.io/biocontainers/perl-string-rewriteprefix:<tag>

   (see `perl-string-rewriteprefix/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-string-rewriteprefix| image:: https://img.shields.io/conda/dn/bioconda/perl-string-rewriteprefix.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-string-rewriteprefix
   :alt:   (downloads)
.. |docker_perl-string-rewriteprefix| image:: https://quay.io/repository/biocontainers/perl-string-rewriteprefix/status
   :target: https://quay.io/repository/biocontainers/perl-string-rewriteprefix
.. _`perl-string-rewriteprefix/tags`: https://quay.io/repository/biocontainers/perl-string-rewriteprefix?tab=tags


.. raw:: html

    <script>
        var package = "perl-string-rewriteprefix";
        var versions = ["0.007","0.007"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-string-rewriteprefix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-string-rewriteprefix/README.html