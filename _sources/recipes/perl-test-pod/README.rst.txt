:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-pod'
.. highlight: bash

perl-test-pod
=============

.. conda:recipe:: perl-test-pod
   :replaces_section_title:
   :noindex:

   check for POD errors in files

   :homepage: http://search.cpan.org/dist/Test-Pod/
   :license: perl_5
   :recipe: /`perl-test-pod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-pod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-pod/meta.yaml>`_

   


.. conda:package:: perl-test-pod

   |downloads_perl-test-pod| |docker_perl-test-pod|

   :versions:
      
      

      ``1.52-1``,  ``1.52-0``,  ``1.51-2``,  ``1.51-1``,  ``1.51-0``

      

   
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

      mamba install perl-test-pod

   and update with::

      mamba update perl-test-pod

  To create a new environment, run::

      mamba create --name myenvname perl-test-pod

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-pod:<tag>

   (see `perl-test-pod/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-pod| image:: https://img.shields.io/conda/dn/bioconda/perl-test-pod.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-pod
   :alt:   (downloads)
.. |docker_perl-test-pod| image:: https://quay.io/repository/biocontainers/perl-test-pod/status
   :target: https://quay.io/repository/biocontainers/perl-test-pod
.. _`perl-test-pod/tags`: https://quay.io/repository/biocontainers/perl-test-pod?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-pod";
        var versions = ["1.52","1.52","1.51","1.51","1.51"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-pod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-pod/README.html