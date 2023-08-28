:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shapemapper'
.. highlight: bash

shapemapper
===========

.. conda:recipe:: shapemapper
   :replaces_section_title:
   :noindex:

   ShapeMapper converts raw sequencing files into mutational profiles\, creates SHAPE reactivity plots\, and provides extensive diagnostic information useful for experiment analysis and troubleshooting.

   :homepage: http://www.chem.unc.edu/rna/software.html
   :license: GPL
   :recipe: /`shapemapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapemapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapemapper/meta.yaml>`_

   


.. conda:package:: shapemapper

   |downloads_shapemapper| |docker_shapemapper|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends bowtie2: 
   :depends httplib2: 
   :depends libgcc-ng: ``>=4.9``
   :depends matplotlib: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends rnastructure: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install shapemapper

   and update with::

      mamba update shapemapper

  To create a new environment, run::

      mamba create --name myenvname shapemapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shapemapper:<tag>

   (see `shapemapper/tags`_ for valid values for ``<tag>``)


.. |downloads_shapemapper| image:: https://img.shields.io/conda/dn/bioconda/shapemapper.svg?style=flat
   :target: https://anaconda.org/bioconda/shapemapper
   :alt:   (downloads)
.. |docker_shapemapper| image:: https://quay.io/repository/biocontainers/shapemapper/status
   :target: https://quay.io/repository/biocontainers/shapemapper
.. _`shapemapper/tags`: https://quay.io/repository/biocontainers/shapemapper?tab=tags


.. raw:: html

    <script>
        var package = "shapemapper";
        var versions = ["1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapemapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapemapper/README.html