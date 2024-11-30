:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-string-random'
.. highlight: bash

perl-string-random
==================

.. conda:recipe:: perl-string-random/0.30
   :replaces_section_title:
   :noindex:

   Perl module to generate random strings based on a pattern

   :homepage: http://metacpan.org/release/String-Random
   :license: perl_5
   :recipe: /`perl-string-random <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-random>`_/`0.30 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-random/0.30>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-random/0.30/meta.yaml>`_

   


.. conda:package:: perl-string-random

   |downloads_perl-string-random| |docker_perl-string-random|

   :versions:
      
      

      ``0.30-2``,  ``0.30-1``,  ``0.30-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-parent: 
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

      mamba install perl-string-random

   and update with::

      mamba update perl-string-random

  To create a new environment, run::

      mamba create --name myenvname perl-string-random

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-string-random:<tag>

   (see `perl-string-random/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-string-random| image:: https://img.shields.io/conda/dn/bioconda/perl-string-random.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-string-random
   :alt:   (downloads)
.. |docker_perl-string-random| image:: https://quay.io/repository/biocontainers/perl-string-random/status
   :target: https://quay.io/repository/biocontainers/perl-string-random
.. _`perl-string-random/tags`: https://quay.io/repository/biocontainers/perl-string-random?tab=tags


.. raw:: html

    <script>
        var package = "perl-string-random";
        var versions = ["0.30","0.30","0.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-string-random/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-string-random/README.html