:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sys-info-base'
.. highlight: bash

perl-sys-info-base
==================

.. conda:recipe:: perl-sys-info-base
   :replaces_section_title:
   :noindex:

   Base class for Sys\:\:Info

   :homepage: http://metacpan.org/pod/Sys::Info::Base
   :license: perl_5
   :recipe: /`perl-sys-info-base <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info-base>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info-base/meta.yaml>`_

   


.. conda:package:: perl-sys-info-base

   |downloads_perl-sys-info-base| |docker_perl-sys-info-base|

   :versions:
      
      

      ``0.7807-1``,  ``0.7807-0``,  ``0.7804-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-text-template-simple: 
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

      mamba install perl-sys-info-base

   and update with::

      mamba update perl-sys-info-base

  To create a new environment, run::

      mamba create --name myenvname perl-sys-info-base

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sys-info-base:<tag>

   (see `perl-sys-info-base/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sys-info-base| image:: https://img.shields.io/conda/dn/bioconda/perl-sys-info-base.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sys-info-base
   :alt:   (downloads)
.. |docker_perl-sys-info-base| image:: https://quay.io/repository/biocontainers/perl-sys-info-base/status
   :target: https://quay.io/repository/biocontainers/perl-sys-info-base
.. _`perl-sys-info-base/tags`: https://quay.io/repository/biocontainers/perl-sys-info-base?tab=tags


.. raw:: html

    <script>
        var package = "perl-sys-info-base";
        var versions = ["0.7807","0.7807","0.7804"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sys-info-base/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sys-info-base/README.html