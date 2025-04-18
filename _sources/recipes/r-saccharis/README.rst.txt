:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-saccharis'
.. highlight: bash

r-saccharis
===========

.. conda:recipe:: r-saccharis
   :replaces_section_title:
   :noindex:

   A rendering package for creating phylogenetic trees from SACCHARIS .json and .tree files\, in the R statistical computing language.

   :homepage: https://github.com/saccharis/rsaccharis
   :license: GPL / GPL-3.0-or-later
   :recipe: /`r-saccharis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-saccharis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-saccharis/meta.yaml>`_

   This package will use metadata .json and .tree files output from SACCHARIS v2 to generate annotated phylogenetic tree PDF files. Highly customizable\, as the formatting of the tree is done using ggplot2. Of course plotting functions can easily be manipulated as desired. To use\, call A\_load\_data\(\) and B\_plots\_all\(\) and follow prompts. Our default plots used for publication are domain\_ECno\_numeric.


.. conda:package:: r-saccharis

   |downloads_r-saccharis| |docker_r-saccharis|

   :versions:
      
      

      ``1.0.5-0``

      

   
   :depends bioconductor-ggtree: 
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-jsonlite: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-rcolorbrewer: 
   :depends r-stringr: 
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

      mamba install r-saccharis

   and update with::

      mamba update r-saccharis

  To create a new environment, run::

      mamba create --name myenvname r-saccharis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-saccharis:<tag>

   (see `r-saccharis/tags`_ for valid values for ``<tag>``)


.. |downloads_r-saccharis| image:: https://img.shields.io/conda/dn/bioconda/r-saccharis.svg?style=flat
   :target: https://anaconda.org/bioconda/r-saccharis
   :alt:   (downloads)
.. |docker_r-saccharis| image:: https://quay.io/repository/biocontainers/r-saccharis/status
   :target: https://quay.io/repository/biocontainers/r-saccharis
.. _`r-saccharis/tags`: https://quay.io/repository/biocontainers/r-saccharis?tab=tags


.. raw:: html

    <script>
        var package = "r-saccharis";
        var versions = ["1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-saccharis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-saccharis/README.html