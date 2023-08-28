:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-findbin-libs'
.. highlight: bash

perl-findbin-libs
=================

.. conda:recipe:: perl-findbin-libs/2.017008
   :replaces_section_title:
   :noindex:

   locate and a \'use lib\' or export directories based on \$FindBin\:\:Bin.

   :homepage: http://metacpan.org/pod/FindBin::libs
   :license: perl_5
   :recipe: /`perl-findbin-libs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-libs>`_/`2.017008 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-libs/2.017008>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-libs/2.017008/meta.yaml>`_

   


.. conda:package:: perl-findbin-libs

   |downloads_perl-findbin-libs| |docker_perl-findbin-libs|

   :versions:
      
      

      ``2.017008-2``,  ``2.017008-1``,  ``2.017008-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-file-temp: 
   :depends perl-module-fromperlver: 
   :depends perl-pathtools: 
   :depends perl-scalar-list-utils: 
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

      mamba install perl-findbin-libs

   and update with::

      mamba update perl-findbin-libs

  To create a new environment, run::

      mamba create --name myenvname perl-findbin-libs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-findbin-libs:<tag>

   (see `perl-findbin-libs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-findbin-libs| image:: https://img.shields.io/conda/dn/bioconda/perl-findbin-libs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-findbin-libs
   :alt:   (downloads)
.. |docker_perl-findbin-libs| image:: https://quay.io/repository/biocontainers/perl-findbin-libs/status
   :target: https://quay.io/repository/biocontainers/perl-findbin-libs
.. _`perl-findbin-libs/tags`: https://quay.io/repository/biocontainers/perl-findbin-libs?tab=tags


.. raw:: html

    <script>
        var package = "perl-findbin-libs";
        var versions = ["2.017008","2.017008","2.017008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-findbin-libs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-findbin-libs/README.html