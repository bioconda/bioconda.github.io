:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-ixhash'
.. highlight: bash

perl-tie-ixhash
===============

.. conda:recipe:: perl-tie-ixhash
   :replaces_section_title:
   :noindex:

   ordered associative arrays for Perl

   :homepage: http://metacpan.org/pod/Tie-IxHash
   :license: perl_5
   :recipe: /`perl-tie-ixhash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-ixhash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-ixhash/meta.yaml>`_

   


.. conda:package:: perl-tie-ixhash

   |downloads_perl-tie-ixhash| |docker_perl-tie-ixhash|

   :versions:
      
      

      ``1.23-3``,  ``1.23-2``,  ``1.23-1``,  ``1.23-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-tie-ixhash

   and update with::

      mamba update perl-tie-ixhash

  To create a new environment, run::

      mamba create --name myenvname perl-tie-ixhash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-tie-ixhash:<tag>

   (see `perl-tie-ixhash/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tie-ixhash| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-ixhash.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-ixhash
   :alt:   (downloads)
.. |docker_perl-tie-ixhash| image:: https://quay.io/repository/biocontainers/perl-tie-ixhash/status
   :target: https://quay.io/repository/biocontainers/perl-tie-ixhash
.. _`perl-tie-ixhash/tags`: https://quay.io/repository/biocontainers/perl-tie-ixhash?tab=tags


.. raw:: html

    <script>
        var package = "perl-tie-ixhash";
        var versions = ["1.23","1.23","1.23","1.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-ixhash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-ixhash/README.html