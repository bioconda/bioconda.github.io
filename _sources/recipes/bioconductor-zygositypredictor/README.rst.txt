:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zygositypredictor'
.. highlight: bash

bioconductor-zygositypredictor
==============================

.. conda:recipe:: bioconductor-zygositypredictor
   :replaces_section_title:
   :noindex:

   Package for prediction of zygosity for variants\/genes in NGS data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ZygosityPredictor.html
   :license: GPL-2
   :recipe: /`bioconductor-zygositypredictor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zygositypredictor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zygositypredictor/meta.yaml>`_

   The ZygosityPredictor allows to predict how many copies of a gene are affected by small variants. In addition to the basic calculations of the affected copy number of a variant\, the Zygosity\-Predictor can integrate the influence of several variants on a gene and ultimately make a statement if and how many wild\-type copies of the gene are left. This information proves to be of particular use in the context of translational medicine. For example\, in cancer genomes\, the Zygosity\-Predictor can address whether unmutated copies of tumor\-suppressor genes are present. Beyond this\, it is possible to make this statement for all genes of an organism. The Zygosity\-Predictor was primarily developed to handle SNVs and INDELs \(later addressed as small\-variants\) of somatic and germline origin. In order not to overlook severe effects outside of the small\-variant context\, it has been extended with the assessment of large scale deletions\, which cause losses of whole genes or parts of them.


.. conda:package:: bioconductor-zygositypredictor

   |downloads_bioconductor-zygositypredictor| |docker_bioconductor-zygositypredictor|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.3-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-stringr: 
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

      mamba install bioconductor-zygositypredictor

   and update with::

      mamba update bioconductor-zygositypredictor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-zygositypredictor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-zygositypredictor:<tag>

   (see `bioconductor-zygositypredictor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-zygositypredictor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zygositypredictor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zygositypredictor
   :alt:   (downloads)
.. |docker_bioconductor-zygositypredictor| image:: https://quay.io/repository/biocontainers/bioconductor-zygositypredictor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zygositypredictor
.. _`bioconductor-zygositypredictor/tags`: https://quay.io/repository/biocontainers/bioconductor-zygositypredictor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-zygositypredictor";
        var versions = ["1.6.0","1.2.0","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zygositypredictor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zygositypredictor/README.html