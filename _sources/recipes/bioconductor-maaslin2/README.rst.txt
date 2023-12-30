:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maaslin2'
.. highlight: bash

bioconductor-maaslin2
=====================

.. conda:recipe:: bioconductor-maaslin2
   :replaces_section_title:
   :noindex:

   \"Multivariable Association Discovery in Population\-scale Meta\-omics Studies\"

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Maaslin2.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-maaslin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maaslin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maaslin2/meta.yaml>`_

   MaAsLin2 is comprehensive R package for efficiently determining multivariable association between clinical metadata and microbial meta\'omic features. MaAsLin2 relies on general linear models to accommodate most modern epidemiological study designs\, including cross\-sectional and longitudinal\, and offers a variety of data exploration\, normalization\, and transformation methods. MaAsLin2 is the next generation of MaAsLin.


.. conda:package:: bioconductor-maaslin2

   |downloads_bioconductor-maaslin2| |docker_bioconductor-maaslin2|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-metagenomeseq: ``>=1.43.0,<1.44.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biglm: 
   :depends r-car: 
   :depends r-chemometrics: 
   :depends r-cplm: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-glmmtmb: 
   :depends r-hash: 
   :depends r-lme4: 
   :depends r-lmertest: 
   :depends r-logging: 
   :depends r-mass: 
   :depends r-optparse: 
   :depends r-pbapply: 
   :depends r-pcapp: 
   :depends r-pheatmap: 
   :depends r-pscl: 
   :depends r-robustbase: 
   :depends r-tibble: 
   :depends r-vegan: 
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

      mamba install bioconductor-maaslin2

   and update with::

      mamba update bioconductor-maaslin2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-maaslin2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maaslin2:<tag>

   (see `bioconductor-maaslin2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maaslin2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maaslin2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maaslin2
   :alt:   (downloads)
.. |docker_bioconductor-maaslin2| image:: https://quay.io/repository/biocontainers/bioconductor-maaslin2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maaslin2
.. _`bioconductor-maaslin2/tags`: https://quay.io/repository/biocontainers/bioconductor-maaslin2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-maaslin2";
        var versions = ["1.16.0","1.14.1","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maaslin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maaslin2/README.html