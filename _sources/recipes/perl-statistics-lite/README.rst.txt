:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-lite'
.. highlight: bash

perl-statistics-lite
====================

.. conda:recipe:: perl-statistics-lite
   :replaces_section_title:
   :noindex:

   Small stats stuff.

   :homepage: http://metacpan.org/pod/Statistics-Lite
   :license: perl_5
   :recipe: /`perl-statistics-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-lite/meta.yaml>`_

   


.. conda:package:: perl-statistics-lite

   |downloads_perl-statistics-lite| |docker_perl-statistics-lite|

   :versions:
      
      

      ``3.62-2``,  ``3.62-1``,  ``3.62-0``

      

   
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

      mamba install perl-statistics-lite

   and update with::

      mamba update perl-statistics-lite

  To create a new environment, run::

      mamba create --name myenvname perl-statistics-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-statistics-lite:<tag>

   (see `perl-statistics-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-statistics-lite| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-statistics-lite
   :alt:   (downloads)
.. |docker_perl-statistics-lite| image:: https://quay.io/repository/biocontainers/perl-statistics-lite/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-lite
.. _`perl-statistics-lite/tags`: https://quay.io/repository/biocontainers/perl-statistics-lite?tab=tags


.. raw:: html

    <script>
        var package = "perl-statistics-lite";
        var versions = ["3.62","3.62","3.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-lite/README.html