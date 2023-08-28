:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-btlib'
.. highlight: bash

perl-btlib
==========

.. conda:recipe:: perl-btlib/0.19
   :replaces_section_title:
   :noindex:

   Binary Search Tree library

   :homepage: https://sourceforge.net/projects/estscan/files/BTLib
   :license: open source
   :recipe: /`perl-btlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-btlib>`_/`0.19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-btlib/0.19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-btlib/0.19/meta.yaml>`_

   


.. conda:package:: perl-btlib

   |downloads_perl-btlib| |docker_perl-btlib|

   :versions:
      
      

      ``0.19-1``,  ``0.19-0``

      

   
   :depends perl: ``5.22.0*``
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

      mamba install perl-btlib

   and update with::

      mamba update perl-btlib

  To create a new environment, run::

      mamba create --name myenvname perl-btlib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-btlib:<tag>

   (see `perl-btlib/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-btlib| image:: https://img.shields.io/conda/dn/bioconda/perl-btlib.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-btlib
   :alt:   (downloads)
.. |docker_perl-btlib| image:: https://quay.io/repository/biocontainers/perl-btlib/status
   :target: https://quay.io/repository/biocontainers/perl-btlib
.. _`perl-btlib/tags`: https://quay.io/repository/biocontainers/perl-btlib?tab=tags


.. raw:: html

    <script>
        var package = "perl-btlib";
        var versions = ["0.19","0.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-btlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-btlib/README.html