:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hificnv'
.. highlight: bash

hificnv
=======

.. conda:recipe:: hificnv
   :replaces_section_title:
   :noindex:

   Copy number variant caller and depth visualization utility for PacBio HiFi reads

   :homepage: https://github.com/PacificBiosciences/HiFiCNV
   :license: BSD / BSD-3-Clause-Clear
   :recipe: /`hificnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hificnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hificnv/meta.yaml>`_

   


.. conda:package:: hificnv

   |downloads_hificnv| |docker_hificnv|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.6b-0``

      

   
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

      mamba install hificnv

   and update with::

      mamba update hificnv

  To create a new environment, run::

      mamba create --name myenvname hificnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hificnv:<tag>

   (see `hificnv/tags`_ for valid values for ``<tag>``)


.. |downloads_hificnv| image:: https://img.shields.io/conda/dn/bioconda/hificnv.svg?style=flat
   :target: https://anaconda.org/bioconda/hificnv
   :alt:   (downloads)
.. |docker_hificnv| image:: https://quay.io/repository/biocontainers/hificnv/status
   :target: https://quay.io/repository/biocontainers/hificnv
.. _`hificnv/tags`: https://quay.io/repository/biocontainers/hificnv?tab=tags


.. raw:: html

    <script>
        var package = "hificnv";
        var versions = ["0.1.7","0.1.6b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hificnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hificnv/README.html