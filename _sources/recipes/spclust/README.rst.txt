:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spclust'
.. highlight: bash

spclust
=======

.. conda:recipe:: spclust
   :replaces_section_title:
   :noindex:

   Spectral clustering for biological sequences

   :homepage: https://github.com/johnymatar/SpCLUST/
   :license: gpl-3.0-or-later
   :recipe: /`spclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spclust/meta.yaml>`_

   


.. conda:package:: spclust

   |downloads_spclust| |docker_spclust|

   :versions:
      
      

      ``28.5.19-1``,  ``28.5.19-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openmpi: ``>=4.1.6,<5.0a0``
   :depends openmpi-mpicxx: 
   :depends zlib: 
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

      mamba install spclust

   and update with::

      mamba update spclust

  To create a new environment, run::

      mamba create --name myenvname spclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spclust:<tag>

   (see `spclust/tags`_ for valid values for ``<tag>``)


.. |downloads_spclust| image:: https://img.shields.io/conda/dn/bioconda/spclust.svg?style=flat
   :target: https://anaconda.org/bioconda/spclust
   :alt:   (downloads)
.. |docker_spclust| image:: https://quay.io/repository/biocontainers/spclust/status
   :target: https://quay.io/repository/biocontainers/spclust
.. _`spclust/tags`: https://quay.io/repository/biocontainers/spclust?tab=tags


.. raw:: html

    <script>
        var package = "spclust";
        var versions = ["28.5.19","28.5.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spclust/README.html