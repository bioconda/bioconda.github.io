:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hilbertvisgui'
.. highlight: bash

bioconductor-hilbertvisgui
==========================

.. conda:recipe:: bioconductor-hilbertvisgui
   :replaces_section_title:
   :noindex:

   HilbertVisGUI

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HilbertVisGUI.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-hilbertvisgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertvisgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertvisgui/meta.yaml>`_

   An interactive tool to visualize long vectors of integer data by means of Hilbert curves


.. conda:package:: bioconductor-hilbertvisgui

   |downloads_bioconductor-hilbertvisgui| |docker_bioconductor-hilbertvisgui|

   :versions:
      
      

      

      

   
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

      mamba install bioconductor-hilbertvisgui

   and update with::

      mamba update bioconductor-hilbertvisgui

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hilbertvisgui

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hilbertvisgui:<tag>

   (see `bioconductor-hilbertvisgui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hilbertvisgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hilbertvisgui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hilbertvisgui
   :alt:   (downloads)
.. |docker_bioconductor-hilbertvisgui| image:: https://quay.io/repository/biocontainers/bioconductor-hilbertvisgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hilbertvisgui
.. _`bioconductor-hilbertvisgui/tags`: https://quay.io/repository/biocontainers/bioconductor-hilbertvisgui?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hilbertvisgui";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hilbertvisgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hilbertvisgui/README.html