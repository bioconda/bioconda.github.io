:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fedup'
.. highlight: bash

bioconductor-fedup
==================

.. conda:recipe:: bioconductor-fedup
   :replaces_section_title:
   :noindex:

   Fisher\'s Test for Enrichment and Depletion of User\-Defined Pathways

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/fedup.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-fedup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fedup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fedup/meta.yaml>`_

   An R package that tests for enrichment and depletion of user\-defined pathways using a Fisher\'s exact test. The method is designed for versatile pathway annotation formats \(eg. gmt\, txt\, xlsx\) to allow the user to run pathway analysis on custom annotations. This package is also integrated with Cytoscape to provide network\-based pathway visualization that enhances the interpretability of the results.


.. conda:package:: bioconductor-fedup

   |downloads_bioconductor-fedup| |docker_bioconductor-fedup|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-rcy3: ``>=2.26.0,<2.27.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-openxlsx: 
   :depends r-rcolorbrewer: 
   :depends r-tibble: 
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

      mamba install bioconductor-fedup

   and update with::

      mamba update bioconductor-fedup

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fedup

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fedup:<tag>

   (see `bioconductor-fedup/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fedup| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fedup.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fedup
   :alt:   (downloads)
.. |docker_bioconductor-fedup| image:: https://quay.io/repository/biocontainers/bioconductor-fedup/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fedup
.. _`bioconductor-fedup/tags`: https://quay.io/repository/biocontainers/bioconductor-fedup?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fedup";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fedup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fedup/README.html