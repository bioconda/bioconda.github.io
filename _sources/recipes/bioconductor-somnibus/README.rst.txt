:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-somnibus'
.. highlight: bash

bioconductor-somnibus
=====================

.. conda:recipe:: bioconductor-somnibus
   :replaces_section_title:
   :noindex:

   Smooth modeling of bisulfite sequencing

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SOMNiBUS.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-somnibus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somnibus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somnibus/meta.yaml>`_

   This package aims to analyse count\-based methylation data on predefined genomic regions\, such as those obtained by targeted sequencing\, and thus to identify differentially methylated regions \(DMRs\) that are associated with phenotypes or traits. The method is built a rich flexible model that allows for the effects\, on the methylation levels\, of multiple covariates to vary smoothly along genomic regions. At the same time\, this method also allows for sequencing errors and can adjust for variability in cell type mixture.


.. conda:package:: bioconductor-somnibus

   |downloads_bioconductor-somnibus| |docker_bioconductor-somnibus|

   :versions:
      
      

      ``1.7.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-mgcv: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-somnibus

   and update with::

      mamba update bioconductor-somnibus

  To create a new environment, run::

      mamba create --name myenvname bioconductor-somnibus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-somnibus:<tag>

   (see `bioconductor-somnibus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-somnibus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-somnibus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-somnibus
   :alt:   (downloads)
.. |docker_bioconductor-somnibus| image:: https://quay.io/repository/biocontainers/bioconductor-somnibus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-somnibus
.. _`bioconductor-somnibus/tags`: https://quay.io/repository/biocontainers/bioconductor-somnibus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-somnibus";
        var versions = ["1.7.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-somnibus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-somnibus/README.html