:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kegg-pathways-completeness'
.. highlight: bash

kegg-pathways-completeness
==========================

.. conda:recipe:: kegg-pathways-completeness
   :replaces_section_title:
   :noindex:

   The tool counts completeness of each KEGG pathway for protein sequences.

   :homepage: https://github.com/EBI-Metagenomics/kegg-pathways-completeness-tool
   :license: Apache-2.0
   :recipe: /`kegg-pathways-completeness <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kegg-pathways-completeness>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kegg-pathways-completeness/meta.yaml>`_

   


.. conda:package:: kegg-pathways-completeness

   |downloads_kegg-pathways-completeness| |docker_kegg-pathways-completeness|

   :versions:
      
      

      ``1.2.1-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends biopython: ``>=1.83``
   :depends networkx: ``>=3.3``
   :depends pydot: ``>=3.0.3``
   :depends python: ``>=3.10``
   :depends python-graphviz: ``>=0.20.3``
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

      mamba install kegg-pathways-completeness

   and update with::

      mamba update kegg-pathways-completeness

  To create a new environment, run::

      mamba create --name myenvname kegg-pathways-completeness

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kegg-pathways-completeness:<tag>

   (see `kegg-pathways-completeness/tags`_ for valid values for ``<tag>``)


.. |downloads_kegg-pathways-completeness| image:: https://img.shields.io/conda/dn/bioconda/kegg-pathways-completeness.svg?style=flat
   :target: https://anaconda.org/bioconda/kegg-pathways-completeness
   :alt:   (downloads)
.. |docker_kegg-pathways-completeness| image:: https://quay.io/repository/biocontainers/kegg-pathways-completeness/status
   :target: https://quay.io/repository/biocontainers/kegg-pathways-completeness
.. _`kegg-pathways-completeness/tags`: https://quay.io/repository/biocontainers/kegg-pathways-completeness?tab=tags


.. raw:: html

    <script>
        var package = "kegg-pathways-completeness";
        var versions = ["1.2.1","1.0.5","1.0.4","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kegg-pathways-completeness/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kegg-pathways-completeness/README.html