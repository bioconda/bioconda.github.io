:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-coverage'
.. highlight: bash

perl-pod-coverage
=================

.. conda:recipe:: perl-pod-coverage/0.23
   :replaces_section_title:
   :noindex:

   Checks if the documentation of a module is comprehensive

   :homepage: http://metacpan.org/pod/Pod::Coverage
   :license: unknown
   :recipe: /`perl-pod-coverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-coverage>`_/`0.23 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-coverage/0.23>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-coverage/0.23/meta.yaml>`_

   


.. conda:package:: perl-pod-coverage

   |downloads_perl-pod-coverage| |docker_perl-pod-coverage|

   :versions:
      
      

      ``0.23-4``,  ``0.23-3``,  ``0.23-2``,  ``0.23-1``,  ``0.23-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-devel-symdump: 
   :depends perl-pod-parser: 
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

      mamba install perl-pod-coverage

   and update with::

      mamba update perl-pod-coverage

  To create a new environment, run::

      mamba create --name myenvname perl-pod-coverage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-pod-coverage:<tag>

   (see `perl-pod-coverage/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-coverage| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-coverage.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-coverage
   :alt:   (downloads)
.. |docker_perl-pod-coverage| image:: https://quay.io/repository/biocontainers/perl-pod-coverage/status
   :target: https://quay.io/repository/biocontainers/perl-pod-coverage
.. _`perl-pod-coverage/tags`: https://quay.io/repository/biocontainers/perl-pod-coverage?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-coverage";
        var versions = ["0.23","0.23","0.23","0.23","0.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-coverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-coverage/README.html