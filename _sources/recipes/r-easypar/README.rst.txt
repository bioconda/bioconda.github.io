:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-easypar'
.. highlight: bash

r-easypar
=========

.. conda:recipe:: r-easypar
   :replaces_section_title:
   :noindex:

   The easypar package makes it easy to implement parallel computations in R. To use this package\, you need to have a function that carries out your desired computation. easypar will take care of the burden of turning that function into a runnable parallel piece of code\, offering a soilution based on the foreach and doParallel paradigms for parallel computing\, or generating array jobs for the popular LSF workload for distributed high performance computing.

   :homepage: https://caravagnalab.github.io/easypar/
   :developer docs: https://github.com/caravagn/easypar
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-easypar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-easypar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-easypar/meta.yaml>`_

   


.. conda:package:: r-easypar

   |downloads_r-easypar| |docker_r-easypar|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-crayon: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-markdown: 
   :depends r-prettydoc: 
   :depends r-progress: 
   :depends r-readr: 
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

      mamba install r-easypar

   and update with::

      mamba update r-easypar

  To create a new environment, run::

      mamba create --name myenvname r-easypar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-easypar:<tag>

   (see `r-easypar/tags`_ for valid values for ``<tag>``)


.. |downloads_r-easypar| image:: https://img.shields.io/conda/dn/bioconda/r-easypar.svg?style=flat
   :target: https://anaconda.org/bioconda/r-easypar
   :alt:   (downloads)
.. |docker_r-easypar| image:: https://quay.io/repository/biocontainers/r-easypar/status
   :target: https://quay.io/repository/biocontainers/r-easypar
.. _`r-easypar/tags`: https://quay.io/repository/biocontainers/r-easypar?tab=tags


.. raw:: html

    <script>
        var package = "r-easypar";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-easypar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-easypar/README.html