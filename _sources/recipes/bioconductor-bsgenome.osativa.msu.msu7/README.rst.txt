:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.osativa.msu.msu7'
.. highlight: bash

bioconductor-bsgenome.osativa.msu.msu7
======================================

.. conda:recipe:: bioconductor-bsgenome.osativa.msu.msu7
   :replaces_section_title:
   :noindex:

   Oryza sativa full genome \(MSU7\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/BSgenome.Osativa.MSU.MSU7.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.osativa.msu.msu7 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.osativa.msu.msu7>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.osativa.msu.msu7/meta.yaml>`_

   Oryza sativa full genome as provided by MSU \(MSU7 Genome Release\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.osativa.msu.msu7

   |downloads_bioconductor-bsgenome.osativa.msu.msu7| |docker_bioconductor-bsgenome.osativa.msu.msu7|

   :versions:
      
      

      ``0.99.2-4``,  ``0.99.2-3``,  ``0.99.2-2``,  ``0.99.2-1``,  ``0.99.2-0``,  ``0.99.1-4``,  ``0.99.1-3``,  ``0.99.1-2``,  ``0.99.1-0``

      

   
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

      mamba install bioconductor-bsgenome.osativa.msu.msu7

   and update with::

      mamba update bioconductor-bsgenome.osativa.msu.msu7

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.osativa.msu.msu7

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.osativa.msu.msu7:<tag>

   (see `bioconductor-bsgenome.osativa.msu.msu7/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.osativa.msu.msu7| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.osativa.msu.msu7.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.osativa.msu.msu7
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.osativa.msu.msu7| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.osativa.msu.msu7/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.osativa.msu.msu7
.. _`bioconductor-bsgenome.osativa.msu.msu7/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.osativa.msu.msu7?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.osativa.msu.msu7";
        var versions = ["0.99.2","0.99.2","0.99.2","0.99.2","0.99.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.osativa.msu.msu7/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.osativa.msu.msu7/README.html