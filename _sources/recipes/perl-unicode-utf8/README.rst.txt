:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-unicode-utf8'
.. highlight: bash

perl-unicode-utf8
=================

.. conda:recipe:: perl-unicode-utf8
   :replaces_section_title:
   :noindex:

   Encoding and decoding of UTF\-8 encoding form

   :homepage: http://metacpan.org/pod/Unicode::UTF8
   :license: perl_5
   :recipe: /`perl-unicode-utf8 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-utf8>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-utf8/meta.yaml>`_

   


.. conda:package:: perl-unicode-utf8

   |downloads_perl-unicode-utf8| |docker_perl-unicode-utf8|

   :versions:
      
      

      ``0.62-2``,  ``0.62-1``,  ``0.62-0``

      

   
   :depends libcxx: ``>=11.1.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-xsloader: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-unicode-utf8

   and update with::

      conda update perl-unicode-utf8

   or use the docker container::

      docker pull quay.io/biocontainers/perl-unicode-utf8:<tag>

   (see `perl-unicode-utf8/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-unicode-utf8| image:: https://img.shields.io/conda/dn/bioconda/perl-unicode-utf8.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-unicode-utf8
   :alt:   (downloads)
.. |docker_perl-unicode-utf8| image:: https://quay.io/repository/biocontainers/perl-unicode-utf8/status
   :target: https://quay.io/repository/biocontainers/perl-unicode-utf8
.. _`perl-unicode-utf8/tags`: https://quay.io/repository/biocontainers/perl-unicode-utf8?tab=tags


.. raw:: html

    <script>
        var package = "perl-unicode-utf8";
        var versions = ["0.62","0.62","0.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-unicode-utf8/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-unicode-utf8/README.html