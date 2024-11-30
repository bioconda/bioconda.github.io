:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netactivity'
.. highlight: bash

bioconductor-netactivity
========================

.. conda:recipe:: bioconductor-netactivity
   :replaces_section_title:
   :noindex:

   Compute gene set scores from a deep learning framework

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/NetActivity.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-netactivity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netactivity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netactivity/meta.yaml>`_

   \#\' NetActivity enables to compute gene set scores from previously trained sparsely\-connected autoencoders. The package contains a function to prepare the data \(\`prepareSummarizedExperiment\`\) and a function to compute the gene set scores \(\`computeGeneSetScores\`\). The package \`NetActivityData\` contains different pre\-trained models to be directly applied to the data. Alternatively\, the users might use the package to compute gene set scores using custom models.


.. conda:package:: bioconductor-netactivity

   |downloads_bioconductor-netactivity| |docker_bioconductor-netactivity|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-airway: ``>=1.22.0,<1.23.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-netactivitydata: ``>=1.4.0,<1.5.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-netactivity

   and update with::

      mamba update bioconductor-netactivity

  To create a new environment, run::

      mamba create --name myenvname bioconductor-netactivity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netactivity:<tag>

   (see `bioconductor-netactivity/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netactivity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netactivity.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netactivity
   :alt:   (downloads)
.. |docker_bioconductor-netactivity| image:: https://quay.io/repository/biocontainers/bioconductor-netactivity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netactivity
.. _`bioconductor-netactivity/tags`: https://quay.io/repository/biocontainers/bioconductor-netactivity?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netactivity";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netactivity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netactivity/README.html