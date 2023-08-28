:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-log-any'
.. highlight: bash

perl-log-any
============

.. conda:recipe:: perl-log-any
   :replaces_section_title:
   :noindex:

   Bringing loggers and listeners together

   :homepage: https://github.com/preaction/Log-Any
   :license: perl_5
   :recipe: /`perl-log-any <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-log-any>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-log-any/meta.yaml>`_

   


.. conda:package:: perl-log-any

   |downloads_perl-log-any| |docker_perl-log-any|

   :versions:
      
      

      ``1.710-0``,  ``1.045-2``,  ``1.045-1``,  ``1.045-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-apache-test: 
   :depends perl-test-simple: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-log-any

   and update with::

      mamba update perl-log-any

  To create a new environment, run::

      mamba create --name myenvname perl-log-any

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-log-any:<tag>

   (see `perl-log-any/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-log-any| image:: https://img.shields.io/conda/dn/bioconda/perl-log-any.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-log-any
   :alt:   (downloads)
.. |docker_perl-log-any| image:: https://quay.io/repository/biocontainers/perl-log-any/status
   :target: https://quay.io/repository/biocontainers/perl-log-any
.. _`perl-log-any/tags`: https://quay.io/repository/biocontainers/perl-log-any?tab=tags


.. raw:: html

    <script>
        var package = "perl-log-any";
        var versions = ["1.710","1.045","1.045","1.045"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-log-any/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-log-any/README.html