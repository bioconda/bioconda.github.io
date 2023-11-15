:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bedgovcf'
.. highlight: bash

bedgovcf
========

.. conda:recipe:: bedgovcf
   :replaces_section_title:
   :noindex:

   A simple tool to convert BED files to VCF files

   :homepage: https://github.com/nvnieuwk/bedgovcf
   :license: MIT
   :recipe: /`bedgovcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedgovcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedgovcf/meta.yaml>`_

   


.. conda:package:: bedgovcf

   |downloads_bedgovcf| |docker_bedgovcf|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends tabix: 
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

      mamba install bedgovcf

   and update with::

      mamba update bedgovcf

  To create a new environment, run::

      mamba create --name myenvname bedgovcf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bedgovcf:<tag>

   (see `bedgovcf/tags`_ for valid values for ``<tag>``)


.. |downloads_bedgovcf| image:: https://img.shields.io/conda/dn/bioconda/bedgovcf.svg?style=flat
   :target: https://anaconda.org/bioconda/bedgovcf
   :alt:   (downloads)
.. |docker_bedgovcf| image:: https://quay.io/repository/biocontainers/bedgovcf/status
   :target: https://quay.io/repository/biocontainers/bedgovcf
.. _`bedgovcf/tags`: https://quay.io/repository/biocontainers/bedgovcf?tab=tags


.. raw:: html

    <script>
        var package = "bedgovcf";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bedgovcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bedgovcf/README.html