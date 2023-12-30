:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocbook'
.. highlight: bash

bioconductor-biocbook
=====================

.. conda:recipe:: bioconductor-biocbook
   :replaces_section_title:
   :noindex:

   Write\, containerize\, publish and version Quarto books with Bioconductor

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BiocBook.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biocbook <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocbook>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocbook/meta.yaml>`_

   A BiocBook can be created by authors \(e.g. R developers\, but also scientists\, teachers\, communicators\, ...\) who wish to 1\) write \(compile a body of biological and\/or bioinformatics knowledge\)\, 2\) containerize \(provide Docker images to reproduce the examples illustrated in the compendium\)\, 3\) publish \(deploy an online book to disseminate the compendium\)\, and 4\) version \(automatically generate specific online book versions and Docker images for specific Bioconductor releases\).


.. conda:package:: bioconductor-biocbook

   |downloads_bioconductor-biocbook| |docker_bioconductor-biocbook|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends r-available: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cli: 
   :depends r-dplyr: 
   :depends r-gert: 
   :depends r-gh: 
   :depends r-gitcreds: 
   :depends r-glue: 
   :depends r-httr: 
   :depends r-purrr: 
   :depends r-quarto: 
   :depends r-renv: 
   :depends r-rlang: 
   :depends r-rprojroot: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-usethis: 
   :depends r-yaml: 
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

      mamba install bioconductor-biocbook

   and update with::

      mamba update bioconductor-biocbook

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocbook

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocbook:<tag>

   (see `bioconductor-biocbook/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocbook| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocbook.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocbook
   :alt:   (downloads)
.. |docker_bioconductor-biocbook| image:: https://quay.io/repository/biocontainers/bioconductor-biocbook/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocbook
.. _`bioconductor-biocbook/tags`: https://quay.io/repository/biocontainers/bioconductor-biocbook?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocbook";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocbook/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocbook/README.html