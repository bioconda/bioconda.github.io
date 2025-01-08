:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deeptarget'
.. highlight: bash

bioconductor-deeptarget
=======================

.. conda:recipe:: bioconductor-deeptarget
   :replaces_section_title:
   :noindex:

   Deep characterization of cancer drugs

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DeepTarget.html
   :license: GPL-2
   :recipe: /`bioconductor-deeptarget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deeptarget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deeptarget/meta.yaml>`_

   This package predicts a drug’s primary target\(s\) or secondary target\(s\) by integrating large\-scale genetic and drug screens from the Cancer Dependency Map project run by the Broad Institute. It further investigates whether the drug specifically targets the wild\-type or mutated target forms. To show how to use this package in practice\, we provided sample data along with step\-by\-step example.


.. conda:package:: bioconductor-deeptarget

   |downloads_bioconductor-deeptarget| |docker_bioconductor-deeptarget|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-depmap: ``>=1.20.0,<1.21.0``
   :depends bioconductor-fgsea: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-proc: 
   :depends r-readr: 
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

      mamba install bioconductor-deeptarget

   and update with::

      mamba update bioconductor-deeptarget

  To create a new environment, run::

      mamba create --name myenvname bioconductor-deeptarget

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deeptarget:<tag>

   (see `bioconductor-deeptarget/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deeptarget| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deeptarget.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deeptarget
   :alt:   (downloads)
.. |docker_bioconductor-deeptarget| image:: https://quay.io/repository/biocontainers/bioconductor-deeptarget/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deeptarget
.. _`bioconductor-deeptarget/tags`: https://quay.io/repository/biocontainers/bioconductor-deeptarget?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deeptarget";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deeptarget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deeptarget/README.html