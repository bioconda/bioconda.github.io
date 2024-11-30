:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-findbin-real'
.. highlight: bash

perl-findbin-real
=================

.. conda:recipe:: perl-findbin-real
   :replaces_section_title:
   :noindex:

   Locates the full path to the script bin directory to allow the use of paths relative to the bin directory.

   :homepage: https://metacpan.org/pod/FindBin::Real
   :license: perl_5
   :recipe: /`perl-findbin-real <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-real>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-real/meta.yaml>`_

   


.. conda:package:: perl-findbin-real

   |downloads_perl-findbin-real| |docker_perl-findbin-real|

   :versions:
      
      

      ``1.05-1``,  ``1.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install perl-findbin-real

   and update with::

      mamba update perl-findbin-real

  To create a new environment, run::

      mamba create --name myenvname perl-findbin-real

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-findbin-real:<tag>

   (see `perl-findbin-real/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-findbin-real| image:: https://img.shields.io/conda/dn/bioconda/perl-findbin-real.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-findbin-real
   :alt:   (downloads)
.. |docker_perl-findbin-real| image:: https://quay.io/repository/biocontainers/perl-findbin-real/status
   :target: https://quay.io/repository/biocontainers/perl-findbin-real
.. _`perl-findbin-real/tags`: https://quay.io/repository/biocontainers/perl-findbin-real?tab=tags


.. raw:: html

    <script>
        var package = "perl-findbin-real";
        var versions = ["1.05","1.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-findbin-real/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-findbin-real/README.html