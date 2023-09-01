:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamclipper'
.. highlight: bash

bamclipper
==========

.. conda:recipe:: bamclipper
   :replaces_section_title:
   :noindex:

   Remove primer sequence from BAM alignments by soft\-clipping.

   :homepage: https://github.com/tommyau/bamclipper
   :license: MIT / MIT
   :recipe: /`bamclipper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamclipper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamclipper/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41598-017-01703-6`

   


.. conda:package:: bamclipper

   |downloads_bamclipper| |docker_bamclipper|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends parallel: 
   :depends perl: 
   :depends samtools: 
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

      mamba install bamclipper

   and update with::

      mamba update bamclipper

  To create a new environment, run::

      mamba create --name myenvname bamclipper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamclipper:<tag>

   (see `bamclipper/tags`_ for valid values for ``<tag>``)


.. |downloads_bamclipper| image:: https://img.shields.io/conda/dn/bioconda/bamclipper.svg?style=flat
   :target: https://anaconda.org/bioconda/bamclipper
   :alt:   (downloads)
.. |docker_bamclipper| image:: https://quay.io/repository/biocontainers/bamclipper/status
   :target: https://quay.io/repository/biocontainers/bamclipper
.. _`bamclipper/tags`: https://quay.io/repository/biocontainers/bamclipper?tab=tags


.. raw:: html

    <script>
        var package = "bamclipper";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamclipper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamclipper/README.html