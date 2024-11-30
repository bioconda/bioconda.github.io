:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-try-tiny-retry'
.. highlight: bash

perl-try-tiny-retry
===================

.. conda:recipe:: perl-try-tiny-retry
   :replaces_section_title:
   :noindex:

   Just like Try\:\:Tiny\, but with retry instead of try.

   :homepage: https://github.com/dagolden/Try-Tiny-Retry
   :license: Apache-2.0
   :recipe: /`perl-try-tiny-retry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-try-tiny-retry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-try-tiny-retry/meta.yaml>`_

   


.. conda:package:: perl-try-tiny-retry

   |downloads_perl-try-tiny-retry| |docker_perl-try-tiny-retry|

   :versions:
      
      

      ``0.004-1``,  ``0.004-0``,  ``0.002-1``,  ``0.002-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-try-tiny: 
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

      mamba install perl-try-tiny-retry

   and update with::

      mamba update perl-try-tiny-retry

  To create a new environment, run::

      mamba create --name myenvname perl-try-tiny-retry

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-try-tiny-retry:<tag>

   (see `perl-try-tiny-retry/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-try-tiny-retry| image:: https://img.shields.io/conda/dn/bioconda/perl-try-tiny-retry.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-try-tiny-retry
   :alt:   (downloads)
.. |docker_perl-try-tiny-retry| image:: https://quay.io/repository/biocontainers/perl-try-tiny-retry/status
   :target: https://quay.io/repository/biocontainers/perl-try-tiny-retry
.. _`perl-try-tiny-retry/tags`: https://quay.io/repository/biocontainers/perl-try-tiny-retry?tab=tags


.. raw:: html

    <script>
        var package = "perl-try-tiny-retry";
        var versions = ["0.004","0.004","0.002","0.002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-try-tiny-retry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-try-tiny-retry/README.html