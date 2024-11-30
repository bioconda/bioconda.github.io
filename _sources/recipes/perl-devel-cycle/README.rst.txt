:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-cycle'
.. highlight: bash

perl-devel-cycle
================

.. conda:recipe:: perl-devel-cycle
   :replaces_section_title:
   :noindex:

   Find memory cycles in objects

   :homepage: http://metacpan.org/pod/Devel::Cycle
   :license: unknown
   :recipe: /`perl-devel-cycle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-cycle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-cycle/meta.yaml>`_

   


.. conda:package:: perl-devel-cycle

   |downloads_perl-devel-cycle| |docker_perl-devel-cycle|

   :versions:
      
      

      ``1.12-1``,  ``1.12-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-devel-cycle

   and update with::

      mamba update perl-devel-cycle

  To create a new environment, run::

      mamba create --name myenvname perl-devel-cycle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-devel-cycle:<tag>

   (see `perl-devel-cycle/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-cycle| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-cycle.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-cycle
   :alt:   (downloads)
.. |docker_perl-devel-cycle| image:: https://quay.io/repository/biocontainers/perl-devel-cycle/status
   :target: https://quay.io/repository/biocontainers/perl-devel-cycle
.. _`perl-devel-cycle/tags`: https://quay.io/repository/biocontainers/perl-devel-cycle?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-cycle";
        var versions = ["1.12","1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-cycle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-cycle/README.html