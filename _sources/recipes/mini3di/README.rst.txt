:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mini3di'
.. highlight: bash

mini3di
=======

.. conda:recipe:: mini3di
   :replaces_section_title:
   :noindex:

   A NumPy port of the foldseek code for encoding protein structures to 3di.

   :homepage: https://github.com/althonos/mini3di
   :license: BSD-3-Clause
   :recipe: /`mini3di <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mini3di>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mini3di/meta.yaml>`_

   


.. conda:package:: mini3di

   |downloads_mini3di| |docker_mini3di|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends numpy: 
   :depends python: 
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

      mamba install mini3di

   and update with::

      mamba update mini3di

  To create a new environment, run::

      mamba create --name myenvname mini3di

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mini3di:<tag>

   (see `mini3di/tags`_ for valid values for ``<tag>``)


.. |downloads_mini3di| image:: https://img.shields.io/conda/dn/bioconda/mini3di.svg?style=flat
   :target: https://anaconda.org/bioconda/mini3di
   :alt:   (downloads)
.. |docker_mini3di| image:: https://quay.io/repository/biocontainers/mini3di/status
   :target: https://quay.io/repository/biocontainers/mini3di
.. _`mini3di/tags`: https://quay.io/repository/biocontainers/mini3di?tab=tags


.. raw:: html

    <script>
        var package = "mini3di";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mini3di/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mini3di/README.html