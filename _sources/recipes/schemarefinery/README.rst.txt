:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'schemarefinery'
.. highlight: bash

schemarefinery
==============

.. conda:recipe:: schemarefinery
   :replaces_section_title:
   :noindex:

   Tool to refine cg\/wgMLST Schemas.

   :homepage: https://github.com/B-UMMI/Schema_Refinery
   :documentation: https://schema-refinery.readthedocs.io/en/latest/index.html
   
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`schemarefinery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schemarefinery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schemarefinery/meta.yaml>`_

   The SchemaRefinery is a comprehensive toolkit designed for refining and managing genomic schemas. It provides a suite of modules for various tasks such as identifying paralogous loci\, downloading genomic assemblies\, and adapting loci into standardized schemas.


.. conda:package:: schemarefinery

   |downloads_schemarefinery| |docker_schemarefinery|

   :versions:
      
      

      ``0.3.3.1-0``

      

   
   :depends biopython: ``>=1.79``
   :depends blast: ``>=2.9.0``
   :depends chewbbaca: ``>=3.3.10``
   :depends ncbi-datasets-cli: ``>=18.3.1``
   :depends networkx: ``>=2.6.0,<3.0.0``
   :depends numpy: ``>=1.24.3,<2.0.0``
   :depends pandas: ``>=1.5.1,<2.0.0``
   :depends plotly: ``>=5.8.0``
   :depends psutil: ``>=5.1.1``
   :depends python: ``>=3.9,<3.14``
   :depends requests: ``>=2.27.1``
   :depends scipy: ``>=1.10.1``
   :depends tqdm: ``>=4.62.0``
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

      mamba install schemarefinery

   and update with::

      mamba update schemarefinery

  To create a new environment, run::

      mamba create --name myenvname schemarefinery

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/schemarefinery:<tag>

   (see `schemarefinery/tags`_ for valid values for ``<tag>``)


.. |downloads_schemarefinery| image:: https://img.shields.io/conda/dn/bioconda/schemarefinery.svg?style=flat
   :target: https://anaconda.org/bioconda/schemarefinery
   :alt:   (downloads)
.. |docker_schemarefinery| image:: https://quay.io/repository/biocontainers/schemarefinery/status
   :target: https://quay.io/repository/biocontainers/schemarefinery
.. _`schemarefinery/tags`: https://quay.io/repository/biocontainers/schemarefinery?tab=tags


.. raw:: html

    <script>
        var package = "schemarefinery";
        var versions = ["0.3.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/schemarefinery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/schemarefinery/README.html