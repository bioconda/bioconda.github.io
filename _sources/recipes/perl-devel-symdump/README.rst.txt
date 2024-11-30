:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-symdump'
.. highlight: bash

perl-devel-symdump
==================

.. conda:recipe:: perl-devel-symdump/2.18
   :replaces_section_title:
   :noindex:

   dump symbol names or the symbol table

   :homepage: http://metacpan.org/pod/Devel::Symdump
   :license: perl_5
   :recipe: /`perl-devel-symdump <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-symdump>`_/`2.18 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-symdump/2.18>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-symdump/2.18/meta.yaml>`_

   


.. conda:package:: perl-devel-symdump

   |downloads_perl-devel-symdump| |docker_perl-devel-symdump|

   :versions:
      
      

      ``2.18-2``,  ``2.18-1``,  ``2.18-0``

      

   
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

      mamba install perl-devel-symdump

   and update with::

      mamba update perl-devel-symdump

  To create a new environment, run::

      mamba create --name myenvname perl-devel-symdump

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-devel-symdump:<tag>

   (see `perl-devel-symdump/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-symdump| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-symdump.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-symdump
   :alt:   (downloads)
.. |docker_perl-devel-symdump| image:: https://quay.io/repository/biocontainers/perl-devel-symdump/status
   :target: https://quay.io/repository/biocontainers/perl-devel-symdump
.. _`perl-devel-symdump/tags`: https://quay.io/repository/biocontainers/perl-devel-symdump?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-symdump";
        var versions = ["2.18","2.18","2.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-symdump/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-symdump/README.html