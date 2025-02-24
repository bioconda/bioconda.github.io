:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfviewer'
.. highlight: bash

gfviewer
========

.. conda:recipe:: gfviewer
   :replaces_section_title:
   :noindex:

   A bioinformatics tool for visualizing the localization of multi\-gene families across the genome of a given organism.

   :homepage: https://github.com/sakshar/GFViewer
   :license: MIT
   :recipe: /`gfviewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfviewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfviewer/meta.yaml>`_

   This tool is designed for processing genomic data\, visualizing chromosomes\,
   and localizing multi\-gene families using Biopython and Matplotlib.



.. conda:package:: gfviewer

   |downloads_gfviewer| |docker_gfviewer|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pypdf2: 
   :depends python: ``>=3.8,<3.13``
   :depends reportlab: 
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

      mamba install gfviewer

   and update with::

      mamba update gfviewer

  To create a new environment, run::

      mamba create --name myenvname gfviewer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gfviewer:<tag>

   (see `gfviewer/tags`_ for valid values for ``<tag>``)


.. |downloads_gfviewer| image:: https://img.shields.io/conda/dn/bioconda/gfviewer.svg?style=flat
   :target: https://anaconda.org/bioconda/gfviewer
   :alt:   (downloads)
.. |docker_gfviewer| image:: https://quay.io/repository/biocontainers/gfviewer/status
   :target: https://quay.io/repository/biocontainers/gfviewer
.. _`gfviewer/tags`: https://quay.io/repository/biocontainers/gfviewer?tab=tags


.. raw:: html

    <script>
        var package = "gfviewer";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfviewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfviewer/README.html