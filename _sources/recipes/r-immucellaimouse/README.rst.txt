:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-immucellaimouse'
.. highlight: bash

r-immucellaimouse
=================

.. conda:recipe:: r-immucellaimouse
   :replaces_section_title:
   :noindex:

   ImmuCellAI\-mouse is a tool to estimate the abundance of 36 immune cells based on gene expression profile from RNA\-Seq or microarray data.

   :homepage: https://github.com/lydiaMyr/ImmuCellAI-mouse
   :license: GPL / GPL
   :recipe: /`r-immucellaimouse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-immucellaimouse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-immucellaimouse/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab711`

   


.. conda:package:: r-immucellaimouse

   |downloads_r-immucellaimouse| |docker_r-immucellaimouse|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends bioconductor-gsva: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-mass: 
   :depends r-rcpp: ``>=0.12.14``
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

      mamba install r-immucellaimouse

   and update with::

      mamba update r-immucellaimouse

  To create a new environment, run::

      mamba create --name myenvname r-immucellaimouse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-immucellaimouse:<tag>

   (see `r-immucellaimouse/tags`_ for valid values for ``<tag>``)


.. |downloads_r-immucellaimouse| image:: https://img.shields.io/conda/dn/bioconda/r-immucellaimouse.svg?style=flat
   :target: https://anaconda.org/bioconda/r-immucellaimouse
   :alt:   (downloads)
.. |docker_r-immucellaimouse| image:: https://quay.io/repository/biocontainers/r-immucellaimouse/status
   :target: https://quay.io/repository/biocontainers/r-immucellaimouse
.. _`r-immucellaimouse/tags`: https://quay.io/repository/biocontainers/r-immucellaimouse?tab=tags


.. raw:: html

    <script>
        var package = "r-immucellaimouse";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-immucellaimouse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-immucellaimouse/README.html