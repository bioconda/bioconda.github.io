:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-subcalls'
.. highlight: bash

perl-test-subcalls
==================

.. conda:recipe:: perl-test-subcalls/1.10
   :replaces_section_title:
   :noindex:

   Track the number of times subs are called

   :homepage: https://github.com/karenetheridge/Test-SubCalls
   :license: perl_5
   :recipe: /`perl-test-subcalls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-subcalls>`_/`1.10 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-subcalls/1.10>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-subcalls/1.10/meta.yaml>`_

   


.. conda:package:: perl-test-subcalls

   |downloads_perl-test-subcalls| |docker_perl-test-subcalls|

   :versions:
      
      

      ``1.10-3``,  ``1.10-2``,  ``1.10-1``,  ``1.10-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-exporter: 
   :depends perl-hook-lexwrap: 
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

      mamba install perl-test-subcalls

   and update with::

      mamba update perl-test-subcalls

  To create a new environment, run::

      mamba create --name myenvname perl-test-subcalls

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-subcalls:<tag>

   (see `perl-test-subcalls/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-subcalls| image:: https://img.shields.io/conda/dn/bioconda/perl-test-subcalls.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-subcalls
   :alt:   (downloads)
.. |docker_perl-test-subcalls| image:: https://quay.io/repository/biocontainers/perl-test-subcalls/status
   :target: https://quay.io/repository/biocontainers/perl-test-subcalls
.. _`perl-test-subcalls/tags`: https://quay.io/repository/biocontainers/perl-test-subcalls?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-subcalls";
        var versions = ["1.10","1.10","1.10","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-subcalls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-subcalls/README.html