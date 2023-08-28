:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-border-style'
.. highlight: bash

perl-border-style
=================

.. conda:recipe:: perl-border-style
   :replaces_section_title:
   :noindex:

   Border style structure

   :homepage: https://metacpan.org/release/Border-Style
   :license: perl_5
   :recipe: /`perl-border-style <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-border-style>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-border-style/meta.yaml>`_

   


.. conda:package:: perl-border-style

   |downloads_perl-border-style| |docker_perl-border-style|

   :versions:
      
      

      ``0.01-3``,  ``0.01-2``,  ``0.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-module-list: 
   :depends perl-moo: 
   :depends perl-term-app-roles: 
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

      mamba install perl-border-style

   and update with::

      mamba update perl-border-style

  To create a new environment, run::

      mamba create --name myenvname perl-border-style

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-border-style:<tag>

   (see `perl-border-style/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-border-style| image:: https://img.shields.io/conda/dn/bioconda/perl-border-style.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-border-style
   :alt:   (downloads)
.. |docker_perl-border-style| image:: https://quay.io/repository/biocontainers/perl-border-style/status
   :target: https://quay.io/repository/biocontainers/perl-border-style
.. _`perl-border-style/tags`: https://quay.io/repository/biocontainers/perl-border-style?tab=tags


.. raw:: html

    <script>
        var package = "perl-border-style";
        var versions = ["0.01","0.01","0.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-border-style/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-border-style/README.html