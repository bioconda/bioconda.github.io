:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-algorithm-dependency'
.. highlight: bash

perl-algorithm-dependency
=========================

.. conda:recipe:: perl-algorithm-dependency
   :replaces_section_title:
   :noindex:

   Base class for implementing various dependency trees

   :homepage: http://metacpan.org/pod/Algorithm::Dependency
   :license: perl_5
   :recipe: /`perl-algorithm-dependency <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-dependency>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-dependency/meta.yaml>`_

   


.. conda:package:: perl-algorithm-dependency

   |downloads_perl-algorithm-dependency| |docker_perl-algorithm-dependency|

   :versions:
      
      

      ``1.112-0``,  ``1.111-1``,  ``1.111-0``,  ``1.110-2``,  ``1.110-1``,  ``1.110-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-params-util: ``>=0.31``
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

      mamba install perl-algorithm-dependency

   and update with::

      mamba update perl-algorithm-dependency

  To create a new environment, run::

      mamba create --name myenvname perl-algorithm-dependency

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-algorithm-dependency:<tag>

   (see `perl-algorithm-dependency/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-algorithm-dependency| image:: https://img.shields.io/conda/dn/bioconda/perl-algorithm-dependency.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-algorithm-dependency
   :alt:   (downloads)
.. |docker_perl-algorithm-dependency| image:: https://quay.io/repository/biocontainers/perl-algorithm-dependency/status
   :target: https://quay.io/repository/biocontainers/perl-algorithm-dependency
.. _`perl-algorithm-dependency/tags`: https://quay.io/repository/biocontainers/perl-algorithm-dependency?tab=tags


.. raw:: html

    <script>
        var package = "perl-algorithm-dependency";
        var versions = ["1.112","1.111","1.111","1.110","1.110"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-algorithm-dependency/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-algorithm-dependency/README.html