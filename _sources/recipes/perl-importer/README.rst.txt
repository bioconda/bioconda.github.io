:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-importer'
.. highlight: bash

perl-importer
=============

.. conda:recipe:: perl-importer
   :replaces_section_title:
   :noindex:

   Alternative but compatible interface to modules that export symbols.

   :homepage: http://metacpan.org/pod/Importer
   :license: perl_5
   :recipe: /`perl-importer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-importer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-importer/meta.yaml>`_

   


.. conda:package:: perl-importer

   |downloads_perl-importer| |docker_perl-importer|

   :versions:
      
      

      ``0.025-2``,  ``0.025-1``,  ``0.025-0``,  ``0.024-1``,  ``0.024-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-importer

   and update with::

      conda update perl-importer

   or use the docker container::

      docker pull quay.io/biocontainers/perl-importer:<tag>

   (see `perl-importer/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-importer| image:: https://img.shields.io/conda/dn/bioconda/perl-importer.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-importer
   :alt:   (downloads)
.. |docker_perl-importer| image:: https://quay.io/repository/biocontainers/perl-importer/status
   :target: https://quay.io/repository/biocontainers/perl-importer
.. _`perl-importer/tags`: https://quay.io/repository/biocontainers/perl-importer?tab=tags


.. raw:: html

    <script>
        var package = "perl-importer";
        var versions = ["0.025","0.025","0.025","0.024","0.024"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-importer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-importer/README.html