:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-exporter-tidy'
.. highlight: bash

perl-exporter-tidy
==================

.. conda:recipe:: perl-exporter-tidy
   :replaces_section_title:
   :noindex:

   Another way of exporting symbols

   :homepage: http://metacpan.org/pod/Exporter-Tidy
   :license: unknown
   :recipe: /`perl-exporter-tidy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exporter-tidy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exporter-tidy/meta.yaml>`_

   


.. conda:package:: perl-exporter-tidy

   |downloads_perl-exporter-tidy| |docker_perl-exporter-tidy|

   :versions:
      
      

      ``0.08-2``,  ``0.08-1``,  ``0.08-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-exporter-tidy

   and update with::

      conda update perl-exporter-tidy

   or use the docker container::

      docker pull quay.io/biocontainers/perl-exporter-tidy:<tag>

   (see `perl-exporter-tidy/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-exporter-tidy| image:: https://img.shields.io/conda/dn/bioconda/perl-exporter-tidy.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-exporter-tidy
   :alt:   (downloads)
.. |docker_perl-exporter-tidy| image:: https://quay.io/repository/biocontainers/perl-exporter-tidy/status
   :target: https://quay.io/repository/biocontainers/perl-exporter-tidy
.. _`perl-exporter-tidy/tags`: https://quay.io/repository/biocontainers/perl-exporter-tidy?tab=tags


.. raw:: html

    <script>
        var package = "perl-exporter-tidy";
        var versions = ["0.08","0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-exporter-tidy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-exporter-tidy/README.html