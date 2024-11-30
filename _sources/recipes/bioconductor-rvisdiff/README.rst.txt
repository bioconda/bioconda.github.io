:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rvisdiff'
.. highlight: bash

bioconductor-rvisdiff
=====================

.. conda:recipe:: bioconductor-rvisdiff
   :replaces_section_title:
   :noindex:

   Interactive Graphs for Differential Expression

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Rvisdiff.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-rvisdiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rvisdiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rvisdiff/meta.yaml>`_

   Creates a muti\-graph web page which allows the interactive exploration of differential expression results. The graphical web interface presents results as a table which is integrated with five interactive graphs\: MA\-plot\, volcano plot\, box plot\, lines plot and cluster heatmap. Graphical aspect and information represented in the graphs can be customized by means of user controls. Final graphics can be exported as PNG format.


.. conda:package:: bioconductor-rvisdiff

   |downloads_bioconductor-rvisdiff| |docker_bioconductor-rvisdiff|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-rvisdiff

   and update with::

      mamba update bioconductor-rvisdiff

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rvisdiff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rvisdiff:<tag>

   (see `bioconductor-rvisdiff/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rvisdiff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rvisdiff.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rvisdiff
   :alt:   (downloads)
.. |docker_bioconductor-rvisdiff| image:: https://quay.io/repository/biocontainers/bioconductor-rvisdiff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rvisdiff
.. _`bioconductor-rvisdiff/tags`: https://quay.io/repository/biocontainers/bioconductor-rvisdiff?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rvisdiff";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rvisdiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rvisdiff/README.html