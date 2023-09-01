:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamaligncleaner'
.. highlight: bash

bamaligncleaner
===============

.. conda:recipe:: bamaligncleaner
   :replaces_section_title:
   :noindex:

   Removes unaligned references in BAM alignment file

   :homepage: https://github.com/maxibor/bamAlignCleaner
   :license: GPL-3.0
   :recipe: /`bamaligncleaner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamaligncleaner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamaligncleaner/meta.yaml>`_

   


.. conda:package:: bamaligncleaner

   |downloads_bamaligncleaner| |docker_bamaligncleaner|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends click: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends tqdm: 
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

      mamba install bamaligncleaner

   and update with::

      mamba update bamaligncleaner

  To create a new environment, run::

      mamba create --name myenvname bamaligncleaner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamaligncleaner:<tag>

   (see `bamaligncleaner/tags`_ for valid values for ``<tag>``)


.. |downloads_bamaligncleaner| image:: https://img.shields.io/conda/dn/bioconda/bamaligncleaner.svg?style=flat
   :target: https://anaconda.org/bioconda/bamaligncleaner
   :alt:   (downloads)
.. |docker_bamaligncleaner| image:: https://quay.io/repository/biocontainers/bamaligncleaner/status
   :target: https://quay.io/repository/biocontainers/bamaligncleaner
.. _`bamaligncleaner/tags`: https://quay.io/repository/biocontainers/bamaligncleaner?tab=tags


.. raw:: html

    <script>
        var package = "bamaligncleaner";
        var versions = ["0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamaligncleaner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamaligncleaner/README.html