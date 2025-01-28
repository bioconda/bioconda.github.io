:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnachisel'
.. highlight: bash

dnachisel
=========

.. conda:recipe:: dnachisel
   :replaces_section_title:
   :noindex:

   Optimize DNA sequences under constraints.

   :homepage: https://github.com/Edinburgh-Genome-Foundry/DnaChisel
   :license: MIT
   :recipe: /`dnachisel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnachisel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnachisel/meta.yaml>`_

   


.. conda:package:: dnachisel

   |downloads_dnachisel| |docker_dnachisel|

   :versions:
      
      

      ``3.2.13-0``,  ``3.2.12-0``,  ``3.2.11-0``,  ``3.2.10-0``,  ``3.2.9-0``,  ``3.2.8-0``,  ``3.2.7-0``,  ``3.2.6-0``

      

   
   :depends biopython: 
   :depends docopt: 
   :depends flametree: 
   :depends numpy: 
   :depends proglog: 
   :depends python: 
   :depends python-codon-tables: 
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

      mamba install dnachisel

   and update with::

      mamba update dnachisel

  To create a new environment, run::

      mamba create --name myenvname dnachisel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dnachisel:<tag>

   (see `dnachisel/tags`_ for valid values for ``<tag>``)


.. |downloads_dnachisel| image:: https://img.shields.io/conda/dn/bioconda/dnachisel.svg?style=flat
   :target: https://anaconda.org/bioconda/dnachisel
   :alt:   (downloads)
.. |docker_dnachisel| image:: https://quay.io/repository/biocontainers/dnachisel/status
   :target: https://quay.io/repository/biocontainers/dnachisel
.. _`dnachisel/tags`: https://quay.io/repository/biocontainers/dnachisel?tab=tags


.. raw:: html

    <script>
        var package = "dnachisel";
        var versions = ["3.2.13","3.2.12","3.2.11","3.2.10","3.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnachisel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnachisel/README.html