:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-url-encode'
.. highlight: bash

perl-url-encode
===============

.. conda:recipe:: perl-url-encode
   :replaces_section_title:
   :noindex:

   Encoding and decoding of application\/x\-www\-form\-urlencoded encoding.

   :homepage: http://metacpan.org/pod/URL-Encode
   :license: perl_5
   :recipe: /`perl-url-encode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-url-encode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-url-encode/meta.yaml>`_

   


.. conda:package:: perl-url-encode

   |downloads_perl-url-encode| |docker_perl-url-encode|

   :versions:
      
      

      ``0.03-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-url-encode

   and update with::

      conda update perl-url-encode

   or use the docker container::

      docker pull quay.io/biocontainers/perl-url-encode:<tag>

   (see `perl-url-encode/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-url-encode| image:: https://img.shields.io/conda/dn/bioconda/perl-url-encode.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-url-encode
   :alt:   (downloads)
.. |docker_perl-url-encode| image:: https://quay.io/repository/biocontainers/perl-url-encode/status
   :target: https://quay.io/repository/biocontainers/perl-url-encode
.. _`perl-url-encode/tags`: https://quay.io/repository/biocontainers/perl-url-encode?tab=tags


.. raw:: html

    <script>
        var package = "perl-url-encode";
        var versions = ["0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-url-encode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-url-encode/README.html