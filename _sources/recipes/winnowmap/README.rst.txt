:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'winnowmap'
.. highlight: bash

winnowmap
=========

.. conda:recipe:: winnowmap
   :replaces_section_title:
   :noindex:

   Winnowmap is a long\-read mapping algorithm optimized for mapping ONT and PacBio reads to repetitive reference sequences.

   :homepage: https://github.com/marbl/Winnowmap
   :license: LicenseRef-Public-Domain AND MIT
   :recipe: /`winnowmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/winnowmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/winnowmap/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa435`

   


.. conda:package:: winnowmap

   |downloads_winnowmap| |docker_winnowmap|

   :versions:
      
      

      ``2.03-2``,  ``2.03-1``,  ``2.03-0``,  ``2.02-0``,  ``2.01-0``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends meryl: ``>=1.2,<2013``
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

      mamba install winnowmap

   and update with::

      mamba update winnowmap

  To create a new environment, run::

      mamba create --name myenvname winnowmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/winnowmap:<tag>

   (see `winnowmap/tags`_ for valid values for ``<tag>``)


.. |downloads_winnowmap| image:: https://img.shields.io/conda/dn/bioconda/winnowmap.svg?style=flat
   :target: https://anaconda.org/bioconda/winnowmap
   :alt:   (downloads)
.. |docker_winnowmap| image:: https://quay.io/repository/biocontainers/winnowmap/status
   :target: https://quay.io/repository/biocontainers/winnowmap
.. _`winnowmap/tags`: https://quay.io/repository/biocontainers/winnowmap?tab=tags


.. raw:: html

    <script>
        var package = "winnowmap";
        var versions = ["2.03","2.03","2.03","2.02","2.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/winnowmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/winnowmap/README.html