:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnasense'
.. highlight: bash

bioconductor-rnasense
=====================

.. conda:recipe:: bioconductor-rnasense
   :replaces_section_title:
   :noindex:

   Analysis of Time\-Resolved RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RNAsense.html
   :license: GPL-3
   :recipe: /`bioconductor-rnasense <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnasense>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnasense/meta.yaml>`_

   RNA\-sense tool compares RNA\-seq time curves in two experimental conditions\, i.e. wild\-type and mutant\, and works in three steps. At Step 1\, it builds expression profile for each transcript in one condition \(i.e. wild\-type\) and tests if the transcript abundance grows or decays significantly. Dynamic transcripts are then sorted to non\-overlapping groups \(time profiles\) by the time point of switch up or down. At Step 2\, RNA\-sense outputs the groups of differentially expressed transcripts\, which are up\- or downregulated in the mutant compared to the wild\-type at each time point. At Step 3\, Correlations \(Fisher\'s exact test\) between the outputs of Step 1 \(switch up\- and switch down\- time profile groups\) and the outputs of Step2 \(differentially expressed transcript groups\) are calculated. The results of the correlation analysis are printed as two\-dimensional color plot\, with time profiles and differential expression groups at y\- and x\-axis\, respectively\, and facilitates the biological interpretation of the data.


.. conda:package:: bioconductor-rnasense

   |downloads_bioconductor-rnasense| |docker_bioconductor-rnasense|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-nbpseq: 
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

      mamba install bioconductor-rnasense

   and update with::

      mamba update bioconductor-rnasense

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnasense

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnasense:<tag>

   (see `bioconductor-rnasense/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnasense| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnasense.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnasense
   :alt:   (downloads)
.. |docker_bioconductor-rnasense| image:: https://quay.io/repository/biocontainers/bioconductor-rnasense/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnasense
.. _`bioconductor-rnasense/tags`: https://quay.io/repository/biocontainers/bioconductor-rnasense?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnasense";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnasense/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnasense/README.html