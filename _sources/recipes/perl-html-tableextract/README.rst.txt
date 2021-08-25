:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-tableextract'
.. highlight: bash

perl-html-tableextract
======================

.. conda:recipe:: perl-html-tableextract
   :replaces_section_title:
   :noindex:

   Perl module for extracting the content contained in tables within an HTML document\, either as text or encoded element trees.

   :homepage: http://metacpan.org/pod/HTML-TableExtract
   :license: unknown
   :recipe: /`perl-html-tableextract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tableextract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tableextract/meta.yaml>`_

   


.. conda:package:: perl-html-tableextract

   |downloads_perl-html-tableextract| |docker_perl-html-tableextract|

   :versions:
      
      

      ``2.13-2``,  ``2.13-1``,  ``2.13-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-html-element-extended: 
   :depends perl-html-parser: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-html-tableextract

   and update with::

      conda update perl-html-tableextract

   or use the docker container::

      docker pull quay.io/biocontainers/perl-html-tableextract:<tag>

   (see `perl-html-tableextract/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-html-tableextract| image:: https://img.shields.io/conda/dn/bioconda/perl-html-tableextract.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-tableextract
   :alt:   (downloads)
.. |docker_perl-html-tableextract| image:: https://quay.io/repository/biocontainers/perl-html-tableextract/status
   :target: https://quay.io/repository/biocontainers/perl-html-tableextract
.. _`perl-html-tableextract/tags`: https://quay.io/repository/biocontainers/perl-html-tableextract?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-tableextract";
        var versions = ["2.13","2.13","2.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-tableextract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-tableextract/README.html