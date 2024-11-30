:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'monopogen'
.. highlight: bash

monopogen
=========

.. conda:recipe:: monopogen
   :replaces_section_title:
   :noindex:

   Monopogen is an analysis package for SNV calling from single\-cell sequencing datasets generated from single cell RNA 10x 5\'\, 10x 3\'\, single ATAC\-seq technoloiges\, scDNA\-seq\, etc.

   :homepage: https://github.com/KChen-lab/Monopogen
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`monopogen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monopogen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monopogen/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-01873-x`

   


.. conda:package:: monopogen

   |downloads_monopogen| |docker_monopogen|

   :versions:
      
      

      ``1.6.0-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.1.0-0``

      

   
   :depends bcftools: 
   :depends beagle: 
   :depends numpy: ``>=1.19.5``
   :depends openjdk: 
   :depends pandas: ``>=1.2.3``
   :depends pillow: ``>=8.2.0``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.6``
   :depends r-base: 
   :depends r-data.table: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends samtools: 
   :depends scipy: ``>=1.6.3``
   :depends tabix: 
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

      mamba install monopogen

   and update with::

      mamba update monopogen

  To create a new environment, run::

      mamba create --name myenvname monopogen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/monopogen:<tag>

   (see `monopogen/tags`_ for valid values for ``<tag>``)


.. |downloads_monopogen| image:: https://img.shields.io/conda/dn/bioconda/monopogen.svg?style=flat
   :target: https://anaconda.org/bioconda/monopogen
   :alt:   (downloads)
.. |docker_monopogen| image:: https://quay.io/repository/biocontainers/monopogen/status
   :target: https://quay.io/repository/biocontainers/monopogen
.. _`monopogen/tags`: https://quay.io/repository/biocontainers/monopogen?tab=tags


.. raw:: html

    <script>
        var package = "monopogen";
        var versions = ["1.6.0","1.5.0","1.5.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/monopogen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/monopogen/README.html