:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tanggle'
.. highlight: bash

bioconductor-tanggle
====================

.. conda:recipe:: bioconductor-tanggle
   :replaces_section_title:
   :noindex:

   Visualization of Phylogenetic Networks

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/tanggle.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tanggle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tanggle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tanggle/meta.yaml>`_

   Offers functions for plotting split \(or implicit\) networks \(unrooted\, undirected\) and explicit networks \(rooted\, directed\) with reticulations extending. \'ggtree\' and using functions from \'ape\' and \'phangorn\'. It extends the \'ggtree\' package \[\@Yu2017\] to allow the visualization of phylogenetic networks using the \'ggplot2\' syntax. It offers an alternative to the plot functions already available in \'ape\' Paradis and Schliep \(2019\) \<doi\:10.1093\/bioinformatics\/bty633\> and \'phangorn\' Schliep \(2011\) \<doi\:10.1093\/bioinformatics\/btq706\>.


.. conda:package:: bioconductor-tanggle

   |downloads_bioconductor-tanggle| |docker_bioconductor-tanggle|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-ggtree: ``>=3.14.0,<3.15.0``
   :depends r-ape: ``>=5.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-phangorn: ``>=2.5``
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

      mamba install bioconductor-tanggle

   and update with::

      mamba update bioconductor-tanggle

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tanggle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tanggle:<tag>

   (see `bioconductor-tanggle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tanggle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tanggle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tanggle
   :alt:   (downloads)
.. |docker_bioconductor-tanggle| image:: https://quay.io/repository/biocontainers/bioconductor-tanggle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tanggle
.. _`bioconductor-tanggle/tags`: https://quay.io/repository/biocontainers/bioconductor-tanggle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tanggle";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tanggle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tanggle/README.html