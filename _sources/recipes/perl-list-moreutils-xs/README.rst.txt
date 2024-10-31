:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-list-moreutils-xs'
.. highlight: bash

perl-list-moreutils-xs
======================

.. conda:recipe:: perl-list-moreutils-xs
   :replaces_section_title:
   :noindex:

   Provide the stuff missing in List\:\:Util in XS

   :homepage: https://metacpan.org/release/List-MoreUtils-XS
   :license: apache_2_0
   :recipe: /`perl-list-moreutils-xs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-moreutils-xs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-moreutils-xs/meta.yaml>`_

   


.. conda:package:: perl-list-moreutils-xs

   |downloads_perl-list-moreutils-xs| |docker_perl-list-moreutils-xs|

   :versions:
      
      

      ``0.430-3``,  ``0.430-2``,  ``0.430-1``,  ``0.430-0``,  ``0.428-2``,  ``0.428-0``

      

   
   :depends libgcc: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-list-moreutils-xs

   and update with::

      mamba update perl-list-moreutils-xs

  To create a new environment, run::

      mamba create --name myenvname perl-list-moreutils-xs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-list-moreutils-xs:<tag>

   (see `perl-list-moreutils-xs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-list-moreutils-xs| image:: https://img.shields.io/conda/dn/bioconda/perl-list-moreutils-xs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-list-moreutils-xs
   :alt:   (downloads)
.. |docker_perl-list-moreutils-xs| image:: https://quay.io/repository/biocontainers/perl-list-moreutils-xs/status
   :target: https://quay.io/repository/biocontainers/perl-list-moreutils-xs
.. _`perl-list-moreutils-xs/tags`: https://quay.io/repository/biocontainers/perl-list-moreutils-xs?tab=tags


.. raw:: html

    <script>
        var package = "perl-list-moreutils-xs";
        var versions = ["0.430","0.430","0.430","0.430","0.428"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-moreutils-xs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-moreutils-xs/README.html