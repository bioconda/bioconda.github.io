:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangenomerge'
.. highlight: bash

pangenomerge
============

.. conda:recipe:: pangenomerge
   :replaces_section_title:
   :noindex:

   Create pangenome gene graphs for hundreds of thousands of bacterial genomes

   :homepage: https://github.com/qtoussaint/pangenome_merge
   :license: MIT
   :recipe: /`pangenomerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangenomerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangenomerge/meta.yaml>`_

   


.. conda:package:: pangenomerge

   |downloads_pangenomerge| |docker_pangenomerge|

   :versions:
      
      

      ``0.9.0-0``

      

   
   :depends biopython: ``>=1.80``
   :depends edlib: 
   :depends mmseqs2: 
   :depends networkx: ``>=3.4.2``
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends tqdm: 
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

      mamba install pangenomerge

   and update with::

      mamba update pangenomerge

  To create a new environment, run::

      mamba create --name myenvname pangenomerge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pangenomerge:<tag>

   (see `pangenomerge/tags`_ for valid values for ``<tag>``)


.. |downloads_pangenomerge| image:: https://img.shields.io/conda/dn/bioconda/pangenomerge.svg?style=flat
   :target: https://anaconda.org/bioconda/pangenomerge
   :alt:   (downloads)
.. |docker_pangenomerge| image:: https://quay.io/repository/biocontainers/pangenomerge/status
   :target: https://quay.io/repository/biocontainers/pangenomerge
.. _`pangenomerge/tags`: https://quay.io/repository/biocontainers/pangenomerge?tab=tags


.. raw:: html

    <script>
        var package = "pangenomerge";
        var versions = ["0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangenomerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangenomerge/README.html