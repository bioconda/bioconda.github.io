:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mixin-linewise'
.. highlight: bash

perl-mixin-linewise
===================

.. conda:recipe:: perl-mixin-linewise
   :replaces_section_title:
   :noindex:

   write your linewise code for handles\; this does the rest

   :homepage: https://github.com/rjbs/Mixin-Linewise
   :license: perl_5
   :recipe: /`perl-mixin-linewise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mixin-linewise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mixin-linewise/meta.yaml>`_

   


.. conda:package:: perl-mixin-linewise

   |downloads_perl-mixin-linewise| |docker_perl-mixin-linewise|

   :versions:
      
      

      ``0.111-0``,  ``0.110-0``,  ``0.108-3``,  ``0.108-2``,  ``0.108-1``,  ``0.108-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-extutils-makemaker: 
   :depends perl-pathtools: 
   :depends perl-perlio-utf8_strict: 
   :depends perl-sub-exporter: 
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

      mamba install perl-mixin-linewise

   and update with::

      mamba update perl-mixin-linewise

  To create a new environment, run::

      mamba create --name myenvname perl-mixin-linewise

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mixin-linewise:<tag>

   (see `perl-mixin-linewise/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mixin-linewise| image:: https://img.shields.io/conda/dn/bioconda/perl-mixin-linewise.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mixin-linewise
   :alt:   (downloads)
.. |docker_perl-mixin-linewise| image:: https://quay.io/repository/biocontainers/perl-mixin-linewise/status
   :target: https://quay.io/repository/biocontainers/perl-mixin-linewise
.. _`perl-mixin-linewise/tags`: https://quay.io/repository/biocontainers/perl-mixin-linewise?tab=tags


.. raw:: html

    <script>
        var package = "perl-mixin-linewise";
        var versions = ["0.111","0.110","0.108","0.108","0.108"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mixin-linewise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mixin-linewise/README.html