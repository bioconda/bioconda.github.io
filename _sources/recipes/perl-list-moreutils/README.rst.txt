:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-list-moreutils'
.. highlight: bash

perl-list-moreutils
===================

.. conda:recipe:: perl-list-moreutils
   :replaces_section_title:
   :noindex:

   Provide the stuff missing in List\:\:Util

   :homepage: https://metacpan.org/release/List-MoreUtils
   :license: apache_2_0
   :recipe: /`perl-list-moreutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-moreutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-moreutils/meta.yaml>`_

   


.. conda:package:: perl-list-moreutils

   |downloads_perl-list-moreutils| |docker_perl-list-moreutils|

   :versions:
      
      

      ``0.430-0``,  ``0.428-2``,  ``0.428-1``,  ``0.428-0``,  ``0.413-1``,  ``0.15-1``,  ``0.15-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-exporter-tiny: 
   :depends perl-list-moreutils-xs: ``>=0.430``
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

      mamba install perl-list-moreutils

   and update with::

      mamba update perl-list-moreutils

  To create a new environment, run::

      mamba create --name myenvname perl-list-moreutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-list-moreutils:<tag>

   (see `perl-list-moreutils/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-list-moreutils| image:: https://img.shields.io/conda/dn/bioconda/perl-list-moreutils.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-list-moreutils
   :alt:   (downloads)
.. |docker_perl-list-moreutils| image:: https://quay.io/repository/biocontainers/perl-list-moreutils/status
   :target: https://quay.io/repository/biocontainers/perl-list-moreutils
.. _`perl-list-moreutils/tags`: https://quay.io/repository/biocontainers/perl-list-moreutils?tab=tags


.. raw:: html

    <script>
        var package = "perl-list-moreutils";
        var versions = ["0.430","0.428","0.428","0.428","0.413"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-moreutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-moreutils/README.html