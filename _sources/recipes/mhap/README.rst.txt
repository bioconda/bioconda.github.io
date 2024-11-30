:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhap'
.. highlight: bash

mhap
====

.. conda:recipe:: mhap
   :replaces_section_title:
   :noindex:

   MHAP\: MinHash Alignment Protocol. A tool for finding overlaps of long\-read sequences \(such as PacBio or Nanopore\) in bioinformatics.

   :homepage: https://github.com/marbl/MHAP
   :license: Apache / Apache-2.0
   :recipe: /`mhap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhap/meta.yaml>`_

   


.. conda:package:: mhap

   |downloads_mhap| |docker_mhap|

   :versions:
      
      

      ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.1-0``,  ``2.0-0``

      

   
   :depends openjdk: 
   :depends python: 
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

      mamba install mhap

   and update with::

      mamba update mhap

  To create a new environment, run::

      mamba create --name myenvname mhap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mhap:<tag>

   (see `mhap/tags`_ for valid values for ``<tag>``)


.. |downloads_mhap| image:: https://img.shields.io/conda/dn/bioconda/mhap.svg?style=flat
   :target: https://anaconda.org/bioconda/mhap
   :alt:   (downloads)
.. |docker_mhap| image:: https://quay.io/repository/biocontainers/mhap/status
   :target: https://quay.io/repository/biocontainers/mhap
.. _`mhap/tags`: https://quay.io/repository/biocontainers/mhap?tab=tags


.. raw:: html

    <script>
        var package = "mhap";
        var versions = ["2.1.3","2.1.3","2.1.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhap/README.html