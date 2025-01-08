:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-updhmm'
.. highlight: bash

bioconductor-updhmm
===================

.. conda:recipe:: bioconductor-updhmm
   :replaces_section_title:
   :noindex:

   Detecting Uniparental Disomy through NGS trio data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/UPDhmm.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-updhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-updhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-updhmm/meta.yaml>`_

   Uniparental disomy \(UPD\) is a genetic condition where an individual inherits both copies of a chromosome or part of it from one parent\, rather than one copy from each parent. This package contains a HMM for detecting UPDs through HTS \(High Throughput Sequencing\) data from trio assays. By analyzing the genotypes in the trio\, the model infers a hidden state \(normal\, father isodisomy\, mother isodisomy\, father heterodisomy and mother heterodisomy\).


.. conda:package:: bioconductor-updhmm

   |downloads_bioconductor-updhmm| |docker_bioconductor-updhmm|

   :versions:
      
      

      

      

   
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

      mamba install bioconductor-updhmm

   and update with::

      mamba update bioconductor-updhmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-updhmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-updhmm:<tag>

   (see `bioconductor-updhmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-updhmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-updhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-updhmm
   :alt:   (downloads)
.. |docker_bioconductor-updhmm| image:: https://quay.io/repository/biocontainers/bioconductor-updhmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-updhmm
.. _`bioconductor-updhmm/tags`: https://quay.io/repository/biocontainers/bioconductor-updhmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-updhmm";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-updhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-updhmm/README.html