:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smartmap'
.. highlight: bash

smartmap
========

.. conda:recipe:: smartmap
   :replaces_section_title:
   :noindex:

   SmartMap\: Bayesian Analysis of Ambiguously Mapped Reads

   :homepage: http://shah-rohan.github.io/SmartMap
   :license: MIT
   :recipe: /`smartmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smartmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smartmap/meta.yaml>`_

   


.. conda:package:: smartmap

   |downloads_smartmap| |docker_smartmap|

   :versions:
      
      

      ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bedtools: 
   :depends bowtie2: 
   :depends hisat2: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.8.5``
   :depends samtools: ``>=1.10``
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

      mamba install smartmap

   and update with::

      mamba update smartmap

  To create a new environment, run::

      mamba create --name myenvname smartmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smartmap:<tag>

   (see `smartmap/tags`_ for valid values for ``<tag>``)


.. |downloads_smartmap| image:: https://img.shields.io/conda/dn/bioconda/smartmap.svg?style=flat
   :target: https://anaconda.org/bioconda/smartmap
   :alt:   (downloads)
.. |docker_smartmap| image:: https://quay.io/repository/biocontainers/smartmap/status
   :target: https://quay.io/repository/biocontainers/smartmap
.. _`smartmap/tags`: https://quay.io/repository/biocontainers/smartmap?tab=tags


.. raw:: html

    <script>
        var package = "smartmap";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smartmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smartmap/README.html