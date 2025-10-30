:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmlong2'
.. highlight: bash

mmlong2
=======

.. conda:recipe:: mmlong2
   :replaces_section_title:
   :noindex:

   An all\-in\-one genome\-centric metagenomics workflow using long reads

   :homepage: https://github.com/Serka-M/mmlong2
   :license: GPL-3.0-only
   :recipe: /`mmlong2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmlong2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmlong2/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41564-025-02062-z`

   


.. conda:package:: mmlong2

   |downloads_mmlong2| |docker_mmlong2|

   :versions:
      
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.0-0``

      

   
   :depends ncbi-amrfinderplus: 
   :depends pigz: 
   :depends pv: 
   :depends rsync: 
   :depends singularity: ``3.8.6.*``
   :depends snakemake: 
   :depends tar: 
   :depends yq: 
   :depends zenodo_get: 
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

      mamba install mmlong2

   and update with::

      mamba update mmlong2

  To create a new environment, run::

      mamba create --name myenvname mmlong2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mmlong2:<tag>

   (see `mmlong2/tags`_ for valid values for ``<tag>``)


.. |downloads_mmlong2| image:: https://img.shields.io/conda/dn/bioconda/mmlong2.svg?style=flat
   :target: https://anaconda.org/bioconda/mmlong2
   :alt:   (downloads)
.. |docker_mmlong2| image:: https://quay.io/repository/biocontainers/mmlong2/status
   :target: https://quay.io/repository/biocontainers/mmlong2
.. _`mmlong2/tags`: https://quay.io/repository/biocontainers/mmlong2?tab=tags


.. raw:: html

    <script>
        var package = "mmlong2";
        var versions = ["1.2.1","1.2.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmlong2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmlong2/README.html