:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simona'
.. highlight: bash

bioconductor-simona
===================

.. conda:recipe:: bioconductor-simona
   :replaces_section_title:
   :noindex:

   Semantic Similarity in Bio\-Ontologies

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/simona.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-simona <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simona>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simona/meta.yaml>`_

   This package implements infrastructures for ontology analysis by offering efficient data structures\, fast ontology traversal methods\, and elegant visualizations. It provides a robust toolbox supporting over 70 methods for semantic similarity analysis.


.. conda:package:: bioconductor-simona

   |downloads_bioconductor-simona| |docker_bioconductor-simona|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl: ``>=5.6.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-getoptlong: 
   :depends r-globaloptions: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-polychrome: 
   :depends r-rcpp: 
   :depends r-xml2: ``>=1.3.3``
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

      mamba install bioconductor-simona

   and update with::

      mamba update bioconductor-simona

  To create a new environment, run::

      mamba create --name myenvname bioconductor-simona

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simona:<tag>

   (see `bioconductor-simona/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simona| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simona.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simona
   :alt:   (downloads)
.. |docker_bioconductor-simona| image:: https://quay.io/repository/biocontainers/bioconductor-simona/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simona
.. _`bioconductor-simona/tags`: https://quay.io/repository/biocontainers/bioconductor-simona?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simona";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simona/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simona/README.html