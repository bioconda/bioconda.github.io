:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmats2sashimiplot'
.. highlight: bash

rmats2sashimiplot
=================

.. conda:recipe:: rmats2sashimiplot
   :replaces_section_title:
   :noindex:

   rmats2sashimiplot

   :homepage: https://github.com/Xinglab/rmats2sashimiplot
   :license: GPL2 / GNU General Public v2 (GPLv2)
   :recipe: /`rmats2sashimiplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats2sashimiplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats2sashimiplot/meta.yaml>`_

   


.. conda:package:: rmats2sashimiplot

   |downloads_rmats2sashimiplot| |docker_rmats2sashimiplot|

   :versions:
      
      

      ``3.0.0-1``,  ``3.0.0-0``,  ``2.0.4-2``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-3``,  ``2.0.3-2``,  ``2.0.3-0``,  ``2.0.0-0``

      

   
   :depends bedtools: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
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

      mamba install rmats2sashimiplot

   and update with::

      mamba update rmats2sashimiplot

  To create a new environment, run::

      mamba create --name myenvname rmats2sashimiplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rmats2sashimiplot:<tag>

   (see `rmats2sashimiplot/tags`_ for valid values for ``<tag>``)


.. |downloads_rmats2sashimiplot| image:: https://img.shields.io/conda/dn/bioconda/rmats2sashimiplot.svg?style=flat
   :target: https://anaconda.org/bioconda/rmats2sashimiplot
   :alt:   (downloads)
.. |docker_rmats2sashimiplot| image:: https://quay.io/repository/biocontainers/rmats2sashimiplot/status
   :target: https://quay.io/repository/biocontainers/rmats2sashimiplot
.. _`rmats2sashimiplot/tags`: https://quay.io/repository/biocontainers/rmats2sashimiplot?tab=tags


.. raw:: html

    <script>
        var package = "rmats2sashimiplot";
        var versions = ["3.0.0","3.0.0","2.0.4","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmats2sashimiplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmats2sashimiplot/README.html