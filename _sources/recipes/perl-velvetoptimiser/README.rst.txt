:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-velvetoptimiser'
.. highlight: bash

perl-velvetoptimiser
====================

.. conda:recipe:: perl-velvetoptimiser
   :replaces_section_title:
   :noindex:

   Automatically optimise three of Velvet\'s assembly parameters.

   :homepage: https://github.com/tseemann/VelvetOptimiser
   :license: GPLv2
   :recipe: /`perl-velvetoptimiser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-velvetoptimiser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-velvetoptimiser/meta.yaml>`_
   :links: biotools: :biotools:`velvetoptimiser`

   


.. conda:package:: perl-velvetoptimiser

   |downloads_perl-velvetoptimiser| |docker_perl-velvetoptimiser|

   :versions:
      
      

      ``2.2.6-1``,  ``2.2.6-0``,  ``2.2.5-1``,  ``2.2.5-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl: ``>=1.7``
   :depends velvet: ``>=0.7.51``
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

      mamba install perl-velvetoptimiser

   and update with::

      mamba update perl-velvetoptimiser

  To create a new environment, run::

      mamba create --name myenvname perl-velvetoptimiser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-velvetoptimiser:<tag>

   (see `perl-velvetoptimiser/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-velvetoptimiser| image:: https://img.shields.io/conda/dn/bioconda/perl-velvetoptimiser.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-velvetoptimiser
   :alt:   (downloads)
.. |docker_perl-velvetoptimiser| image:: https://quay.io/repository/biocontainers/perl-velvetoptimiser/status
   :target: https://quay.io/repository/biocontainers/perl-velvetoptimiser
.. _`perl-velvetoptimiser/tags`: https://quay.io/repository/biocontainers/perl-velvetoptimiser?tab=tags


.. raw:: html

    <script>
        var package = "perl-velvetoptimiser";
        var versions = ["2.2.6","2.2.6","2.2.5","2.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-velvetoptimiser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-velvetoptimiser/README.html