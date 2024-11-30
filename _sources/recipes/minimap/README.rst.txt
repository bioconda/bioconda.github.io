:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minimap'
.. highlight: bash

minimap
=======

.. conda:recipe:: minimap
   :replaces_section_title:
   :noindex:

   Experimental tool to find approximate mapping positions between long sequences

   :homepage: https://github.com/lh3/minimap
   :license: MIT
   :recipe: /`minimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap/meta.yaml>`_

   


.. conda:package:: minimap

   |downloads_minimap| |docker_minimap|

   :versions:
      
      

      ``0.2-0``,  ``0.2_r124-7``,  ``0.2_r124-6``,  ``0.2_r124-5``,  ``0.2_r124-4``,  ``0.2_r124-3``,  ``0.2_r124-2``,  ``0.2_r124-1``,  ``0.2_r124-0``

      

   
   :depends libgcc: 
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

      mamba install minimap

   and update with::

      mamba update minimap

  To create a new environment, run::

      mamba create --name myenvname minimap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minimap:<tag>

   (see `minimap/tags`_ for valid values for ``<tag>``)


.. |downloads_minimap| image:: https://img.shields.io/conda/dn/bioconda/minimap.svg?style=flat
   :target: https://anaconda.org/bioconda/minimap
   :alt:   (downloads)
.. |docker_minimap| image:: https://quay.io/repository/biocontainers/minimap/status
   :target: https://quay.io/repository/biocontainers/minimap
.. _`minimap/tags`: https://quay.io/repository/biocontainers/minimap?tab=tags


.. raw:: html

    <script>
        var package = "minimap";
        var versions = ["0.2","0.2_r124","0.2_r124","0.2_r124","0.2_r124"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minimap/README.html