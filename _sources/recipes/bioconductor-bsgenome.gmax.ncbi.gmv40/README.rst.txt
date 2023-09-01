:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.gmax.ncbi.gmv40'
.. highlight: bash

bioconductor-bsgenome.gmax.ncbi.gmv40
=====================================

.. conda:recipe:: bioconductor-bsgenome.gmax.ncbi.gmv40
   :replaces_section_title:
   :noindex:

   Full genome sequences for Glycine max \(Gmv40\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/BSgenome.Gmax.NCBI.Gmv40.html
   :license: Creative Commons Legal Code + file LICENSE
   :recipe: /`bioconductor-bsgenome.gmax.ncbi.gmv40 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.gmax.ncbi.gmv40>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.gmax.ncbi.gmv40/meta.yaml>`_

   Full genome sequences for Glycine max as provided by NCBI \(assembly Glycine\_max\_v4.0\, assembly accession GCF\_000004515.5\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.gmax.ncbi.gmv40

   |downloads_bioconductor-bsgenome.gmax.ncbi.gmv40| |docker_bioconductor-bsgenome.gmax.ncbi.gmv40|

   :versions:
      
      

      ``4.0-1``,  ``4.0-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-bsgenome.gmax.ncbi.gmv40

   and update with::

      mamba update bioconductor-bsgenome.gmax.ncbi.gmv40

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.gmax.ncbi.gmv40

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.gmax.ncbi.gmv40:<tag>

   (see `bioconductor-bsgenome.gmax.ncbi.gmv40/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.gmax.ncbi.gmv40| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.gmax.ncbi.gmv40.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.gmax.ncbi.gmv40
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.gmax.ncbi.gmv40| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.gmax.ncbi.gmv40/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.gmax.ncbi.gmv40
.. _`bioconductor-bsgenome.gmax.ncbi.gmv40/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.gmax.ncbi.gmv40?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.gmax.ncbi.gmv40";
        var versions = ["4.0","4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.gmax.ncbi.gmv40/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.gmax.ncbi.gmv40/README.html