:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-encode-locale'
.. highlight: bash

perl-encode-locale
==================

.. conda:recipe:: perl-encode-locale
   :replaces_section_title:
   :noindex:

   Determine the locale encoding

   :homepage: http://metacpan.org/pod/Encode::Locale
   :license: perl_5
   :recipe: /`perl-encode-locale <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-encode-locale>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-encode-locale/meta.yaml>`_

   


.. conda:package:: perl-encode-locale

   |downloads_perl-encode-locale| |docker_perl-encode-locale|

   :versions:
      
      

      ``1.05-7``,  ``1.05-6``,  ``1.05-5``,  ``1.05-4``,  ``1.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-encode: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-encode-locale

   and update with::

      conda update perl-encode-locale

   or use the docker container::

      docker pull quay.io/biocontainers/perl-encode-locale:<tag>

   (see `perl-encode-locale/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-encode-locale| image:: https://img.shields.io/conda/dn/bioconda/perl-encode-locale.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-encode-locale
   :alt:   (downloads)
.. |docker_perl-encode-locale| image:: https://quay.io/repository/biocontainers/perl-encode-locale/status
   :target: https://quay.io/repository/biocontainers/perl-encode-locale
.. _`perl-encode-locale/tags`: https://quay.io/repository/biocontainers/perl-encode-locale?tab=tags


.. raw:: html

    <script>
        var package = "perl-encode-locale";
        var versions = ["1.05","1.05","1.05","1.05","1.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-encode-locale/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-encode-locale/README.html