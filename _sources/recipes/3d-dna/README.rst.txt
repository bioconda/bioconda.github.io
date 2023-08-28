:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe '3d-dna'
.. highlight: bash

3d-dna
======

.. conda:recipe:: 3d-dna
   :replaces_section_title:
   :noindex:

   3D de novo assembly \(3D\-DNA\) pipeline.

   :homepage: https://github.com/aidenlab/3d-dna/tree/201008
   :license: MIT
   :recipe: /`3d-dna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/3d-dna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/3d-dna/meta.yaml>`_

   


.. conda:package:: 3d-dna

   |downloads_3d-dna| |docker_3d-dna|

   :versions:
      
      

      ``201008-0``

      

   
   :depends bash: ``>=5.0.018``
   :depends coreutils: ``>=8.32``
   :depends gawk: ``>=5.1.0``
   :depends lastz: ``>=1.04.15``
   :depends openjdk: ``>=8.0.152``
   :depends parallel: ``>=20211222``
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

      mamba install 3d-dna

   and update with::

      mamba update 3d-dna

  To create a new environment, run::

      mamba create --name myenvname 3d-dna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/3d-dna:<tag>

   (see `3d-dna/tags`_ for valid values for ``<tag>``)


.. |downloads_3d-dna| image:: https://img.shields.io/conda/dn/bioconda/3d-dna.svg?style=flat
   :target: https://anaconda.org/bioconda/3d-dna
   :alt:   (downloads)
.. |docker_3d-dna| image:: https://quay.io/repository/biocontainers/3d-dna/status
   :target: https://quay.io/repository/biocontainers/3d-dna
.. _`3d-dna/tags`: https://quay.io/repository/biocontainers/3d-dna?tab=tags


.. raw:: html

    <script>
        var package = "3d-dna";
        var versions = ["201008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/3d-dna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/3d-dna/README.html