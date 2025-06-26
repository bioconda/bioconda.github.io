:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shortcut'
.. highlight: bash

shortcut
========

.. conda:recipe:: shortcut
   :replaces_section_title:
   :noindex:

   ShortCut Small RNA\-seq data trimmer and quality control tool

   :homepage: https://github.com/Aez35/ShortCut
   :license: MIT / MIT
   :recipe: /`shortcut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortcut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortcut/meta.yaml>`_

   


.. conda:package:: shortcut

   |downloads_shortcut| |docker_shortcut|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends biopython: ``>=1.85``
   :depends cutadapt: ``>=4.8``
   :depends python: ``>=3.6``
   :depends r-base: ``>=4.3.3``
   :depends r-ggplot2: ``>=3.5.2``
   :depends r-tidyverse: ``>=2.0``
   :depends rpy2: 
   :depends shortstack: ``>=4.0.4``
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

      mamba install shortcut

   and update with::

      mamba update shortcut

  To create a new environment, run::

      mamba create --name myenvname shortcut

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shortcut:<tag>

   (see `shortcut/tags`_ for valid values for ``<tag>``)


.. |downloads_shortcut| image:: https://img.shields.io/conda/dn/bioconda/shortcut.svg?style=flat
   :target: https://anaconda.org/bioconda/shortcut
   :alt:   (downloads)
.. |docker_shortcut| image:: https://quay.io/repository/biocontainers/shortcut/status
   :target: https://quay.io/repository/biocontainers/shortcut
.. _`shortcut/tags`: https://quay.io/repository/biocontainers/shortcut?tab=tags


.. raw:: html

    <script>
        var package = "shortcut";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shortcut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shortcut/README.html