:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'allelecodes'
.. highlight: bash

allelecodes
===========

.. conda:recipe:: allelecodes
   :replaces_section_title:
   :noindex:

   Allele Code Assignment Algorithm for cgMLST schemes

   :homepage: https://github.com/ncezid-biome/AlleleCodes
   :license: GPL / GPL-3.0
   :recipe: /`allelecodes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allelecodes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allelecodes/meta.yaml>`_

   This tool assigns nearest\-neighbor hierarchical codes to allele profiles using cgMLST schemes\, as used in public health genomics.



.. conda:package:: allelecodes

   |downloads_allelecodes| |docker_allelecodes|

   :versions:
      
      

      ``2.1-0``

      

   
   :depends python: ``>=3.13,<3.14.0a0``
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

      mamba install allelecodes

   and update with::

      mamba update allelecodes

  To create a new environment, run::

      mamba create --name myenvname allelecodes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/allelecodes:<tag>

   (see `allelecodes/tags`_ for valid values for ``<tag>``)


.. |downloads_allelecodes| image:: https://img.shields.io/conda/dn/bioconda/allelecodes.svg?style=flat
   :target: https://anaconda.org/bioconda/allelecodes
   :alt:   (downloads)
.. |docker_allelecodes| image:: https://quay.io/repository/biocontainers/allelecodes/status
   :target: https://quay.io/repository/biocontainers/allelecodes
.. _`allelecodes/tags`: https://quay.io/repository/biocontainers/allelecodes?tab=tags


.. raw:: html

    <script>
        var package = "allelecodes";
        var versions = ["2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/allelecodes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/allelecodes/README.html