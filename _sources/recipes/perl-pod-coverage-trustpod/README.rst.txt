:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-coverage-trustpod'
.. highlight: bash

perl-pod-coverage-trustpod
==========================

.. conda:recipe:: perl-pod-coverage-trustpod
   :replaces_section_title:
   :noindex:

   allow a module\'s pod to contain Pod\:\:Coverage hints

   :homepage: https://github.com/rjbs/Pod-Coverage-TrustPod
   :license: perl_5
   :recipe: /`perl-pod-coverage-trustpod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-coverage-trustpod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-coverage-trustpod/meta.yaml>`_

   


.. conda:package:: perl-pod-coverage-trustpod

   |downloads_perl-pod-coverage-trustpod| |docker_perl-pod-coverage-trustpod|

   :versions:
      
      

      ``0.100006-0``,  ``0.100005-0``,  ``0.100003-1``,  ``0.100003-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-base: 
   :depends perl-extutils-makemaker: 
   :depends perl-lib: 
   :depends perl-pod-coverage: 
   :depends perl-pod-eventual: 
   :depends perl-pod-parser: 
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

      mamba install perl-pod-coverage-trustpod

   and update with::

      mamba update perl-pod-coverage-trustpod

  To create a new environment, run::

      mamba create --name myenvname perl-pod-coverage-trustpod

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-pod-coverage-trustpod:<tag>

   (see `perl-pod-coverage-trustpod/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-coverage-trustpod| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-coverage-trustpod.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-coverage-trustpod
   :alt:   (downloads)
.. |docker_perl-pod-coverage-trustpod| image:: https://quay.io/repository/biocontainers/perl-pod-coverage-trustpod/status
   :target: https://quay.io/repository/biocontainers/perl-pod-coverage-trustpod
.. _`perl-pod-coverage-trustpod/tags`: https://quay.io/repository/biocontainers/perl-pod-coverage-trustpod?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-coverage-trustpod";
        var versions = ["0.100006","0.100005","0.100003","0.100003"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-coverage-trustpod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-coverage-trustpod/README.html