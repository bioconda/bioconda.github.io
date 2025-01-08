:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zenith'
.. highlight: bash

bioconductor-zenith
===================

.. conda:recipe:: bioconductor-zenith
   :replaces_section_title:
   :noindex:

   Gene set analysis following differential expression using linear \(mixed\) modeling with dream

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/zenith.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-zenith <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zenith>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zenith/meta.yaml>`_

   Zenith performs gene set analysis on the result of differential expression using linear \(mixed\) modeling with dream by considering the correlation between gene expression traits.  This package implements the camera method from the limma package proposed by Wu and Smyth \(2012\).  Zenith is a simple extension of camera to be compatible with linear mixed models implemented in variancePartition\:\:dream\(\).


.. conda:package:: bioconductor-zenith

   |downloads_bioconductor-zenith| |docker_bioconductor-zenith|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.2-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-enrichmentbrowser: ``>=2.36.0,<2.37.0``
   :depends bioconductor-gseabase: ``>=1.68.0,<1.69.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-variancepartition: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-msigdbr: ``>=7.5.1``
   :depends r-progress: 
   :depends r-rdpack: 
   :depends r-reshape2: 
   :depends r-rfast: 
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

      mamba install bioconductor-zenith

   and update with::

      mamba update bioconductor-zenith

  To create a new environment, run::

      mamba create --name myenvname bioconductor-zenith

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-zenith:<tag>

   (see `bioconductor-zenith/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-zenith| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zenith.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zenith
   :alt:   (downloads)
.. |docker_bioconductor-zenith| image:: https://quay.io/repository/biocontainers/bioconductor-zenith/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zenith
.. _`bioconductor-zenith/tags`: https://quay.io/repository/biocontainers/bioconductor-zenith?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-zenith";
        var versions = ["1.8.0","1.4.2","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zenith/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zenith/README.html