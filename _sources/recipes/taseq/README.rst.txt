:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taseq'
.. highlight: bash

taseq
=====

.. conda:recipe:: taseq
   :replaces_section_title:
   :noindex:

   Downstream analysis for targetted amplicon sequencing.

   :homepage: https://github.com/KChigira/taseq/
   :license: MIT
   :recipe: /`taseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taseq/meta.yaml>`_

   


.. conda:package:: taseq

   |downloads_taseq| |docker_taseq|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends bwa: ``>=0.7.18,<0.8.0``
   :depends gatk4: ``>=4.5.0.0,<4.6.0.0``
   :depends matplotlib-base: ``>=3.9.1,<4.0.0``
   :depends pandas: ``>=2.2.2,<3.0.0``
   :depends picard-slim: ``>=2.27.4,<3.0.0``
   :depends python: ``>=3.12,<4.0``
   :depends samtools: ``>=1.20,<2.0``
   :depends trimmomatic: ``>=0.39,<1.0``
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

      mamba install taseq

   and update with::

      mamba update taseq

  To create a new environment, run::

      mamba create --name myenvname taseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taseq:<tag>

   (see `taseq/tags`_ for valid values for ``<tag>``)


.. |downloads_taseq| image:: https://img.shields.io/conda/dn/bioconda/taseq.svg?style=flat
   :target: https://anaconda.org/bioconda/taseq
   :alt:   (downloads)
.. |docker_taseq| image:: https://quay.io/repository/biocontainers/taseq/status
   :target: https://quay.io/repository/biocontainers/taseq
.. _`taseq/tags`: https://quay.io/repository/biocontainers/taseq?tab=tags


.. raw:: html

    <script>
        var package = "taseq";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taseq/README.html