:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimodd'
.. highlight: bash

mimodd
======

.. conda:recipe:: mimodd
   :replaces_section_title:
   :noindex:

   Tools for Mutation Identification in Model Organism Genomes

   :homepage: http://sourceforge.net/projects/mimodd
   :license: GPL3
   :recipe: /`mimodd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimodd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimodd/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`mimodd_align`

   


.. conda:package:: mimodd

   |downloads_mimodd| |docker_mimodd|

   :versions:
      
      

      ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7.3-0``

      

   
   :depends libgcc: 
   :depends python: ``3.5*``
   :depends rpy2: 
   :depends zlib: ``1.2.11*``
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

      mamba install mimodd

   and update with::

      mamba update mimodd

  To create a new environment, run::

      mamba create --name myenvname mimodd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mimodd:<tag>

   (see `mimodd/tags`_ for valid values for ``<tag>``)


.. |downloads_mimodd| image:: https://img.shields.io/conda/dn/bioconda/mimodd.svg?style=flat
   :target: https://anaconda.org/bioconda/mimodd
   :alt:   (downloads)
.. |docker_mimodd| image:: https://quay.io/repository/biocontainers/mimodd/status
   :target: https://quay.io/repository/biocontainers/mimodd
.. _`mimodd/tags`: https://quay.io/repository/biocontainers/mimodd?tab=tags


.. raw:: html

    <script>
        var package = "mimodd";
        var versions = ["0.1.9","0.1.8","0.1.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimodd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimodd/README.html