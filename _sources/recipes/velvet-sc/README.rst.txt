:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'velvet-sc'
.. highlight: bash

velvet-sc
=========

.. conda:recipe:: velvet-sc
   :replaces_section_title:
   :noindex:

   Efficient de novo assembly of single\-cell bacterial genomes from short\-read data sets

   :homepage: http://bix.ucsd.edu/projects/singlecell/
   :license: GPL / GPL-2.0
   :recipe: /`velvet-sc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velvet-sc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velvet-sc/meta.yaml>`_

   


.. conda:package:: velvet-sc

   |downloads_velvet-sc| |docker_velvet-sc|

   :versions:
      
      

      ``0.7.62-5``,  ``0.7.62-4``,  ``0.7.62-3``,  ``0.7.62-2``,  ``0.7.62-1``,  ``0.7.62-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends perl: 
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

      mamba install velvet-sc

   and update with::

      mamba update velvet-sc

  To create a new environment, run::

      mamba create --name myenvname velvet-sc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/velvet-sc:<tag>

   (see `velvet-sc/tags`_ for valid values for ``<tag>``)


.. |downloads_velvet-sc| image:: https://img.shields.io/conda/dn/bioconda/velvet-sc.svg?style=flat
   :target: https://anaconda.org/bioconda/velvet-sc
   :alt:   (downloads)
.. |docker_velvet-sc| image:: https://quay.io/repository/biocontainers/velvet-sc/status
   :target: https://quay.io/repository/biocontainers/velvet-sc
.. _`velvet-sc/tags`: https://quay.io/repository/biocontainers/velvet-sc?tab=tags


.. raw:: html

    <script>
        var package = "velvet-sc";
        var versions = ["0.7.62","0.7.62","0.7.62","0.7.62","0.7.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/velvet-sc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/velvet-sc/README.html