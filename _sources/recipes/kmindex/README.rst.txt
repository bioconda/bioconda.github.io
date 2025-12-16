:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmindex'
.. highlight: bash

kmindex
=======

.. conda:recipe:: kmindex
   :replaces_section_title:
   :noindex:

   A tool for large\-scale k\-mer indexing

   :homepage: https://github.com/tlemane/kmindex
   :documentation: https://tlemane.github.io/kmindex
   
   :developer docs: https://github.com/tlemane/kmindex/
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`kmindex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmindex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmindex/meta.yaml>`_

   Given a databank D \= \{S1\,...\,Sn\}\, with each Si being any genomic dataset \(genome or raw reads\)\, kmindex allows to compute the percentage of shared k\-mers between a query Q and each Si.


.. conda:package:: kmindex

   |downloads_kmindex| |docker_kmindex|

   :versions:
      
      

      ``0.6.0-1``,  ``0.6.0-0``

      

   
   :depends kmtricks: ``>=1.5.1``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install kmindex

   and update with::

      mamba update kmindex

  To create a new environment, run::

      mamba create --name myenvname kmindex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmindex:<tag>

   (see `kmindex/tags`_ for valid values for ``<tag>``)


.. |downloads_kmindex| image:: https://img.shields.io/conda/dn/bioconda/kmindex.svg?style=flat
   :target: https://anaconda.org/bioconda/kmindex
   :alt:   (downloads)
.. |docker_kmindex| image:: https://quay.io/repository/biocontainers/kmindex/status
   :target: https://quay.io/repository/biocontainers/kmindex
.. _`kmindex/tags`: https://quay.io/repository/biocontainers/kmindex?tab=tags


.. raw:: html

    <script>
        var package = "kmindex";
        var versions = ["0.6.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmindex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmindex/README.html