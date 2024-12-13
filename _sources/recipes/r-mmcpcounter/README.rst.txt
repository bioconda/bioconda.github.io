:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mmcpcounter'
.. highlight: bash

r-mmcpcounter
=============

.. conda:recipe:: r-mmcpcounter
   :replaces_section_title:
   :noindex:

   Murine version of MCP\-counter\, a tool to estimate the immune and stromal composition of heterogeneous tissue\, from transcriptomic data 

   :homepage: https://github.com/cit-bioinfo/mMCP-counter
   :license: GPL / GPL-3
   :recipe: /`r-mmcpcounter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmcpcounter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmcpcounter/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13073-020-00783-w`

   


.. conda:package:: r-mmcpcounter

   |downloads_r-mmcpcounter| |docker_r-mmcpcounter|

   :versions:
      
      

      ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install r-mmcpcounter

   and update with::

      mamba update r-mmcpcounter

  To create a new environment, run::

      mamba create --name myenvname r-mmcpcounter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-mmcpcounter:<tag>

   (see `r-mmcpcounter/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mmcpcounter| image:: https://img.shields.io/conda/dn/bioconda/r-mmcpcounter.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mmcpcounter
   :alt:   (downloads)
.. |docker_r-mmcpcounter| image:: https://quay.io/repository/biocontainers/r-mmcpcounter/status
   :target: https://quay.io/repository/biocontainers/r-mmcpcounter
.. _`r-mmcpcounter/tags`: https://quay.io/repository/biocontainers/r-mmcpcounter?tab=tags


.. raw:: html

    <script>
        var package = "r-mmcpcounter";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mmcpcounter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mmcpcounter/README.html