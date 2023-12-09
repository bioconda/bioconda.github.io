:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fcscan'
.. highlight: bash

bioconductor-fcscan
===================

.. conda:recipe:: bioconductor-fcscan
   :replaces_section_title:
   :noindex:

   fcScan for detecting clusters of coordinates with user defined options

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/fcScan.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fcscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fcscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fcscan/meta.yaml>`_

   This package is used to detect combination of genomic coordinates falling within a user defined window size along with user defined overlap between identified neighboring clusters. It can be used for genomic data where the clusters are built on a specific chromosome or specific strand. Clustering can be performed with a \"greedy\" option allowing thus the presence of additional sites within the allowed window size.


.. conda:package:: bioconductor-fcscan

   |downloads_bioconductor-fcscan| |docker_bioconductor-fcscan|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-plyr: 
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

      mamba install bioconductor-fcscan

   and update with::

      mamba update bioconductor-fcscan

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fcscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fcscan:<tag>

   (see `bioconductor-fcscan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fcscan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fcscan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fcscan
   :alt:   (downloads)
.. |docker_bioconductor-fcscan| image:: https://quay.io/repository/biocontainers/bioconductor-fcscan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fcscan
.. _`bioconductor-fcscan/tags`: https://quay.io/repository/biocontainers/bioconductor-fcscan?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fcscan";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fcscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fcscan/README.html