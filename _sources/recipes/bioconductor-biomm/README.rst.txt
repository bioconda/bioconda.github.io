:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biomm'
.. highlight: bash

bioconductor-biomm
==================

.. conda:recipe:: bioconductor-biomm
   :replaces_section_title:
   :noindex:

   BioMM\: Biological\-informed Multi\-stage Machine learning framework for phenotype prediction using omics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BioMM.html
   :license: GPL-3
   :recipe: /`bioconductor-biomm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomm/meta.yaml>`_

   The identification of reproducible biological patterns from high\-dimensional omics data is a key factor in understanding the biology of complex disease or traits. Incorporating prior biological knowledge into machine learning is an important step in advancing such research. We have proposed a biologically informed multi\-stage machine learing framework termed BioMM specifically for phenotype prediction based on omics\-scale data where we can evaluate different machine learning models with prior biological meta information.


.. conda:package:: bioconductor-biomm

   |downloads_bioconductor-biomm| |docker_bioconductor-biomm|

   :versions:
      
      

      ``1.15.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-topgo: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cmplot: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-imager: 
   :depends r-lattice: 
   :depends r-nsprcomp: 
   :depends r-precrec: 
   :depends r-ranger: 
   :depends r-rms: 
   :depends r-vioplot: 
   :depends r-xlsx: 
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

      mamba install bioconductor-biomm

   and update with::

      mamba update bioconductor-biomm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biomm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biomm:<tag>

   (see `bioconductor-biomm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biomm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biomm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biomm
   :alt:   (downloads)
.. |docker_bioconductor-biomm| image:: https://quay.io/repository/biocontainers/bioconductor-biomm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biomm
.. _`bioconductor-biomm/tags`: https://quay.io/repository/biocontainers/bioconductor-biomm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biomm";
        var versions = ["1.15.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biomm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biomm/README.html