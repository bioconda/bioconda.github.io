:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'king'
.. highlight: bash

king
====

.. conda:recipe:: king
   :replaces_section_title:
   :noindex:

   \`Kinship\-based INference for Gwas \(KING\) is a toolset that makes use of high\-throughput SNP data typically seen in a genome\-wide association study \<http\:\/\/people.virginia.edu\/\~wc9c\/KING\/\>\`\_

   :homepage: http://people.virginia.edu/~wc9c/KING/
   :license: GPLv3
   :recipe: /`king <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/king>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/king/meta.yaml>`_

   


.. conda:package:: king

   |downloads_king| |docker_king|

   :versions:
      
      

      ``2.2.7-3``,  ``2.2.7-2``,  ``2.2.7-1``,  ``2.2.7-0``,  ``2.2.4-2``,  ``2.2.4-1``,  ``2.2.4-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openmp: 
   :depends zlib: 
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

      mamba install king

   and update with::

      mamba update king

  To create a new environment, run::

      mamba create --name myenvname king

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/king:<tag>

   (see `king/tags`_ for valid values for ``<tag>``)


.. |downloads_king| image:: https://img.shields.io/conda/dn/bioconda/king.svg?style=flat
   :target: https://anaconda.org/bioconda/king
   :alt:   (downloads)
.. |docker_king| image:: https://quay.io/repository/biocontainers/king/status
   :target: https://quay.io/repository/biocontainers/king
.. _`king/tags`: https://quay.io/repository/biocontainers/king?tab=tags


.. raw:: html

    <script>
        var package = "king";
        var versions = ["2.2.7","2.2.7","2.2.7","2.2.7","2.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/king/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/king/README.html