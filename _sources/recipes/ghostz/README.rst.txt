:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ghostz'
.. highlight: bash

ghostz
======

.. conda:recipe:: ghostz
   :replaces_section_title:
   :noindex:

   GHOSTZ is a highly efficient remote homologue detection tool

   :homepage: http://www.bi.cs.titech.ac.jp/ghostz/
   :license: BSD-2-Clause
   :recipe: /`ghostz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghostz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghostz/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu780`

   GHOSTZ is a homology search tool which can detect remote homologues like BLAST and is about 200 times more efficient than BLAST by using database subsequence clustering. GHOSTZ outputs search results in the format similar to BLAST\-tabular format.


.. conda:package:: ghostz

   |downloads_ghostz| |docker_ghostz|

   :versions:
      
      

      ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install ghostz

   and update with::

      mamba update ghostz

  To create a new environment, run::

      mamba create --name myenvname ghostz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ghostz:<tag>

   (see `ghostz/tags`_ for valid values for ``<tag>``)


.. |downloads_ghostz| image:: https://img.shields.io/conda/dn/bioconda/ghostz.svg?style=flat
   :target: https://anaconda.org/bioconda/ghostz
   :alt:   (downloads)
.. |docker_ghostz| image:: https://quay.io/repository/biocontainers/ghostz/status
   :target: https://quay.io/repository/biocontainers/ghostz
.. _`ghostz/tags`: https://quay.io/repository/biocontainers/ghostz?tab=tags


.. raw:: html

    <script>
        var package = "ghostz";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghostz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghostz/README.html