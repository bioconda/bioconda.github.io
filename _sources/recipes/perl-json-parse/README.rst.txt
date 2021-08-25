:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json-parse'
.. highlight: bash

perl-json-parse
===============

.. conda:recipe:: perl-json-parse
   :replaces_section_title:
   :noindex:

   Read JSON into a Perl variable

   :homepage: http://metacpan.org/pod/JSON::Parse
   :license: perl_5
   :recipe: /`perl-json-parse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-parse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-parse/meta.yaml>`_

   


.. conda:package:: perl-json-parse

   |downloads_perl-json-parse| |docker_perl-json-parse|

   :versions:
      
      

      ``0.55-1``,  ``0.55-0``,  ``0.49-1``,  ``0.49-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-json-parse

   and update with::

      conda update perl-json-parse

   or use the docker container::

      docker pull quay.io/biocontainers/perl-json-parse:<tag>

   (see `perl-json-parse/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-json-parse| image:: https://img.shields.io/conda/dn/bioconda/perl-json-parse.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json-parse
   :alt:   (downloads)
.. |docker_perl-json-parse| image:: https://quay.io/repository/biocontainers/perl-json-parse/status
   :target: https://quay.io/repository/biocontainers/perl-json-parse
.. _`perl-json-parse/tags`: https://quay.io/repository/biocontainers/perl-json-parse?tab=tags


.. raw:: html

    <script>
        var package = "perl-json-parse";
        var versions = ["0.55","0.55","0.49","0.49"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-parse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-parse/README.html