:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scavenge'
.. highlight: bash

r-scavenge
==========

.. conda:recipe:: r-scavenge
   :replaces_section_title:
   :noindex:

   SCAVENGE \(Single Cell Analysis of Variant Enrichment through Network propagation of GEnomic data\) optimizes the inference of functional and genetic associations to specific cells at single\-cell resolution.

   :homepage: https://github.com/sankaranlab/SCAVENGE
   :license: GPL / GPL-2.0-or-later
   :recipe: /`r-scavenge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scavenge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scavenge/meta.yaml>`_

   


.. conda:package:: r-scavenge

   |downloads_r-scavenge| |docker_r-scavenge|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends bioconductor-summarizedexperiment: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gchromvar: 
   :depends r-igraph: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-rann: 
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

      mamba install r-scavenge

   and update with::

      mamba update r-scavenge

  To create a new environment, run::

      mamba create --name myenvname r-scavenge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-scavenge:<tag>

   (see `r-scavenge/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scavenge| image:: https://img.shields.io/conda/dn/bioconda/r-scavenge.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scavenge
   :alt:   (downloads)
.. |docker_r-scavenge| image:: https://quay.io/repository/biocontainers/r-scavenge/status
   :target: https://quay.io/repository/biocontainers/r-scavenge
.. _`r-scavenge/tags`: https://quay.io/repository/biocontainers/r-scavenge?tab=tags


.. raw:: html

    <script>
        var package = "r-scavenge";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scavenge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scavenge/README.html