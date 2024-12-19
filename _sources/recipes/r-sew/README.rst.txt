:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sew'
.. highlight: bash

r-sew
=====

.. conda:recipe:: r-sew
   :replaces_section_title:
   :noindex:

   SEW

   :homepage: https://github.com/Genomicsplc/SEW
   :license: BSD / BSD3
   :recipe: /`r-sew <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sew>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sew/meta.yaml>`_

   


.. conda:package:: r-sew

   |downloads_r-sew| |docker_r-sew|

   :versions:
      
      

      ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends coreutils: 
   :depends htslib: ``>=1.4``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-rcpp: ``>=0.12.18``
   :depends r-rcpparmadillo: ``>=0.8.600.0.0``
   :depends r-rrbgen: ``>=0.0.6``
   :depends r-rrbgen: ``>=0.0.6,<0.1.0a0``
   :depends r-stitch: ``>=1.6.6``
   :depends r-stitch: ``>=1.7.2,<2.0a0``
   :depends r-testthat: ``>=2.0.0``
   :depends rsync: 
   :depends samtools: ``>=1.4``
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

      mamba install r-sew

   and update with::

      mamba update r-sew

  To create a new environment, run::

      mamba create --name myenvname r-sew

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-sew:<tag>

   (see `r-sew/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sew| image:: https://img.shields.io/conda/dn/bioconda/r-sew.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sew
   :alt:   (downloads)
.. |docker_r-sew| image:: https://quay.io/repository/biocontainers/r-sew/status
   :target: https://quay.io/repository/biocontainers/r-sew
.. _`r-sew/tags`: https://quay.io/repository/biocontainers/r-sew?tab=tags


.. raw:: html

    <script>
        var package = "r-sew";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sew/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sew/README.html