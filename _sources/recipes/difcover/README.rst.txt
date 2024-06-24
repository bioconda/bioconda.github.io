:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'difcover'
.. highlight: bash

difcover
========

.. conda:recipe:: difcover
   :replaces_section_title:
   :noindex:

   Pipeline to identify genomic regions with read coverage differences between pairs of samples

   :homepage: https://github.com/timnat/DifCover
   :license: MIT
   :recipe: /`difcover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/difcover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/difcover/meta.yaml>`_

   


.. conda:package:: difcover

   |downloads_difcover| |docker_difcover|

   :versions:
      
      

      ``3.0.1-1``,  ``3.0.1-0``

      

   
   :depends bedtools: 
   :depends bioconductor-dnacopy: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends samtools: 
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

      mamba install difcover

   and update with::

      mamba update difcover

  To create a new environment, run::

      mamba create --name myenvname difcover

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/difcover:<tag>

   (see `difcover/tags`_ for valid values for ``<tag>``)


.. |downloads_difcover| image:: https://img.shields.io/conda/dn/bioconda/difcover.svg?style=flat
   :target: https://anaconda.org/bioconda/difcover
   :alt:   (downloads)
.. |docker_difcover| image:: https://quay.io/repository/biocontainers/difcover/status
   :target: https://quay.io/repository/biocontainers/difcover
.. _`difcover/tags`: https://quay.io/repository/biocontainers/difcover?tab=tags


.. raw:: html

    <script>
        var package = "difcover";
        var versions = ["3.0.1","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/difcover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/difcover/README.html