:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iqkm'
.. highlight: bash

iqkm
====

.. conda:recipe:: iqkm
   :replaces_section_title:
   :noindex:

   Identification and quantification of KEGG Modules in metagenomes\/genomes

   :homepage: https://github.com/lijingdi/iqKM
   :license: GPL3 / GPL-3.0-only
   :recipe: /`iqkm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqkm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqkm/meta.yaml>`_

   


.. conda:package:: iqkm

   |downloads_iqkm| |docker_iqkm|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends bwa: ``>=0.7.17``
   :depends hmmer: ``>=3.1``
   :depends markdown: 
   :depends networkx: 
   :depends prodigal: ``>=2.6.3``
   :depends pylint: 
   :depends pysam: 
   :depends pytest: 
   :depends python: ``>=3.8``
   :depends samtools: ``>=1.3.1``
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

      mamba install iqkm

   and update with::

      mamba update iqkm

  To create a new environment, run::

      mamba create --name myenvname iqkm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/iqkm:<tag>

   (see `iqkm/tags`_ for valid values for ``<tag>``)


.. |downloads_iqkm| image:: https://img.shields.io/conda/dn/bioconda/iqkm.svg?style=flat
   :target: https://anaconda.org/bioconda/iqkm
   :alt:   (downloads)
.. |docker_iqkm| image:: https://quay.io/repository/biocontainers/iqkm/status
   :target: https://quay.io/repository/biocontainers/iqkm
.. _`iqkm/tags`: https://quay.io/repository/biocontainers/iqkm?tab=tags


.. raw:: html

    <script>
        var package = "iqkm";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iqkm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iqkm/README.html