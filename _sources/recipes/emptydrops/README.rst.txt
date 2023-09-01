:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emptydrops'
.. highlight: bash

emptydrops
==========

.. conda:recipe:: emptydrops
   :replaces_section_title:
   :noindex:

   Python implementation of emptydrops from 10X Cellranger v3.0.2

   :homepage: https://pypi.org/project/emptydrops/
   :developer docs: https://github.com/nh3/emptydrops
   :license: MIT
   :recipe: /`emptydrops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emptydrops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emptydrops/meta.yaml>`_

   


.. conda:package:: emptydrops

   |downloads_emptydrops| |docker_emptydrops|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends h5py: 
   :depends lz4: 
   :depends pandas: 
   :depends python: 
   :depends scipy: 
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

      mamba install emptydrops

   and update with::

      mamba update emptydrops

  To create a new environment, run::

      mamba create --name myenvname emptydrops

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/emptydrops:<tag>

   (see `emptydrops/tags`_ for valid values for ``<tag>``)


.. |downloads_emptydrops| image:: https://img.shields.io/conda/dn/bioconda/emptydrops.svg?style=flat
   :target: https://anaconda.org/bioconda/emptydrops
   :alt:   (downloads)
.. |docker_emptydrops| image:: https://quay.io/repository/biocontainers/emptydrops/status
   :target: https://quay.io/repository/biocontainers/emptydrops
.. _`emptydrops/tags`: https://quay.io/repository/biocontainers/emptydrops?tab=tags


.. raw:: html

    <script>
        var package = "emptydrops";
        var versions = ["0.0.5","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emptydrops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emptydrops/README.html