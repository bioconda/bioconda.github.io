:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sepp-refgg138'
.. highlight: bash

sepp-refgg138
=============

.. conda:recipe:: sepp-refgg138
   :replaces_section_title:
   :noindex:

   SATe\-enabled phylogenetic placement

   :homepage: https://github.com/smirarab/sepp-refs
   :license: GPL3 / GPLv3
   :recipe: /`sepp-refgg138 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sepp-refgg138>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sepp-refgg138/meta.yaml>`_
   :links: biotools: :biotools:`sepp-refgg138`

   


.. conda:package:: sepp-refgg138

   |downloads_sepp-refgg138| |docker_sepp-refgg138|

   :versions:
      
      

      ``4.5.1-1``,  ``4.5.1-0``,  ``4.3.6-0``,  ``v4.3.6-0``

      

   
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

      mamba install sepp-refgg138

   and update with::

      mamba update sepp-refgg138

  To create a new environment, run::

      mamba create --name myenvname sepp-refgg138

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sepp-refgg138:<tag>

   (see `sepp-refgg138/tags`_ for valid values for ``<tag>``)


.. |downloads_sepp-refgg138| image:: https://img.shields.io/conda/dn/bioconda/sepp-refgg138.svg?style=flat
   :target: https://anaconda.org/bioconda/sepp-refgg138
   :alt:   (downloads)
.. |docker_sepp-refgg138| image:: https://quay.io/repository/biocontainers/sepp-refgg138/status
   :target: https://quay.io/repository/biocontainers/sepp-refgg138
.. _`sepp-refgg138/tags`: https://quay.io/repository/biocontainers/sepp-refgg138?tab=tags


.. raw:: html

    <script>
        var package = "sepp-refgg138";
        var versions = ["4.5.1","4.5.1","4.3.6","v4.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sepp-refgg138/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sepp-refgg138/README.html