:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'progenomes'
.. highlight: bash

progenomes
==========

.. conda:recipe:: progenomes
   :replaces_section_title:
   :noindex:

   A proGenomes command\-line tool for interacting with bacterial and archeal genomes.

   :homepage: https://github.com/BigDataBiology/progenomes-cli
   :license: MIT / MIT
   :recipe: /`progenomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/progenomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/progenomes/meta.yaml>`_

   


.. conda:package:: progenomes

   |downloads_progenomes| |docker_progenomes|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends pandas: 
   :depends polars: 
   :depends pyarrow: 
   :depends python: 
   :depends tqdm: 
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

      mamba install progenomes

   and update with::

      mamba update progenomes

  To create a new environment, run::

      mamba create --name myenvname progenomes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/progenomes:<tag>

   (see `progenomes/tags`_ for valid values for ``<tag>``)


.. |downloads_progenomes| image:: https://img.shields.io/conda/dn/bioconda/progenomes.svg?style=flat
   :target: https://anaconda.org/bioconda/progenomes
   :alt:   (downloads)
.. |docker_progenomes| image:: https://quay.io/repository/biocontainers/progenomes/status
   :target: https://quay.io/repository/biocontainers/progenomes
.. _`progenomes/tags`: https://quay.io/repository/biocontainers/progenomes?tab=tags


.. raw:: html

    <script>
        var package = "progenomes";
        var versions = ["0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/progenomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/progenomes/README.html