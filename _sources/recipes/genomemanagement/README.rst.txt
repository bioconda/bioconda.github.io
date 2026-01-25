:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomemanagement'
.. highlight: bash

genomemanagement
================

.. conda:recipe:: genomemanagement
   :replaces_section_title:
   :noindex:

   Genome Management Package for bioinformatics analysis

   :homepage: https://github.com/evolu-tion/GenomeManagement
   :license: MIT
   :recipe: /`genomemanagement <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomemanagement>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomemanagement/meta.yaml>`_

   


.. conda:package:: genomemanagement

   |downloads_genomemanagement| |docker_genomemanagement|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends python: ``>=3.7``
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

      mamba install genomemanagement

   and update with::

      mamba update genomemanagement

  To create a new environment, run::

      mamba create --name myenvname genomemanagement

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomemanagement:<tag>

   (see `genomemanagement/tags`_ for valid values for ``<tag>``)


.. |downloads_genomemanagement| image:: https://img.shields.io/conda/dn/bioconda/genomemanagement.svg?style=flat
   :target: https://anaconda.org/bioconda/genomemanagement
   :alt:   (downloads)
.. |docker_genomemanagement| image:: https://quay.io/repository/biocontainers/genomemanagement/status
   :target: https://quay.io/repository/biocontainers/genomemanagement
.. _`genomemanagement/tags`: https://quay.io/repository/biocontainers/genomemanagement?tab=tags


.. raw:: html

    <script>
        var package = "genomemanagement";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomemanagement/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomemanagement/README.html