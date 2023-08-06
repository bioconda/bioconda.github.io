:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-uri-nested'
.. highlight: bash

perl-uri-nested
===============

.. conda:recipe:: perl-uri-nested
   :replaces_section_title:
   :noindex:

   Nested URIs

   :homepage: https://metacpan.org/release/URI-Nested/
   :license: perl_5
   :recipe: /`perl-uri-nested <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-uri-nested>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-uri-nested/meta.yaml>`_

   


.. conda:package:: perl-uri-nested

   |downloads_perl-uri-nested| |docker_perl-uri-nested|

   :versions:
      
      

      ``0.10-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-uri: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-uri-nested

   and update with::

      conda update perl-uri-nested

   or use the docker container::

      docker pull quay.io/biocontainers/perl-uri-nested:<tag>

   (see `perl-uri-nested/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-uri-nested| image:: https://img.shields.io/conda/dn/bioconda/perl-uri-nested.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-uri-nested
   :alt:   (downloads)
.. |docker_perl-uri-nested| image:: https://quay.io/repository/biocontainers/perl-uri-nested/status
   :target: https://quay.io/repository/biocontainers/perl-uri-nested
.. _`perl-uri-nested/tags`: https://quay.io/repository/biocontainers/perl-uri-nested?tab=tags


.. raw:: html

    <script>
        var package = "perl-uri-nested";
        var versions = ["0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-uri-nested/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-uri-nested/README.html