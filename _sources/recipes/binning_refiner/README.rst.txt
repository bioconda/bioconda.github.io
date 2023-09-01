:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binning_refiner'
.. highlight: bash

binning_refiner
===============

.. conda:recipe:: binning_refiner
   :replaces_section_title:
   :noindex:

   Improving genome bins through the combination of different binning programs

   :homepage: https://github.com/songweizhi/Binning_refiner
   :license: GPL3 / GPL3
   :recipe: /`binning_refiner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binning_refiner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binning_refiner/meta.yaml>`_

   


.. conda:package:: binning_refiner

   |downloads_binning_refiner| |docker_binning_refiner|

   :versions:
      
      

      ``1.4.3-0``

      

   
   :depends biopython: 
   :depends python: 
   :depends r-googlevis: 
   :depends r-optparse: 
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

      mamba install binning_refiner

   and update with::

      mamba update binning_refiner

  To create a new environment, run::

      mamba create --name myenvname binning_refiner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/binning_refiner:<tag>

   (see `binning_refiner/tags`_ for valid values for ``<tag>``)


.. |downloads_binning_refiner| image:: https://img.shields.io/conda/dn/bioconda/binning_refiner.svg?style=flat
   :target: https://anaconda.org/bioconda/binning_refiner
   :alt:   (downloads)
.. |docker_binning_refiner| image:: https://quay.io/repository/biocontainers/binning_refiner/status
   :target: https://quay.io/repository/biocontainers/binning_refiner
.. _`binning_refiner/tags`: https://quay.io/repository/biocontainers/binning_refiner?tab=tags


.. raw:: html

    <script>
        var package = "binning_refiner";
        var versions = ["1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binning_refiner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binning_refiner/README.html