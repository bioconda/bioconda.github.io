:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-distributions'
.. highlight: bash

perl-statistics-distributions
=============================

.. conda:recipe:: perl-statistics-distributions
   :replaces_section_title:
   :noindex:

   Perl module for calculating critical values and upper probabilities of common statistical distributions

   :homepage: http://metacpan.org/pod/Statistics-Distributions
   :license: perl_5
   :recipe: /`perl-statistics-distributions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-distributions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-distributions/meta.yaml>`_

   


.. conda:package:: perl-statistics-distributions

   |downloads_perl-statistics-distributions| |docker_perl-statistics-distributions|

   :versions:
      
      

      ``1.02-2``,  ``1.02-1``,  ``1.02-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-statistics-distributions

   and update with::

      mamba update perl-statistics-distributions

  To create a new environment, run::

      mamba create --name myenvname perl-statistics-distributions

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-statistics-distributions:<tag>

   (see `perl-statistics-distributions/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-statistics-distributions| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-distributions.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-statistics-distributions
   :alt:   (downloads)
.. |docker_perl-statistics-distributions| image:: https://quay.io/repository/biocontainers/perl-statistics-distributions/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-distributions
.. _`perl-statistics-distributions/tags`: https://quay.io/repository/biocontainers/perl-statistics-distributions?tab=tags


.. raw:: html

    <script>
        var package = "perl-statistics-distributions";
        var versions = ["1.02","1.02","1.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-distributions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-distributions/README.html