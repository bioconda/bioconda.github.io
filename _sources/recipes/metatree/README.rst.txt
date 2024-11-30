:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metatree'
.. highlight: bash

metatree
========

.. conda:recipe:: metatree
   :replaces_section_title:
   :noindex:

   Visualisation of polyphyletic groups between phylogenetic trees to a reference tree.

   :homepage: https://github.com/aaronmussig/metatree
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`metatree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metatree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metatree/meta.yaml>`_

   


.. conda:package:: metatree

   |downloads_metatree| |docker_metatree|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends biolib: ``>=0.1.0``
   :depends biopython: 
   :depends dendropy: ``>=4.1.0``
   :depends ete3: 
   :depends genometreetk: ``>0.1.2``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends phylorank: ``>0.1.0``
   :depends python: ``>=3.6``
   :depends scipy: 
   :depends seaborn: 
   :depends tqdm: ``>=4.31.0``
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

      mamba install metatree

   and update with::

      mamba update metatree

  To create a new environment, run::

      mamba create --name myenvname metatree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metatree:<tag>

   (see `metatree/tags`_ for valid values for ``<tag>``)


.. |downloads_metatree| image:: https://img.shields.io/conda/dn/bioconda/metatree.svg?style=flat
   :target: https://anaconda.org/bioconda/metatree
   :alt:   (downloads)
.. |docker_metatree| image:: https://quay.io/repository/biocontainers/metatree/status
   :target: https://quay.io/repository/biocontainers/metatree
.. _`metatree/tags`: https://quay.io/repository/biocontainers/metatree?tab=tags


.. raw:: html

    <script>
        var package = "metatree";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metatree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metatree/README.html