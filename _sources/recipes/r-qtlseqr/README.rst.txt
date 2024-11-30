:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-qtlseqr'
.. highlight: bash

r-qtlseqr
=========

.. conda:recipe:: r-qtlseqr
   :replaces_section_title:
   :noindex:

   QTLseqr is an R package for QTL mapping using NGS Bulk Segregant Analysis.

   :homepage: https://github.com/bmansfeld/QTLseqr
   :license: GPL (>= 3)
   :recipe: /`r-qtlseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qtlseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qtlseqr/meta.yaml>`_

   


.. conda:package:: r-qtlseqr

   |downloads_r-qtlseqr| |docker_r-qtlseqr|

   :versions:
      
      

      ``0.7.5.2-6``,  ``0.7.5.2-5``,  ``0.7.5.2-4``,  ``0.7.5.2-3``,  ``0.7.5.2-2``,  ``0.7.5.2-1``,  ``0.7.5.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-locfit: 
   :depends r-mass: 
   :depends r-modeest: 
   :depends r-rcpp: 
   :depends r-readr: 
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

      mamba install r-qtlseqr

   and update with::

      mamba update r-qtlseqr

  To create a new environment, run::

      mamba create --name myenvname r-qtlseqr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-qtlseqr:<tag>

   (see `r-qtlseqr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-qtlseqr| image:: https://img.shields.io/conda/dn/bioconda/r-qtlseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-qtlseqr
   :alt:   (downloads)
.. |docker_r-qtlseqr| image:: https://quay.io/repository/biocontainers/r-qtlseqr/status
   :target: https://quay.io/repository/biocontainers/r-qtlseqr
.. _`r-qtlseqr/tags`: https://quay.io/repository/biocontainers/r-qtlseqr?tab=tags


.. raw:: html

    <script>
        var package = "r-qtlseqr";
        var versions = ["0.7.5.2","0.7.5.2","0.7.5.2","0.7.5.2","0.7.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-qtlseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-qtlseqr/README.html