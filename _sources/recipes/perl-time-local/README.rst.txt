:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-time-local'
.. highlight: bash

perl-time-local
===============

.. conda:recipe:: perl-time-local
   :replaces_section_title:
   :noindex:

   Efficiently compute time from local and GMT time

   :homepage: http://metacpan.org/release/Time-Local
   :license: perl_5
   :recipe: /`perl-time-local <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-local>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-local/meta.yaml>`_

   


.. conda:package:: perl-time-local

   |downloads_perl-time-local| |docker_perl-time-local|

   :versions:
      
      

      ``1.2300-0``,  ``1.28-2``,  ``1.28-1``,  ``1.28-0``

      

   
   :depends perl: ``5.22.0*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-time-local

   and update with::

      conda update perl-time-local

   or use the docker container::

      docker pull quay.io/biocontainers/perl-time-local:<tag>

   (see `perl-time-local/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-time-local| image:: https://img.shields.io/conda/dn/bioconda/perl-time-local.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-time-local
   :alt:   (downloads)
.. |docker_perl-time-local| image:: https://quay.io/repository/biocontainers/perl-time-local/status
   :target: https://quay.io/repository/biocontainers/perl-time-local
.. _`perl-time-local/tags`: https://quay.io/repository/biocontainers/perl-time-local?tab=tags


.. raw:: html

    <script>
        var package = "perl-time-local";
        var versions = ["1.2300","1.28","1.28","1.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-time-local/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-time-local/README.html