:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-b-debug'
.. highlight: bash

perl-b-debug
============

.. conda:recipe:: perl-b-debug
   :replaces_section_title:
   :noindex:

   print debug info about ops

   :homepage: http://metacpan.org/pod/B::Debug
   :license: perl_5
   :recipe: /`perl-b-debug <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b-debug>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b-debug/meta.yaml>`_

   


.. conda:package:: perl-b-debug

   |downloads_perl-b-debug| |docker_perl-b-debug|

   :versions:
      
      

      ``1.26-1``,  ``1.26-0``

      

   
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

      mamba install perl-b-debug

   and update with::

      mamba update perl-b-debug

  To create a new environment, run::

      mamba create --name myenvname perl-b-debug

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-b-debug:<tag>

   (see `perl-b-debug/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-b-debug| image:: https://img.shields.io/conda/dn/bioconda/perl-b-debug.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-b-debug
   :alt:   (downloads)
.. |docker_perl-b-debug| image:: https://quay.io/repository/biocontainers/perl-b-debug/status
   :target: https://quay.io/repository/biocontainers/perl-b-debug
.. _`perl-b-debug/tags`: https://quay.io/repository/biocontainers/perl-b-debug?tab=tags


.. raw:: html

    <script>
        var package = "perl-b-debug";
        var versions = ["1.26","1.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-b-debug/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-b-debug/README.html