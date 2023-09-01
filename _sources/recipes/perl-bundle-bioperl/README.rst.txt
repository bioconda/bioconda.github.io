:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bundle-bioperl'
.. highlight: bash

perl-bundle-bioperl
===================

.. conda:recipe:: perl-bundle-bioperl
   :replaces_section_title:
   :noindex:

   A bundle to install external CPAN modules used by BioPerl 1.5.2

   :homepage: http://metacpan.org/pod/Bundle::BioPerl
   :license: unknown
   :recipe: /`perl-bundle-bioperl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bundle-bioperl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bundle-bioperl/meta.yaml>`_

   


.. conda:package:: perl-bundle-bioperl

   |downloads_perl-bundle-bioperl| |docker_perl-bundle-bioperl|

   :versions:
      
      

      ``2.1.9-1``,  ``2.1.9-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-bundle-bioperl

   and update with::

      mamba update perl-bundle-bioperl

  To create a new environment, run::

      mamba create --name myenvname perl-bundle-bioperl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bundle-bioperl:<tag>

   (see `perl-bundle-bioperl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bundle-bioperl| image:: https://img.shields.io/conda/dn/bioconda/perl-bundle-bioperl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bundle-bioperl
   :alt:   (downloads)
.. |docker_perl-bundle-bioperl| image:: https://quay.io/repository/biocontainers/perl-bundle-bioperl/status
   :target: https://quay.io/repository/biocontainers/perl-bundle-bioperl
.. _`perl-bundle-bioperl/tags`: https://quay.io/repository/biocontainers/perl-bundle-bioperl?tab=tags


.. raw:: html

    <script>
        var package = "perl-bundle-bioperl";
        var versions = ["2.1.9","2.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bundle-bioperl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bundle-bioperl/README.html