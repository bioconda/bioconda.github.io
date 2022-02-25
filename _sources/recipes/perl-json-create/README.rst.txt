:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json-create'
.. highlight: bash

perl-json-create
================

.. conda:recipe:: perl-json-create
   :replaces_section_title:
   :noindex:

   fast\, minimal\, UTF\-8\-only serialization of data to JSON

   :homepage: http://metacpan.org/pod/JSON::Create
   :license: perl_5
   :recipe: /`perl-json-create <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-create>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-create/meta.yaml>`_

   


.. conda:package:: perl-json-create

   |downloads_perl-json-create| |docker_perl-json-create|

   :versions:
      
      

      ``0.35-1``,  ``0.35-0``,  ``0.24-3``,  ``0.24-2``,  ``0.24-1``,  ``0.24-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-json-parse: ``>=0.60``
   :depends perl-unicode-utf8: ``>=0.62``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-json-create

   and update with::

      conda update perl-json-create

   or use the docker container::

      docker pull quay.io/biocontainers/perl-json-create:<tag>

   (see `perl-json-create/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-json-create| image:: https://img.shields.io/conda/dn/bioconda/perl-json-create.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json-create
   :alt:   (downloads)
.. |docker_perl-json-create| image:: https://quay.io/repository/biocontainers/perl-json-create/status
   :target: https://quay.io/repository/biocontainers/perl-json-create
.. _`perl-json-create/tags`: https://quay.io/repository/biocontainers/perl-json-create?tab=tags


.. raw:: html

    <script>
        var package = "perl-json-create";
        var versions = ["0.35","0.35","0.24","0.24","0.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-create/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-create/README.html