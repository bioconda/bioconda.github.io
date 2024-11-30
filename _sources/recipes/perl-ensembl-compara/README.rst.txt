:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-compara'
.. highlight: bash

perl-ensembl-compara
====================

.. conda:recipe:: perl-ensembl-compara
   :replaces_section_title:
   :noindex:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-compara <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-compara>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-compara/meta.yaml>`_

   


.. conda:package:: perl-ensembl-compara

   |downloads_perl-ensembl-compara| |docker_perl-ensembl-compara|

   :versions:
      
      

      ``98-1``,  ``98-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl: 
   :depends perl-capture-tiny: 
   :depends perl-data-predicate: 
   :depends perl-ensembl-core: 
   :depends perl-html-template: 
   :depends perl-json: 
   :depends perl-list-compare: 
   :depends perl-lwp-simple: 
   :depends perl-namespace-autoclean: 
   :depends perl-number-format: 
   :depends perl-parse-recdescent: 
   :depends perl-set-intervaltree: 
   :depends perl-statistics-descriptive: 
   :depends perl-text-csv: 
   :depends perl-xml-writer: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-ensembl-compara

   and update with::

      mamba update perl-ensembl-compara

  To create a new environment, run::

      mamba create --name myenvname perl-ensembl-compara

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-ensembl-compara:<tag>

   (see `perl-ensembl-compara/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ensembl-compara| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-compara.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-compara
   :alt:   (downloads)
.. |docker_perl-ensembl-compara| image:: https://quay.io/repository/biocontainers/perl-ensembl-compara/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-compara
.. _`perl-ensembl-compara/tags`: https://quay.io/repository/biocontainers/perl-ensembl-compara?tab=tags


.. raw:: html

    <script>
        var package = "perl-ensembl-compara";
        var versions = ["98","98"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-compara/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-compara/README.html