:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'collect_mgf'
.. highlight: bash

collect_mgf
===========

.. conda:recipe:: collect_mgf
   :replaces_section_title:
   :noindex:

   Collects MGF files and dd\_results from an XMass setup\_QDD.tcl experiment to a single MGF file.

   :homepage: http://www.ms-utils.org/collect_mgf.c
   :license: GPL-3.0
   :recipe: /`collect_mgf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collect_mgf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collect_mgf/meta.yaml>`_
   :links: biotools: :biotools:`collect_mgf`

   


.. conda:package:: collect_mgf

   |downloads_collect_mgf| |docker_collect_mgf|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install collect_mgf

   and update with::

      mamba update collect_mgf

  To create a new environment, run::

      mamba create --name myenvname collect_mgf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/collect_mgf:<tag>

   (see `collect_mgf/tags`_ for valid values for ``<tag>``)


.. |downloads_collect_mgf| image:: https://img.shields.io/conda/dn/bioconda/collect_mgf.svg?style=flat
   :target: https://anaconda.org/bioconda/collect_mgf
   :alt:   (downloads)
.. |docker_collect_mgf| image:: https://quay.io/repository/biocontainers/collect_mgf/status
   :target: https://quay.io/repository/biocontainers/collect_mgf
.. _`collect_mgf/tags`: https://quay.io/repository/biocontainers/collect_mgf?tab=tags


.. raw:: html

    <script>
        var package = "collect_mgf";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/collect_mgf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/collect_mgf/README.html