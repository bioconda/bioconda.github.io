:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpip'
.. highlight: bash

bioconductor-hpip
=================

.. conda:recipe:: bioconductor-hpip
   :replaces_section_title:
   :noindex:

   Host\-Pathogen Interaction Prediction

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HPiP.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hpip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpip/meta.yaml>`_

   HPiP \(Host\-Pathogen Interaction Prediction\) uses an ensemble learning algorithm for prediction of host\-pathogen protein\-protein interactions \(HP\-PPIs\) using structural and physicochemical descriptors computed from amino acid\-composition of host and pathogen proteins.The proposed package can effectively address data shortages and data unavailability for HP\-PPI network reconstructions. Moreover\, establishing computational frameworks in that regard will reveal mechanistic insights into infectious diseases and suggest potential HP\-PPI targets\, thus narrowing down the range of possible candidates for subsequent wet\-lab experimental validations.


.. conda:package:: bioconductor-hpip

   |downloads_bioconductor-hpip| |docker_bioconductor-hpip|

   :versions:
      
      

      ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-corrplot: 
   :depends r-dplyr: ``>=1.0.6``
   :depends r-ggplot2: 
   :depends r-httr: ``>=1.4.2``
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-mcl: 
   :depends r-proc: 
   :depends r-protr: 
   :depends r-prroc: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-hpip

   and update with::

      mamba update bioconductor-hpip

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hpip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hpip:<tag>

   (see `bioconductor-hpip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hpip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hpip
   :alt:   (downloads)
.. |docker_bioconductor-hpip| image:: https://quay.io/repository/biocontainers/bioconductor-hpip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpip
.. _`bioconductor-hpip/tags`: https://quay.io/repository/biocontainers/bioconductor-hpip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hpip";
        var versions = ["1.8.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpip/README.html