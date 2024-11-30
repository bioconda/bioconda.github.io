:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gg4way'
.. highlight: bash

bioconductor-gg4way
===================

.. conda:recipe:: bioconductor-gg4way
   :replaces_section_title:
   :noindex:

   4way Plots of Differential Expression

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gg4way.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gg4way <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gg4way>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gg4way/meta.yaml>`_

   4way plots enable a comparison of the logFC values from two contrasts of differential gene expression. The gg4way package creates 4way plots using the ggplot2 framework and supports popular Bioconductor objects. The package also provides information about the correlation between contrasts and significant genes of interest.


.. conda:package:: bioconductor-gg4way

   |downloads_bioconductor-gg4way| |docker_bioconductor-gg4way|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-glue: 
   :depends r-janitor: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-gg4way

   and update with::

      mamba update bioconductor-gg4way

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gg4way

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gg4way:<tag>

   (see `bioconductor-gg4way/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gg4way| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gg4way.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gg4way
   :alt:   (downloads)
.. |docker_bioconductor-gg4way| image:: https://quay.io/repository/biocontainers/bioconductor-gg4way/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gg4way
.. _`bioconductor-gg4way/tags`: https://quay.io/repository/biocontainers/bioconductor-gg4way?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gg4way";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gg4way/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gg4way/README.html