:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-core'
.. highlight: bash

perl-ensembl-core
=================

.. conda:recipe:: perl-ensembl-core
   :replaces_section_title:
   :noindex:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-core/meta.yaml>`_

   


.. conda:package:: perl-ensembl-core

   |downloads_perl-ensembl-core| |docker_perl-ensembl-core|

   :versions:
      
      

      ``98-2``,  ``98-1``,  ``98-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-list-moreutils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ensembl-core

   and update with::

      conda update perl-ensembl-core

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ensembl-core:<tag>

   (see `perl-ensembl-core/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ensembl-core| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-core.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-core
   :alt:   (downloads)
.. |docker_perl-ensembl-core| image:: https://quay.io/repository/biocontainers/perl-ensembl-core/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-core
.. _`perl-ensembl-core/tags`: https://quay.io/repository/biocontainers/perl-ensembl-core?tab=tags


.. raw:: html

    <script>
        var package = "perl-ensembl-core";
        var versions = ["98","98","98"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-core/README.html