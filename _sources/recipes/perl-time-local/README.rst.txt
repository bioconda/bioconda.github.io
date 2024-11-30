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
      
      

      ``1.2300-0``,  ``1.35-0``,  ``1.30-0``,  ``1.28-2``,  ``1.28-1``,  ``1.28-0``

      

   
   :depends perl: ``5.22.0*``
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

      mamba install perl-time-local

   and update with::

      mamba update perl-time-local

  To create a new environment, run::

      mamba create --name myenvname perl-time-local

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.2300","1.35","1.30","1.28","1.28"];
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