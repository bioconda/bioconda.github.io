:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-semdist'
.. highlight: bash

bioconductor-semdist
====================

.. conda:recipe:: bioconductor-semdist
   :replaces_section_title:
   :noindex:

   Information Accretion\-based Function Predictor Evaluation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SemDist.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-semdist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-semdist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-semdist/meta.yaml>`_
   :links: biotools: :biotools:`semdist`, doi: :doi:`10.1038/nmeth.3252`

   This package implements methods to calculate information accretion for a given version of the gene ontology and uses this data to calculate remaining uncertainty\, misinformation\, and semantic similarity for given sets of predicted annotations and true annotations from a protein function predictor.


.. conda:package:: bioconductor-semdist

   |downloads_bioconductor-semdist| |docker_bioconductor-semdist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.84.0,<1.85.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-semdist

   and update with::

      mamba update bioconductor-semdist

  To create a new environment, run::

      mamba create --name myenvname bioconductor-semdist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-semdist:<tag>

   (see `bioconductor-semdist/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-semdist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-semdist.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-semdist
   :alt:   (downloads)
.. |docker_bioconductor-semdist| image:: https://quay.io/repository/biocontainers/bioconductor-semdist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-semdist
.. _`bioconductor-semdist/tags`: https://quay.io/repository/biocontainers/bioconductor-semdist?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-semdist";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-semdist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-semdist/README.html