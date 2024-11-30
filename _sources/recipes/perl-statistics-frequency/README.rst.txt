:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-frequency'
.. highlight: bash

perl-statistics-frequency
=========================

.. conda:recipe:: perl-statistics-frequency
   :replaces_section_title:
   :noindex:

   simple counting of elements

   :homepage: http://metacpan.org/pod/Statistics::Frequency
   :license: perl_5
   :recipe: /`perl-statistics-frequency <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-frequency>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-frequency/meta.yaml>`_

   


.. conda:package:: perl-statistics-frequency

   |downloads_perl-statistics-frequency| |docker_perl-statistics-frequency|

   :versions:
      
      

      ``0.04-3``,  ``0.04-2``,  ``0.04-1``

      

   
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

      mamba install perl-statistics-frequency

   and update with::

      mamba update perl-statistics-frequency

  To create a new environment, run::

      mamba create --name myenvname perl-statistics-frequency

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-statistics-frequency:<tag>

   (see `perl-statistics-frequency/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-statistics-frequency| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-frequency.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-statistics-frequency
   :alt:   (downloads)
.. |docker_perl-statistics-frequency| image:: https://quay.io/repository/biocontainers/perl-statistics-frequency/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-frequency
.. _`perl-statistics-frequency/tags`: https://quay.io/repository/biocontainers/perl-statistics-frequency?tab=tags


.. raw:: html

    <script>
        var package = "perl-statistics-frequency";
        var versions = ["0.04","0.04","0.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-frequency/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-frequency/README.html