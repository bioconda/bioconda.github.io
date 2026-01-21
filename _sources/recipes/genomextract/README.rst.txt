:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomextract'
.. highlight: bash

genomextract
============

.. conda:recipe:: genomextract
   :replaces_section_title:
   :noindex:

   GenomeXtract \- A toolkit to easily find\, compare\, and assemble NCBI genomes.

   :homepage: https://github.com/KK260/GenomeXtract
   :license: GPL-3.0-only
   :recipe: /`genomextract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomextract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomextract/meta.yaml>`_

   


.. conda:package:: genomextract

   |downloads_genomextract| |docker_genomextract|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.2-0``

      

   
   :depends astral-tree: ``5.7.8``
   :depends biopython: 
   :depends iqtree: ``3.0.1``
   :depends mafft: ``7.525``
   :depends ncbi-datasets-cli: ``18.9.0``
   :depends openpyxl: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends raxml-ng: ``1.2.2``
   :depends requests: 
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

      mamba install genomextract

   and update with::

      mamba update genomextract

  To create a new environment, run::

      mamba create --name myenvname genomextract

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomextract:<tag>

   (see `genomextract/tags`_ for valid values for ``<tag>``)


.. |downloads_genomextract| image:: https://img.shields.io/conda/dn/bioconda/genomextract.svg?style=flat
   :target: https://anaconda.org/bioconda/genomextract
   :alt:   (downloads)
.. |docker_genomextract| image:: https://quay.io/repository/biocontainers/genomextract/status
   :target: https://quay.io/repository/biocontainers/genomextract
.. _`genomextract/tags`: https://quay.io/repository/biocontainers/genomextract?tab=tags


.. raw:: html

    <script>
        var package = "genomextract";
        var versions = ["0.1.5","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomextract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomextract/README.html