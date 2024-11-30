:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-classapi'
.. highlight: bash

perl-test-classapi
==================

.. conda:recipe:: perl-test-classapi
   :replaces_section_title:
   :noindex:

   Provides basic first\-pass API testing for large class trees

   :homepage: https://github.com/karenetheridge/Test-ClassAPI
   :license: perl_5
   :recipe: /`perl-test-classapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-classapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-classapi/meta.yaml>`_

   


.. conda:package:: perl-test-classapi

   |downloads_perl-test-classapi| |docker_perl-test-classapi|

   :versions:
      
      

      ``1.07-2``,  ``1.07-1``,  ``1.07-0``,  ``1.06-1``,  ``1.06-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-class-inspector: 
   :depends perl-config-tiny: 
   :depends perl-params-util: 
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

      mamba install perl-test-classapi

   and update with::

      mamba update perl-test-classapi

  To create a new environment, run::

      mamba create --name myenvname perl-test-classapi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-classapi:<tag>

   (see `perl-test-classapi/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-classapi| image:: https://img.shields.io/conda/dn/bioconda/perl-test-classapi.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-classapi
   :alt:   (downloads)
.. |docker_perl-test-classapi| image:: https://quay.io/repository/biocontainers/perl-test-classapi/status
   :target: https://quay.io/repository/biocontainers/perl-test-classapi
.. _`perl-test-classapi/tags`: https://quay.io/repository/biocontainers/perl-test-classapi?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-classapi";
        var versions = ["1.07","1.07","1.07","1.06","1.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-classapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-classapi/README.html