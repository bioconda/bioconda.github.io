:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprverse'
.. highlight: bash

bioconductor-crisprverse
========================

.. conda:recipe:: bioconductor-crisprverse
   :replaces_section_title:
   :noindex:

   Easily install and load the crisprVerse ecosystem for CRISPR gRNA design

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/crisprVerse.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprverse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprverse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprverse/meta.yaml>`_

   The crisprVerse is a modular ecosystem of R packages developed for the design and manipulation of CRISPR guide RNAs \(gRNAs\). All packages share a common language and design principles. This package is designed to make it easy to install and load the crisprVerse packages in a single step. To learn more about the crisprVerse\, visit \<https\:\/\/www.github.com\/crisprVerse\>.


.. conda:package:: bioconductor-crisprverse

   |downloads_bioconductor-crisprverse| |docker_bioconductor-crisprverse|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-crisprbase: ``>=1.6.0,<1.7.0``
   :depends bioconductor-crisprbowtie: ``>=1.6.0,<1.7.0``
   :depends bioconductor-crisprdesign: ``>=1.4.0,<1.5.0``
   :depends bioconductor-crisprscore: ``>=1.6.0,<1.7.0``
   :depends bioconductor-crisprscoredata: ``>=1.6.0,<1.7.0``
   :depends bioconductor-crisprviz: ``>=1.4.0,<1.5.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-cli: 
   :depends r-rlang: 
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

      mamba install bioconductor-crisprverse

   and update with::

      mamba update bioconductor-crisprverse

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crisprverse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprverse:<tag>

   (see `bioconductor-crisprverse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprverse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprverse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprverse
   :alt:   (downloads)
.. |docker_bioconductor-crisprverse| image:: https://quay.io/repository/biocontainers/bioconductor-crisprverse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprverse
.. _`bioconductor-crisprverse/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprverse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprverse";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprverse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprverse/README.html