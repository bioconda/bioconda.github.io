:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biox'
.. highlight: bash

biox
====

.. conda:recipe:: biox
   :replaces_section_title:
   :noindex:

   Biological Sequence Compression Tool

   :homepage: https://github.com/TianMayCry9/BioX
   :license: GPL / GPL-3.0-only
   :recipe: /`biox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biox/meta.yaml>`_

   BioX is an efficient\, lossless compression tool designed specifically for 
   biological sequence data. It supports compression of DNA\, RNA\, protein 
   sequences\, and FASTQ data.



.. conda:package:: biox

   |downloads_biox| |docker_biox|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends multiprocess: ``>=0.70.0``
   :depends numpy: ``>=1.19.0``
   :depends python: ``>=3.6``
   :depends tqdm: ``>=4.45.0``
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

      mamba install biox

   and update with::

      mamba update biox

  To create a new environment, run::

      mamba create --name myenvname biox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biox:<tag>

   (see `biox/tags`_ for valid values for ``<tag>``)


.. |downloads_biox| image:: https://img.shields.io/conda/dn/bioconda/biox.svg?style=flat
   :target: https://anaconda.org/bioconda/biox
   :alt:   (downloads)
.. |docker_biox| image:: https://quay.io/repository/biocontainers/biox/status
   :target: https://quay.io/repository/biocontainers/biox
.. _`biox/tags`: https://quay.io/repository/biocontainers/biox?tab=tags


.. raw:: html

    <script>
        var package = "biox";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biox/README.html