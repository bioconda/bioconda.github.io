:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rtassel'
.. highlight: bash

r-rtassel
=========

.. conda:recipe:: r-rtassel
   :replaces_section_title:
   :noindex:

   R front\-end for TASSEL

   :homepage: https://bitbucket.org/bucklerlab/rtassel/wiki/Home
   :license: GPL3 / GNU GPL-3.0
   :recipe: /`r-rtassel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rtassel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rtassel/meta.yaml>`_

   


.. conda:package:: r-rtassel

   |downloads_r-rtassel| |docker_r-rtassel|

   :versions:
      
      

      ``0.1.2019.07.25-5``,  ``0.1.2019.07.25-4``,  ``0.1.2019.07.25-3``,  ``0.1.2019.07.25-2``,  ``0.1.2019.07.25-1``,  ``0.1.2019.07.25-0``

      

   
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bioconductor-summarizedexperiment: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-purrr: 
   :depends r-rjava: 
   :depends r-rlang: 
   :depends r-stringr: 
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

      mamba install r-rtassel

   and update with::

      mamba update r-rtassel

  To create a new environment, run::

      mamba create --name myenvname r-rtassel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-rtassel:<tag>

   (see `r-rtassel/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rtassel| image:: https://img.shields.io/conda/dn/bioconda/r-rtassel.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rtassel
   :alt:   (downloads)
.. |docker_r-rtassel| image:: https://quay.io/repository/biocontainers/r-rtassel/status
   :target: https://quay.io/repository/biocontainers/r-rtassel
.. _`r-rtassel/tags`: https://quay.io/repository/biocontainers/r-rtassel?tab=tags


.. raw:: html

    <script>
        var package = "r-rtassel";
        var versions = ["0.1.2019.07.25","0.1.2019.07.25","0.1.2019.07.25","0.1.2019.07.25","0.1.2019.07.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rtassel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rtassel/README.html