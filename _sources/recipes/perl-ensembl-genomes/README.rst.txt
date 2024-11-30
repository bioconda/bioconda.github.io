:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-genomes'
.. highlight: bash

perl-ensembl-genomes
====================

.. conda:recipe:: perl-ensembl-genomes
   :replaces_section_title:
   :noindex:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-genomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-genomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-genomes/meta.yaml>`_

   


.. conda:package:: perl-ensembl-genomes

   |downloads_perl-ensembl-genomes| |docker_perl-ensembl-genomes|

   :versions:
      
      

      ``44-1``,  ``44-0``

      

   
   :depends perl: 
   :depends perl-ensembl-core: 
   :depends perl-list-moreutils: 
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

      mamba install perl-ensembl-genomes

   and update with::

      mamba update perl-ensembl-genomes

  To create a new environment, run::

      mamba create --name myenvname perl-ensembl-genomes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-ensembl-genomes:<tag>

   (see `perl-ensembl-genomes/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ensembl-genomes| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-genomes.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-genomes
   :alt:   (downloads)
.. |docker_perl-ensembl-genomes| image:: https://quay.io/repository/biocontainers/perl-ensembl-genomes/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-genomes
.. _`perl-ensembl-genomes/tags`: https://quay.io/repository/biocontainers/perl-ensembl-genomes?tab=tags


.. raw:: html

    <script>
        var package = "perl-ensembl-genomes";
        var versions = ["44","44"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-genomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-genomes/README.html