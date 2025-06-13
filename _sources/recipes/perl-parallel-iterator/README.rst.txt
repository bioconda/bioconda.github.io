:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-parallel-iterator'
.. highlight: bash

perl-parallel-iterator
======================

.. conda:recipe:: perl-parallel-iterator
   :replaces_section_title:
   :noindex:

   Simple parallel execution.

   :homepage: https://metacpan.org/pod/Parallel::Iterator
   :license: perl_5
   :recipe: /`perl-parallel-iterator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-iterator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-iterator/meta.yaml>`_

   


.. conda:package:: perl-parallel-iterator

   |downloads_perl-parallel-iterator| |docker_perl-parallel-iterator|

   :versions:
      
      

      ``1.002-0``,  ``1.00-1``,  ``1.00-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-storable: 
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

      mamba install perl-parallel-iterator

   and update with::

      mamba update perl-parallel-iterator

  To create a new environment, run::

      mamba create --name myenvname perl-parallel-iterator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-parallel-iterator:<tag>

   (see `perl-parallel-iterator/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-parallel-iterator| image:: https://img.shields.io/conda/dn/bioconda/perl-parallel-iterator.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-parallel-iterator
   :alt:   (downloads)
.. |docker_perl-parallel-iterator| image:: https://quay.io/repository/biocontainers/perl-parallel-iterator/status
   :target: https://quay.io/repository/biocontainers/perl-parallel-iterator
.. _`perl-parallel-iterator/tags`: https://quay.io/repository/biocontainers/perl-parallel-iterator?tab=tags


.. raw:: html

    <script>
        var package = "perl-parallel-iterator";
        var versions = ["1.002","1.00","1.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-parallel-iterator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-parallel-iterator/README.html