:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plyinteractions'
.. highlight: bash

bioconductor-plyinteractions
============================

.. conda:recipe:: bioconductor-plyinteractions
   :replaces_section_title:
   :noindex:

   Extending tidy verbs to genomic interactions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/plyinteractions.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-plyinteractions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plyinteractions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plyinteractions/meta.yaml>`_

   Operate on \`GInteractions\` objects as tabular data using \`dplyr\`\-like verbs. The functions and methods in \`plyinteractions\` provide a grammatical approach to manipulate \`GInteractions\`\, to facilitate their integration in genomic analysis workflows.


.. conda:package:: bioconductor-plyinteractions

   |downloads_bioconductor-plyinteractions| |docker_bioconductor-plyinteractions|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-plyranges: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyselect: 
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

      mamba install bioconductor-plyinteractions

   and update with::

      mamba update bioconductor-plyinteractions

  To create a new environment, run::

      mamba create --name myenvname bioconductor-plyinteractions

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plyinteractions:<tag>

   (see `bioconductor-plyinteractions/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plyinteractions| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plyinteractions.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plyinteractions
   :alt:   (downloads)
.. |docker_bioconductor-plyinteractions| image:: https://quay.io/repository/biocontainers/bioconductor-plyinteractions/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plyinteractions
.. _`bioconductor-plyinteractions/tags`: https://quay.io/repository/biocontainers/bioconductor-plyinteractions?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plyinteractions";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plyinteractions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plyinteractions/README.html