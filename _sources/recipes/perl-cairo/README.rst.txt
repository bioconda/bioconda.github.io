:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cairo'
.. highlight: bash

perl-cairo
==========

.. conda:recipe:: perl-cairo
   :replaces_section_title:
   :noindex:

   Perl interface to the cairo 2d vector graphics library

   :homepage: http://gtk2-perl.sourceforge.net
   :license: lgpl_2_1
   :recipe: /`perl-cairo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cairo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cairo/meta.yaml>`_

   


.. conda:package:: perl-cairo

   |downloads_perl-cairo| |docker_perl-cairo|

   :versions:
      
      

      ``1.109-2``,  ``1.109-1``,  ``1.109-0``,  ``1.106-2``,  ``1.106-1``,  ``1.106-0``

      

   
   :depends cairo: ``>=1.16.0,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-extutils-depends: 
   :depends perl-extutils-pkgconfig: 
   :depends xorg-libsm: 
   :depends xorg-libxext: 
   :depends xorg-libxrender: 
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

      mamba install perl-cairo

   and update with::

      mamba update perl-cairo

  To create a new environment, run::

      mamba create --name myenvname perl-cairo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-cairo:<tag>

   (see `perl-cairo/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-cairo| image:: https://img.shields.io/conda/dn/bioconda/perl-cairo.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cairo
   :alt:   (downloads)
.. |docker_perl-cairo| image:: https://quay.io/repository/biocontainers/perl-cairo/status
   :target: https://quay.io/repository/biocontainers/perl-cairo
.. _`perl-cairo/tags`: https://quay.io/repository/biocontainers/perl-cairo?tab=tags


.. raw:: html

    <script>
        var package = "perl-cairo";
        var versions = ["1.109","1.109","1.109","1.106","1.106"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cairo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cairo/README.html