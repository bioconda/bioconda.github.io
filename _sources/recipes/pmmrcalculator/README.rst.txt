:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pmmrcalculator'
.. highlight: bash

pmmrcalculator
==============

.. conda:recipe:: pmmrcalculator
   :replaces_section_title:
   :noindex:

   A small python tool to calculate pairwise mismatch rate between all individuals in an EigenStrat dataset.

   :homepage: https://github.com/TCLamnidis/pMMRCalculator
   :license: GPL-3.0
   :recipe: /`pmmrcalculator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmmrcalculator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmmrcalculator/meta.yaml>`_

   


.. conda:package:: pmmrcalculator

   |downloads_pmmrcalculator| |docker_pmmrcalculator|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends python: ``3.7.*``
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

      mamba install pmmrcalculator

   and update with::

      mamba update pmmrcalculator

  To create a new environment, run::

      mamba create --name myenvname pmmrcalculator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pmmrcalculator:<tag>

   (see `pmmrcalculator/tags`_ for valid values for ``<tag>``)


.. |downloads_pmmrcalculator| image:: https://img.shields.io/conda/dn/bioconda/pmmrcalculator.svg?style=flat
   :target: https://anaconda.org/bioconda/pmmrcalculator
   :alt:   (downloads)
.. |docker_pmmrcalculator| image:: https://quay.io/repository/biocontainers/pmmrcalculator/status
   :target: https://quay.io/repository/biocontainers/pmmrcalculator
.. _`pmmrcalculator/tags`: https://quay.io/repository/biocontainers/pmmrcalculator?tab=tags


.. raw:: html

    <script>
        var package = "pmmrcalculator";
        var versions = ["1.1.0","1.0.5","1.0.5","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pmmrcalculator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pmmrcalculator/README.html