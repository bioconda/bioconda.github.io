:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapdia'
.. highlight: bash

mapdia
======

.. conda:recipe:: mapdia
   :replaces_section_title:
   :noindex:

   Performs essential data preprocessing\, including novel retention time\-based normalization method and a sequence of peptide\/fragment selection steps\, and more importantly\, hierarchical model\-based statistical significance analysis for multi\-group comparisons under representative experimental designs.

   :homepage: http://sourceforge.net/projects/mapdia/.
   :license: file
   :recipe: /`mapdia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapdia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapdia/meta.yaml>`_
   :links: biotools: :biotools:`MAPDIA`, doi: :doi:`10.1016/j.jprot.2015.09.013`

   


.. conda:package:: mapdia

   |downloads_mapdia| |docker_mapdia|

   :versions:
      
      

      ``3.1.0-5``,  ``3.1.0-4``,  ``3.1.0-3``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.1.0-0``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install mapdia

   and update with::

      mamba update mapdia

  To create a new environment, run::

      mamba create --name myenvname mapdia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mapdia:<tag>

   (see `mapdia/tags`_ for valid values for ``<tag>``)


.. |downloads_mapdia| image:: https://img.shields.io/conda/dn/bioconda/mapdia.svg?style=flat
   :target: https://anaconda.org/bioconda/mapdia
   :alt:   (downloads)
.. |docker_mapdia| image:: https://quay.io/repository/biocontainers/mapdia/status
   :target: https://quay.io/repository/biocontainers/mapdia
.. _`mapdia/tags`: https://quay.io/repository/biocontainers/mapdia?tab=tags


.. raw:: html

    <script>
        var package = "mapdia";
        var versions = ["3.1.0","3.1.0","3.1.0","3.1.0","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapdia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapdia/README.html