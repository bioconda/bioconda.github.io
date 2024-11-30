:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harmonypy'
.. highlight: bash

harmonypy
=========

.. conda:recipe:: harmonypy
   :replaces_section_title:
   :noindex:

   A data integration algorithm.

   :homepage: https://github.com/slowkow/harmonypy
   :license: GPL-3.0-or-later
   :recipe: /`harmonypy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harmonypy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harmonypy/meta.yaml>`_

   


.. conda:package:: harmonypy

   |downloads_harmonypy| |docker_harmonypy|

   :versions:
      
      

      ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scikit-learn: 
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

      mamba install harmonypy

   and update with::

      mamba update harmonypy

  To create a new environment, run::

      mamba create --name myenvname harmonypy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/harmonypy:<tag>

   (see `harmonypy/tags`_ for valid values for ``<tag>``)


.. |downloads_harmonypy| image:: https://img.shields.io/conda/dn/bioconda/harmonypy.svg?style=flat
   :target: https://anaconda.org/bioconda/harmonypy
   :alt:   (downloads)
.. |docker_harmonypy| image:: https://quay.io/repository/biocontainers/harmonypy/status
   :target: https://quay.io/repository/biocontainers/harmonypy
.. _`harmonypy/tags`: https://quay.io/repository/biocontainers/harmonypy?tab=tags


.. raw:: html

    <script>
        var package = "harmonypy";
        var versions = ["0.0.10","0.0.9","0.0.6","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harmonypy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harmonypy/README.html