:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wbuild'
.. highlight: bash

wbuild
======

.. conda:recipe:: wbuild
   :replaces_section_title:
   :noindex:

   Automatic build tool for R Reports

   :homepage: https://github.com/gagneurlab/wBuild
   :license: OTHER / UNKNOWN
   :recipe: /`wbuild <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wbuild>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wbuild/meta.yaml>`_

   


.. conda:package:: wbuild

   |downloads_wbuild| |docker_wbuild|

   :versions:
      
      

      ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.1-0``,  ``1.7.0-0``

      

   
   :depends click: ``>=6.0``
   :depends click-log: 
   :depends python: ``>=3.5``
   :depends pyyaml: ``>=4.2b1``
   :depends snakemake-minimal: ``>=5.5.2,<8.0.0``
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

      mamba install wbuild

   and update with::

      mamba update wbuild

  To create a new environment, run::

      mamba create --name myenvname wbuild

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wbuild:<tag>

   (see `wbuild/tags`_ for valid values for ``<tag>``)


.. |downloads_wbuild| image:: https://img.shields.io/conda/dn/bioconda/wbuild.svg?style=flat
   :target: https://anaconda.org/bioconda/wbuild
   :alt:   (downloads)
.. |docker_wbuild| image:: https://quay.io/repository/biocontainers/wbuild/status
   :target: https://quay.io/repository/biocontainers/wbuild
.. _`wbuild/tags`: https://quay.io/repository/biocontainers/wbuild?tab=tags


.. raw:: html

    <script>
        var package = "wbuild";
        var versions = ["1.8.0","1.8.0","1.8.0","1.7.1","1.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wbuild/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wbuild/README.html