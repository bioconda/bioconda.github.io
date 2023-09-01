:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'doubletd'
.. highlight: bash

doubletd
========

.. conda:recipe:: doubletd
   :replaces_section_title:
   :noindex:

   doubletD is a method to detect doublets in single\-cell DNA sequencing data

   :homepage: https://github.com/elkebir-group/doubletD
   :license: BSD-3
   :recipe: /`doubletd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/doubletd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/doubletd/meta.yaml>`_

   


.. conda:package:: doubletd

   |downloads_doubletd| |docker_doubletd|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
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

      mamba install doubletd

   and update with::

      mamba update doubletd

  To create a new environment, run::

      mamba create --name myenvname doubletd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/doubletd:<tag>

   (see `doubletd/tags`_ for valid values for ``<tag>``)


.. |downloads_doubletd| image:: https://img.shields.io/conda/dn/bioconda/doubletd.svg?style=flat
   :target: https://anaconda.org/bioconda/doubletd
   :alt:   (downloads)
.. |docker_doubletd| image:: https://quay.io/repository/biocontainers/doubletd/status
   :target: https://quay.io/repository/biocontainers/doubletd
.. _`doubletd/tags`: https://quay.io/repository/biocontainers/doubletd?tab=tags


.. raw:: html

    <script>
        var package = "doubletd";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/doubletd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/doubletd/README.html