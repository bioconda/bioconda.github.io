:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vclust'
.. highlight: bash

vclust
======

.. conda:recipe:: vclust
   :replaces_section_title:
   :noindex:

   Fast and accurate tool for calculating ANI and clustering virus genomes and metagenomes.

   :homepage: https://github.com/refresh-bio/vclust
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`vclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vclust/meta.yaml>`_

   


.. conda:package:: vclust

   |downloads_vclust| |docker_vclust|

   :versions:
      
      

      ``1.2.7-0``

      

   
   :depends python: ``>=3.13,<3.14.0a0``
   :depends python_abi: ``3.13.* *_cp313``
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

      mamba install vclust

   and update with::

      mamba update vclust

  To create a new environment, run::

      mamba create --name myenvname vclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vclust:<tag>

   (see `vclust/tags`_ for valid values for ``<tag>``)


.. |downloads_vclust| image:: https://img.shields.io/conda/dn/bioconda/vclust.svg?style=flat
   :target: https://anaconda.org/bioconda/vclust
   :alt:   (downloads)
.. |docker_vclust| image:: https://quay.io/repository/biocontainers/vclust/status
   :target: https://quay.io/repository/biocontainers/vclust
.. _`vclust/tags`: https://quay.io/repository/biocontainers/vclust?tab=tags


.. raw:: html

    <script>
        var package = "vclust";
        var versions = ["1.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vclust/README.html