:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biomartgogenesets'
.. highlight: bash

bioconductor-biomartgogenesets
==============================

.. conda:recipe:: bioconductor-biomartgogenesets
   :replaces_section_title:
   :noindex:

   Gene Ontology Gene Sets from BioMart

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/BioMartGOGeneSets.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biomartgogenesets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomartgogenesets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomartgogenesets/meta.yaml>`_

   It contains pre\-compiled Gene Ontology gene sets for all organisms available on the Ensembl database. It also includes GO gene sets for organisms on Ensembl Plants\, Ensembl Metazoa\, Ensembl Fungi and Ensembl Protists. The data was collected with the biomaRt package.


.. conda:package:: bioconductor-biomartgogenesets

   |downloads_bioconductor-biomartgogenesets| |docker_bioconductor-biomartgogenesets|

   :versions:
      
      

      ``0.99.11-1``,  ``0.99.11-0``

      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends curl: 
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

      mamba install bioconductor-biomartgogenesets

   and update with::

      mamba update bioconductor-biomartgogenesets

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biomartgogenesets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biomartgogenesets:<tag>

   (see `bioconductor-biomartgogenesets/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biomartgogenesets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biomartgogenesets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biomartgogenesets
   :alt:   (downloads)
.. |docker_bioconductor-biomartgogenesets| image:: https://quay.io/repository/biocontainers/bioconductor-biomartgogenesets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biomartgogenesets
.. _`bioconductor-biomartgogenesets/tags`: https://quay.io/repository/biocontainers/bioconductor-biomartgogenesets?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biomartgogenesets";
        var versions = ["0.99.11","0.99.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biomartgogenesets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biomartgogenesets/README.html