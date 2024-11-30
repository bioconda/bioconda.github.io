:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vasp'
.. highlight: bash

bioconductor-vasp
=================

.. conda:recipe:: bioconductor-vasp
   :replaces_section_title:
   :noindex:

   Quantification and Visualization of Variations of Splicing in Population

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/VaSP.html
   :license: GPL (>= 2.0)
   :recipe: /`bioconductor-vasp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vasp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vasp/meta.yaml>`_

   Discovery of genome\-wide variable alternative splicing events from short\-read RNA\-seq data and visualizations of gene splicing information for publication\-quality multi\-panel figures in a population. \(Warning\: The visualizing function is removed due to the dependent package Sushi deprecated. If you want to use it\, please change back to an older version.\)


.. conda:package:: bioconductor-vasp

   |downloads_bioconductor-vasp| |docker_bioconductor-vasp|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.4-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-ballgown: ``>=2.34.0,<2.35.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-matrixstats: 
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

      mamba install bioconductor-vasp

   and update with::

      mamba update bioconductor-vasp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-vasp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vasp:<tag>

   (see `bioconductor-vasp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vasp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vasp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vasp
   :alt:   (downloads)
.. |docker_bioconductor-vasp| image:: https://quay.io/repository/biocontainers/bioconductor-vasp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vasp
.. _`bioconductor-vasp/tags`: https://quay.io/repository/biocontainers/bioconductor-vasp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vasp";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vasp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vasp/README.html