:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oppti'
.. highlight: bash

bioconductor-oppti
==================

.. conda:recipe:: bioconductor-oppti
   :replaces_section_title:
   :noindex:

   Outlier Protein and Phosphosite Target Identifier

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/oppti.html
   :license: MIT
   :recipe: /`bioconductor-oppti <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oppti>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oppti/meta.yaml>`_

   The aim of oppti is to analyze protein \(and phosphosite\) expressions to find outlying markers for each sample in the given cohort\(s\) for the discovery of personalized actionable targets.


.. conda:package:: bioconductor-oppti

   |downloads_bioconductor-oppti| |docker_bioconductor-oppti|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-devtools: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-paralleldist: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-reshape: 
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

      mamba install bioconductor-oppti

   and update with::

      mamba update bioconductor-oppti

  To create a new environment, run::

      mamba create --name myenvname bioconductor-oppti

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oppti:<tag>

   (see `bioconductor-oppti/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oppti| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oppti.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oppti
   :alt:   (downloads)
.. |docker_bioconductor-oppti| image:: https://quay.io/repository/biocontainers/bioconductor-oppti/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oppti
.. _`bioconductor-oppti/tags`: https://quay.io/repository/biocontainers/bioconductor-oppti?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oppti";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oppti/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oppti/README.html