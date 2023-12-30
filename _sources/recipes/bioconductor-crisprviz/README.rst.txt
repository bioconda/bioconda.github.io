:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprviz'
.. highlight: bash

bioconductor-crisprviz
======================

.. conda:recipe:: bioconductor-crisprviz
   :replaces_section_title:
   :noindex:

   Visualization Functions for CRISPR gRNAs

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/crisprViz.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprviz/meta.yaml>`_

   Provides functionalities to visualize and contextualize CRISPR guide RNAs \(gRNAs\) on genomic tracks across nucleases and applications. Works in conjunction with the crisprBase and crisprDesign Bioconductor packages. Plots are produced using the Gviz framework.


.. conda:package:: bioconductor-crisprviz

   |downloads_bioconductor-crisprviz| |docker_bioconductor-crisprviz|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-crisprbase: ``>=1.6.0,<1.7.0``
   :depends bioconductor-crisprdesign: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-crisprviz

   and update with::

      mamba update bioconductor-crisprviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crisprviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprviz:<tag>

   (see `bioconductor-crisprviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprviz
   :alt:   (downloads)
.. |docker_bioconductor-crisprviz| image:: https://quay.io/repository/biocontainers/bioconductor-crisprviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprviz
.. _`bioconductor-crisprviz/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprviz";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprviz/README.html