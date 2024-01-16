:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neofox'
.. highlight: bash

neofox
======

.. conda:recipe:: neofox
   :replaces_section_title:
   :noindex:

   Annotation of mutated peptide sequences \(mps\) with published or novel potential neo\-epitope descriptors

   :homepage: https://github.com/tron-bioinformatics/neofox
   :documentation: https://neofox.readthedocs.io/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`neofox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neofox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neofox/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab344`

   


.. conda:package:: neofox

   |downloads_neofox| |docker_neofox|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.6.4-0``

      

   
   :depends betterproto: ``>=1.2.5,<1.3.0``
   :depends bioconductor-biostrings: 
   :depends biopython: ``1.76``
   :depends blast: 
   :depends dask: ``>=2022.2.0,<2023.0.0``
   :depends distributed: ``>=2022.2.0,<2023.0.0``
   :depends faker: ``>=13.13.0,<13.14.0``
   :depends logzero: ``>=1.5.0``
   :depends mock: ``>=4.0.3,<5.0.0``
   :depends numpy: ``>=1.21,<1.22``
   :depends orjson: ``>=3.5.2,<4.0.0``
   :depends pandas: ``>=1.3.5,<1.4``
   :depends pysam: 
   :depends python: ``>=3.7,<=3.8``
   :depends python-dotenv: ``>=0.12.0,<0.13.0``
   :depends r-base: 
   :depends r-caret: 
   :depends r-doparallel: 
   :depends r-gbm: 
   :depends r-ggplot2: 
   :depends r-lattice: 
   :depends r-peptides: 
   :depends scikit-learn: ``0.22.1``
   :depends scipy: ``>=1.7.3,<1.8``
   :depends xmltodict: ``>=0.12.0,<0.13.0``
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

      mamba install neofox

   and update with::

      mamba update neofox

  To create a new environment, run::

      mamba create --name myenvname neofox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/neofox:<tag>

   (see `neofox/tags`_ for valid values for ``<tag>``)


.. |downloads_neofox| image:: https://img.shields.io/conda/dn/bioconda/neofox.svg?style=flat
   :target: https://anaconda.org/bioconda/neofox
   :alt:   (downloads)
.. |docker_neofox| image:: https://quay.io/repository/biocontainers/neofox/status
   :target: https://quay.io/repository/biocontainers/neofox
.. _`neofox/tags`: https://quay.io/repository/biocontainers/neofox?tab=tags


.. raw:: html

    <script>
        var package = "neofox";
        var versions = ["1.1.0","1.0.2","1.0.1","1.0.0","0.6.4"];
    </script>





Notes
-----
NeoFox has some required and optional third party dependencies that have a non commercial use license. These dependencies can be installed following the guidelines here https\:\/\/neofox.readthedocs.io\/en\/latest\/02\_installation.html\#step\-by\-step\-guide\-without\-docker. Furthermore\, NeoFox requires to install some reference data\, the installation process is described here https\:\/\/neofox.readthedocs.io\/en\/latest\/02\_installation.html\#configuration\-of\-the\-reference\-folder


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neofox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neofox/README.html