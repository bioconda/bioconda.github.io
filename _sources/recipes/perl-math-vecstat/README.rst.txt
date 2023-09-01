:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-vecstat'
.. highlight: bash

perl-math-vecstat
=================

.. conda:recipe:: perl-math-vecstat
   :replaces_section_title:
   :noindex:

   Some basic numeric stats on vectors

   :homepage: http://metacpan.org/pod/Math-VecStat
   :license: unknown
   :recipe: /`perl-math-vecstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-vecstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-vecstat/meta.yaml>`_

   


.. conda:package:: perl-math-vecstat

   |downloads_perl-math-vecstat| |docker_perl-math-vecstat|

   :versions:
      
      

      ``0.08-2``,  ``0.08-1``,  ``0.08-0``

      

   
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

      mamba install perl-math-vecstat

   and update with::

      mamba update perl-math-vecstat

  To create a new environment, run::

      mamba create --name myenvname perl-math-vecstat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-vecstat:<tag>

   (see `perl-math-vecstat/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-vecstat| image:: https://img.shields.io/conda/dn/bioconda/perl-math-vecstat.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-vecstat
   :alt:   (downloads)
.. |docker_perl-math-vecstat| image:: https://quay.io/repository/biocontainers/perl-math-vecstat/status
   :target: https://quay.io/repository/biocontainers/perl-math-vecstat
.. _`perl-math-vecstat/tags`: https://quay.io/repository/biocontainers/perl-math-vecstat?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-vecstat";
        var versions = ["0.08","0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-vecstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-vecstat/README.html