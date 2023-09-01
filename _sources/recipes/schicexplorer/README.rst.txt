:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'schicexplorer'
.. highlight: bash

schicexplorer
=============

.. conda:recipe:: schicexplorer
   :replaces_section_title:
   :noindex:

   Set of programs to process\, analyze and visualize single\-cell Hi\-C data.

   :homepage: https://github.com/joachimwolff/scHiCExplorer
   :license: GPL3
   :recipe: /`schicexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schicexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schicexplorer/meta.yaml>`_

   


.. conda:package:: schicexplorer

   |downloads_schicexplorer| |docker_schicexplorer|

   :versions:
      
      

      ``7-0``,  ``6-0``,  ``5-0``,  ``4-0``,  ``3-0``,  ``2-0``,  ``1-0``

      

   
   :depends cooler: ``>=0.8.10``
   :depends hicexplorer: ``>=3.6``
   :depends hicmatrix: ``>=15``
   :depends holoviews: 
   :depends hyperopt: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.18``
   :depends python: ``>3``
   :depends scikit-learn: ``>=0.22``
   :depends scipy: ``>=1.4``
   :depends sparse-neighbors-search: ``>=0.7``
   :depends umap-learn: 
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

      mamba install schicexplorer

   and update with::

      mamba update schicexplorer

  To create a new environment, run::

      mamba create --name myenvname schicexplorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/schicexplorer:<tag>

   (see `schicexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_schicexplorer| image:: https://img.shields.io/conda/dn/bioconda/schicexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/schicexplorer
   :alt:   (downloads)
.. |docker_schicexplorer| image:: https://quay.io/repository/biocontainers/schicexplorer/status
   :target: https://quay.io/repository/biocontainers/schicexplorer
.. _`schicexplorer/tags`: https://quay.io/repository/biocontainers/schicexplorer?tab=tags


.. raw:: html

    <script>
        var package = "schicexplorer";
        var versions = ["7","6","5","4","3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/schicexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/schicexplorer/README.html