:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-types-path-tiny'
.. highlight: bash

perl-moosex-types-path-tiny
===========================

.. conda:recipe:: perl-moosex-types-path-tiny
   :replaces_section_title:
   :noindex:

   MooseX\:\:Types\:\:Path\:\:Tiny \- Path\:\:Tiny types and coercions for Moose

   :homepage: https://github.com/moose/MooseX-Types-Path-Tiny
   :license: perl_5
   :recipe: /`perl-moosex-types-path-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-types-path-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-types-path-tiny/meta.yaml>`_

   


.. conda:package:: perl-moosex-types-path-tiny

   |downloads_perl-moosex-types-path-tiny| |docker_perl-moosex-types-path-tiny|

   :versions:
      
      

      ``0.012-3``,  ``0.012-2``,  ``0.012-1``,  ``0.012-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-moose: 
   :depends perl-moosex-getopt: 
   :depends perl-moosex-types: 
   :depends perl-moosex-types-stringlike: 
   :depends perl-namespace-autoclean: 
   :depends perl-path-tiny: 
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

      mamba install perl-moosex-types-path-tiny

   and update with::

      mamba update perl-moosex-types-path-tiny

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-types-path-tiny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-types-path-tiny:<tag>

   (see `perl-moosex-types-path-tiny/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-types-path-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-types-path-tiny.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-types-path-tiny
   :alt:   (downloads)
.. |docker_perl-moosex-types-path-tiny| image:: https://quay.io/repository/biocontainers/perl-moosex-types-path-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-types-path-tiny
.. _`perl-moosex-types-path-tiny/tags`: https://quay.io/repository/biocontainers/perl-moosex-types-path-tiny?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-types-path-tiny";
        var versions = ["0.012","0.012","0.012","0.012"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-types-path-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-types-path-tiny/README.html