:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'addeam'
.. highlight: bash

addeam
======

.. conda:recipe:: addeam
   :replaces_section_title:
   :noindex:

   A Fast and Scalable Tool for Estimating and Clustering Reference\-Level Damage Profiles.

   :homepage: https://github.com/LouisPwr/AdDeam
   :license: GPL-3.0-or-later
   :recipe: /`addeam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/addeam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/addeam/meta.yaml>`_
   :links: biotools: :biotools:`addeam`

   


.. conda:package:: addeam

   |downloads_addeam| |docker_addeam|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bottleneck: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends matplotlib-base: 
   :depends numpy: ``>=2``
   :depends opencv: 
   :depends pandas: 
   :depends pypdf2: 
   :depends python: ``>=3.13,<3.14.0a0``
   :depends samtools: ``>=1.22,<2.0a0``
   :depends scikit-learn: 
   :depends scipy: 
   :depends xz: 
   :depends zlib: 
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

      mamba install addeam

   and update with::

      mamba update addeam

  To create a new environment, run::

      mamba create --name myenvname addeam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/addeam:<tag>

   (see `addeam/tags`_ for valid values for ``<tag>``)


.. |downloads_addeam| image:: https://img.shields.io/conda/dn/bioconda/addeam.svg?style=flat
   :target: https://anaconda.org/bioconda/addeam
   :alt:   (downloads)
.. |docker_addeam| image:: https://quay.io/repository/biocontainers/addeam/status
   :target: https://quay.io/repository/biocontainers/addeam
.. _`addeam/tags`: https://quay.io/repository/biocontainers/addeam?tab=tags


.. raw:: html

    <script>
        var package = "addeam";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/addeam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/addeam/README.html