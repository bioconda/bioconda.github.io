:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-caseresampling'
.. highlight: bash

perl-statistics-caseresampling
==============================

.. conda:recipe:: perl-statistics-caseresampling/0.15
   :replaces_section_title:
   :noindex:

   Efficient resampling and calculation of medians with confidence intervals

   :homepage: http://metacpan.org/pod/Statistics::CaseResampling
   :license: unknown
   :recipe: /`perl-statistics-caseresampling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-caseresampling>`_/`0.15 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-caseresampling/0.15>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-caseresampling/0.15/meta.yaml>`_

   


.. conda:package:: perl-statistics-caseresampling

   |downloads_perl-statistics-caseresampling| |docker_perl-statistics-caseresampling|

   :versions:
      
      

      ``0.15-4``,  ``0.15-3``,  ``0.15-2``,  ``0.15-1``,  ``0.15-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-statistics-caseresampling

   and update with::

      mamba update perl-statistics-caseresampling

  To create a new environment, run::

      mamba create --name myenvname perl-statistics-caseresampling

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-statistics-caseresampling:<tag>

   (see `perl-statistics-caseresampling/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-statistics-caseresampling| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-caseresampling.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-statistics-caseresampling
   :alt:   (downloads)
.. |docker_perl-statistics-caseresampling| image:: https://quay.io/repository/biocontainers/perl-statistics-caseresampling/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-caseresampling
.. _`perl-statistics-caseresampling/tags`: https://quay.io/repository/biocontainers/perl-statistics-caseresampling?tab=tags


.. raw:: html

    <script>
        var package = "perl-statistics-caseresampling";
        var versions = ["0.15","0.15","0.15","0.15","0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-caseresampling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-caseresampling/README.html