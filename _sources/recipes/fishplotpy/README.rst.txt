:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fishplotpy'
.. highlight: bash

fishplotpy
==========

.. conda:recipe:: fishplotpy
   :replaces_section_title:
   :noindex:

   A Python implementation for visualizing clonal evolution dynamics using fish plots

   :homepage: https://github.com/Sayitobar/fishplotpy
   :license: Apache / Apache-2.0
   :recipe: /`fishplotpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fishplotpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fishplotpy/meta.yaml>`_

   fishplotpy is a Python translation of the R package fishplot by Chris Miller et al.
   It provides functionality for calculating plot layout for clonal evolution and supports
   multiple plot shapes \(polygon\, spline\, bezier\) with customizable appearance and annotations.
   Designed for cancer genomics and evolutionary biology applications.



.. conda:package:: fishplotpy

   |downloads_fishplotpy| |docker_fishplotpy|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends scipy: 
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

      mamba install fishplotpy

   and update with::

      mamba update fishplotpy

  To create a new environment, run::

      mamba create --name myenvname fishplotpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fishplotpy:<tag>

   (see `fishplotpy/tags`_ for valid values for ``<tag>``)


.. |downloads_fishplotpy| image:: https://img.shields.io/conda/dn/bioconda/fishplotpy.svg?style=flat
   :target: https://anaconda.org/bioconda/fishplotpy
   :alt:   (downloads)
.. |docker_fishplotpy| image:: https://quay.io/repository/biocontainers/fishplotpy/status
   :target: https://quay.io/repository/biocontainers/fishplotpy
.. _`fishplotpy/tags`: https://quay.io/repository/biocontainers/fishplotpy?tab=tags


.. raw:: html

    <script>
        var package = "fishplotpy";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fishplotpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fishplotpy/README.html