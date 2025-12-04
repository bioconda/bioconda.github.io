:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arborist'
.. highlight: bash

arborist
========

.. conda:recipe:: arborist
   :replaces_section_title:
   :noindex:

   Arborist is a tool to rank SNV phylogenies inferred from bulk DNA sequencing via scDNA\-seq data

   :homepage: https://github.com/VanLoo-lab/Arborist
   :license: BSD-3-Clause
   :recipe: /`arborist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arborist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arborist/meta.yaml>`_

   


.. conda:package:: arborist

   |downloads_arborist| |docker_arborist|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends networkx: ``>=3.6``
   :depends numba: ``>=0.61,<0.62``
   :depends numpy: ``>=1.26``
   :depends pandas: ``>=1.3,<3.0``
   :depends pygraphviz: 
   :depends python: ``>=3.7``
   :depends scipy: ``>=1.7``
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

      mamba install arborist

   and update with::

      mamba update arborist

  To create a new environment, run::

      mamba create --name myenvname arborist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/arborist:<tag>

   (see `arborist/tags`_ for valid values for ``<tag>``)


.. |downloads_arborist| image:: https://img.shields.io/conda/dn/bioconda/arborist.svg?style=flat
   :target: https://anaconda.org/bioconda/arborist
   :alt:   (downloads)
.. |docker_arborist| image:: https://quay.io/repository/biocontainers/arborist/status
   :target: https://quay.io/repository/biocontainers/arborist
.. _`arborist/tags`: https://quay.io/repository/biocontainers/arborist?tab=tags


.. raw:: html

    <script>
        var package = "arborist";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arborist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arborist/README.html