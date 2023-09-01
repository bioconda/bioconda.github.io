:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-font-ttf'
.. highlight: bash

perl-font-ttf
=============

.. conda:recipe:: perl-font-ttf
   :replaces_section_title:
   :noindex:

   TTF font support for Perl

   :homepage: http://metacpan.org/pod/Font-TTF
   :license: artistic_2
   :recipe: /`perl-font-ttf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-font-ttf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-font-ttf/meta.yaml>`_

   


.. conda:package:: perl-font-ttf

   |downloads_perl-font-ttf| |docker_perl-font-ttf|

   :versions:
      
      

      ``1.06-1``,  ``1.06-0``,  ``1.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-io-string: 
   :depends perl-xml-parser: 
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

      mamba install perl-font-ttf

   and update with::

      mamba update perl-font-ttf

  To create a new environment, run::

      mamba create --name myenvname perl-font-ttf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-font-ttf:<tag>

   (see `perl-font-ttf/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-font-ttf| image:: https://img.shields.io/conda/dn/bioconda/perl-font-ttf.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-font-ttf
   :alt:   (downloads)
.. |docker_perl-font-ttf| image:: https://quay.io/repository/biocontainers/perl-font-ttf/status
   :target: https://quay.io/repository/biocontainers/perl-font-ttf
.. _`perl-font-ttf/tags`: https://quay.io/repository/biocontainers/perl-font-ttf?tab=tags


.. raw:: html

    <script>
        var package = "perl-font-ttf";
        var versions = ["1.06","1.06","1.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-font-ttf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-font-ttf/README.html