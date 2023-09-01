:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gvcf-regions'
.. highlight: bash

gvcf-regions
============

.. conda:recipe:: gvcf-regions
   :replaces_section_title:
   :noindex:

   Convert a gVCF file in multiple formats into a BED file of callable regions

   :homepage: https://github.com/lijiayong/gvcf_regions
   :license: GPLv3
   :recipe: /`gvcf-regions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcf-regions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcf-regions/meta.yaml>`_

   


.. conda:package:: gvcf-regions

   |downloads_gvcf-regions| |docker_gvcf-regions|

   :versions:
      
      

      ``2016.06.23-1``,  ``2016.06.23-0``,  ``2016.06.21-0``,  ``2016.05.24-0``,  ``2016.05.20-0``

      

   
   :depends python: 
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

      mamba install gvcf-regions

   and update with::

      mamba update gvcf-regions

  To create a new environment, run::

      mamba create --name myenvname gvcf-regions

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gvcf-regions:<tag>

   (see `gvcf-regions/tags`_ for valid values for ``<tag>``)


.. |downloads_gvcf-regions| image:: https://img.shields.io/conda/dn/bioconda/gvcf-regions.svg?style=flat
   :target: https://anaconda.org/bioconda/gvcf-regions
   :alt:   (downloads)
.. |docker_gvcf-regions| image:: https://quay.io/repository/biocontainers/gvcf-regions/status
   :target: https://quay.io/repository/biocontainers/gvcf-regions
.. _`gvcf-regions/tags`: https://quay.io/repository/biocontainers/gvcf-regions?tab=tags


.. raw:: html

    <script>
        var package = "gvcf-regions";
        var versions = ["2016.06.23","2016.06.23","2016.06.21","2016.05.24","2016.05.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gvcf-regions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gvcf-regions/README.html