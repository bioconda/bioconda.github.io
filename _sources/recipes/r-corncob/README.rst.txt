:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-corncob'
.. highlight: bash

r-corncob
=========

.. conda:recipe:: r-corncob
   :replaces_section_title:
   :noindex:

   Statistical modeling for correlated count data using the beta\-binomial distribution\, described in Martin et al. \(2020\) \<doi\:10.1214\/19\-AOAS1283\>. It allows for both mean and overdispersion covariates.

   :homepage: https://github.com/bryandmartin/corncob
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-corncob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-corncob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-corncob/meta.yaml>`_

   


.. conda:package:: r-corncob

   |downloads_r-corncob| |docker_r-corncob|

   :versions:
      
      

      ``0.3.2-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends bioconductor-phyloseq: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-detectseparation: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-numderiv: 
   :depends r-optimr: 
   :depends r-scales: 
   :depends r-trust: 
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

      mamba install r-corncob

   and update with::

      mamba update r-corncob

  To create a new environment, run::

      mamba create --name myenvname r-corncob

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-corncob:<tag>

   (see `r-corncob/tags`_ for valid values for ``<tag>``)


.. |downloads_r-corncob| image:: https://img.shields.io/conda/dn/bioconda/r-corncob.svg?style=flat
   :target: https://anaconda.org/bioconda/r-corncob
   :alt:   (downloads)
.. |docker_r-corncob| image:: https://quay.io/repository/biocontainers/r-corncob/status
   :target: https://quay.io/repository/biocontainers/r-corncob
.. _`r-corncob/tags`: https://quay.io/repository/biocontainers/r-corncob?tab=tags


.. raw:: html

    <script>
        var package = "r-corncob";
        var versions = ["0.3.2","0.3.1","0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-corncob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-corncob/README.html