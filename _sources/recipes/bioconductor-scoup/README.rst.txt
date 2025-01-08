:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scoup'
.. highlight: bash

bioconductor-scoup
==================

.. conda:recipe:: bioconductor-scoup
   :replaces_section_title:
   :noindex:

   Simulate Codons with Darwinian Selection Modelled as an OU Process

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scoup.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-scoup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scoup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scoup/meta.yaml>`_

   An elaborate molecular evolutionary framework that facilitates straightforward simulation of codon genetic sequences subjected to different degrees and\/or patterns of Darwinian selection. The model was built upon the fitness landscape paradigm of Sewall Wright\, as popularised by the mutation\-selection model of Halpern and Bruno. This enabled realistic evolutionary process of living organisms to be reproduced seamlessly. For example\, an Ornstein\-Uhlenbeck fitness update algorithm is incorporated herein. Consequently\, otherwise complex biological processes\, such as the effect of the interplay between genetic drift and mutation on the inference of diversifying selection\, may now be investigated with minimal effort. Frequency\-dependent and deterministic fitness landscape update techniques are also available.


.. conda:package:: bioconductor-scoup

   |downloads_bioconductor-scoup| |docker_bioconductor-scoup|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: 
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

      mamba install bioconductor-scoup

   and update with::

      mamba update bioconductor-scoup

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scoup

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scoup:<tag>

   (see `bioconductor-scoup/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scoup| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scoup.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scoup
   :alt:   (downloads)
.. |docker_bioconductor-scoup| image:: https://quay.io/repository/biocontainers/bioconductor-scoup/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scoup
.. _`bioconductor-scoup/tags`: https://quay.io/repository/biocontainers/bioconductor-scoup?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scoup";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scoup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scoup/README.html