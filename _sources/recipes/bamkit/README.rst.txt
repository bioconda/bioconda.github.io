:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamkit'
.. highlight: bash

bamkit
======

.. conda:recipe:: bamkit
   :replaces_section_title:
   :noindex:

   Tools for common BAM file manipulations

   :homepage: https://github.com/hall-lab/bamkit
   :license: MIT
   :recipe: /`bamkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamkit/meta.yaml>`_

   


.. conda:package:: bamkit

   |downloads_bamkit| |docker_bamkit|

   :versions:
      
      

      ``16.07.26-0``

      

   
   :depends pysam: 
   :depends python: ``2.7.*``
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

      mamba install bamkit

   and update with::

      mamba update bamkit

  To create a new environment, run::

      mamba create --name myenvname bamkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamkit:<tag>

   (see `bamkit/tags`_ for valid values for ``<tag>``)


.. |downloads_bamkit| image:: https://img.shields.io/conda/dn/bioconda/bamkit.svg?style=flat
   :target: https://anaconda.org/bioconda/bamkit
   :alt:   (downloads)
.. |docker_bamkit| image:: https://quay.io/repository/biocontainers/bamkit/status
   :target: https://quay.io/repository/biocontainers/bamkit
.. _`bamkit/tags`: https://quay.io/repository/biocontainers/bamkit?tab=tags


.. raw:: html

    <script>
        var package = "bamkit";
        var versions = ["16.07.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamkit/README.html