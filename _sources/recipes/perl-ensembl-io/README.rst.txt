:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ensembl-io'
.. highlight: bash

perl-ensembl-io
===============

.. conda:recipe:: perl-ensembl-io
   :replaces_section_title:
   :noindex:

   The Ensembl Core Perl API and

   :homepage: https://www.ensembl.org/info/docs/api/index.html
   :license: apache_2_0
   :recipe: /`perl-ensembl-io <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-io>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ensembl-io/meta.yaml>`_

   


.. conda:package:: perl-ensembl-io

   |downloads_perl-ensembl-io| |docker_perl-ensembl-io|

   :versions:
      
      

      ``98-1``,  ``98-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-bigfile: 
   :depends perl-ensembl-core: 
   :depends perl-try-tiny: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-ensembl-io

   and update with::

      mamba update perl-ensembl-io

  To create a new environment, run::

      mamba create --name myenvname perl-ensembl-io

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-ensembl-io:<tag>

   (see `perl-ensembl-io/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ensembl-io| image:: https://img.shields.io/conda/dn/bioconda/perl-ensembl-io.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ensembl-io
   :alt:   (downloads)
.. |docker_perl-ensembl-io| image:: https://quay.io/repository/biocontainers/perl-ensembl-io/status
   :target: https://quay.io/repository/biocontainers/perl-ensembl-io
.. _`perl-ensembl-io/tags`: https://quay.io/repository/biocontainers/perl-ensembl-io?tab=tags


.. raw:: html

    <script>
        var package = "perl-ensembl-io";
        var versions = ["98","98"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ensembl-io/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ensembl-io/README.html