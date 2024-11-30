:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-pkgconfig'
.. highlight: bash

perl-extutils-pkgconfig
=======================

.. conda:recipe:: perl-extutils-pkgconfig
   :replaces_section_title:
   :noindex:

   simplistic interface to pkg\-config

   :homepage: http://gtk2-perl.sourceforge.net
   :license: unknown
   :recipe: /`perl-extutils-pkgconfig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-pkgconfig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-pkgconfig/meta.yaml>`_

   


.. conda:package:: perl-extutils-pkgconfig

   |downloads_perl-extutils-pkgconfig| |docker_perl-extutils-pkgconfig|

   :versions:
      
      

      ``1.16-2``,  ``1.16-1``,  ``1.16-0``

      

   
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

      mamba install perl-extutils-pkgconfig

   and update with::

      mamba update perl-extutils-pkgconfig

  To create a new environment, run::

      mamba create --name myenvname perl-extutils-pkgconfig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-pkgconfig:<tag>

   (see `perl-extutils-pkgconfig/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-pkgconfig| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-pkgconfig.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-extutils-pkgconfig
   :alt:   (downloads)
.. |docker_perl-extutils-pkgconfig| image:: https://quay.io/repository/biocontainers/perl-extutils-pkgconfig/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-pkgconfig
.. _`perl-extutils-pkgconfig/tags`: https://quay.io/repository/biocontainers/perl-extutils-pkgconfig?tab=tags


.. raw:: html

    <script>
        var package = "perl-extutils-pkgconfig";
        var versions = ["1.16","1.16","1.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-pkgconfig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-pkgconfig/README.html