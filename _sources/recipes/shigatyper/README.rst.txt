:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shigatyper'
.. highlight: bash

shigatyper
==========

.. conda:recipe:: shigatyper
   :replaces_section_title:
   :noindex:

   Typing tool for Shigella spp. from WGS Illumina sequencing

   :homepage: https://github.com/CFSAN-Biostatistics/shigatyper
   :license: Public Domain / Public Domain
   :recipe: /`shigatyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigatyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigatyper/meta.yaml>`_

   


.. conda:package:: shigatyper

   |downloads_shigatyper| |docker_shigatyper|

   :versions:
      
      

      ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-3``

      

   
   :depends bcftools: ``>=1.9``
   :depends minimap2: ``>=2.16``
   :depends pandas: ``>=0.24.2``
   :depends python: ``>=3.7``
   :depends samtools: ``>=1.9``
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

      mamba install shigatyper

   and update with::

      mamba update shigatyper

  To create a new environment, run::

      mamba create --name myenvname shigatyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shigatyper:<tag>

   (see `shigatyper/tags`_ for valid values for ``<tag>``)


.. |downloads_shigatyper| image:: https://img.shields.io/conda/dn/bioconda/shigatyper.svg?style=flat
   :target: https://anaconda.org/bioconda/shigatyper
   :alt:   (downloads)
.. |docker_shigatyper| image:: https://quay.io/repository/biocontainers/shigatyper/status
   :target: https://quay.io/repository/biocontainers/shigatyper
.. _`shigatyper/tags`: https://quay.io/repository/biocontainers/shigatyper?tab=tags


.. raw:: html

    <script>
        var package = "shigatyper";
        var versions = ["2.0.5","2.0.4","2.0.3","2.0.2","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shigatyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shigatyper/README.html