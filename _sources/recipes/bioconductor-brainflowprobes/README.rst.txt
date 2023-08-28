:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brainflowprobes'
.. highlight: bash

bioconductor-brainflowprobes
============================

.. conda:recipe:: bioconductor-brainflowprobes
   :replaces_section_title:
   :noindex:

   Plots and annotation for choosing BrainFlow target probe sequence

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/brainflowprobes.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-brainflowprobes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainflowprobes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainflowprobes/meta.yaml>`_

   Use these functions to characterize genomic regions for BrainFlow target probe design.


.. conda:package:: bioconductor-brainflowprobes

   |downloads_bioconductor-brainflowprobes| |docker_bioconductor-brainflowprobes|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bumphunter: ``>=1.42.0,<1.43.0``
   :depends bioconductor-derfinder: ``>=1.34.0,<1.35.0``
   :depends bioconductor-derfinderplot: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicstate: ``>=0.99.0,<0.100.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: ``>=1.0.0``
   :depends r-ggplot2: ``>=3.1.1``
   :depends r-rcolorbrewer: ``>=1.1``
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

      mamba install bioconductor-brainflowprobes

   and update with::

      mamba update bioconductor-brainflowprobes

  To create a new environment, run::

      mamba create --name myenvname bioconductor-brainflowprobes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-brainflowprobes:<tag>

   (see `bioconductor-brainflowprobes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-brainflowprobes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brainflowprobes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brainflowprobes
   :alt:   (downloads)
.. |docker_bioconductor-brainflowprobes| image:: https://quay.io/repository/biocontainers/bioconductor-brainflowprobes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brainflowprobes
.. _`bioconductor-brainflowprobes/tags`: https://quay.io/repository/biocontainers/bioconductor-brainflowprobes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-brainflowprobes";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brainflowprobes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brainflowprobes/README.html