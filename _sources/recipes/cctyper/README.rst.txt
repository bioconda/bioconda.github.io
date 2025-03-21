:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cctyper'
.. highlight: bash

cctyper
=======

.. conda:recipe:: cctyper
   :replaces_section_title:
   :noindex:

   CRISPRCasTyper\: Automatic detection and subtyping of CRISPR\-Cas operons

   :homepage: https://github.com/Russel88/CRISPRCasTyper
   :license: MIT
   :recipe: /`cctyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cctyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cctyper/meta.yaml>`_
   :links: doi: :doi:`10.1089/crispr.2020.0059`

   


.. conda:package:: cctyper

   |downloads_cctyper| |docker_cctyper|

   :versions:
      
      

      ``1.8.0-1``,  ``1.8.0-0``

      

   
   :depends biopython: ``>=1.78,<=1.79``
   :depends blast: ``>=2.5,<3``
   :depends cairosvg: 
   :depends drawsvg: ``>=1.8.0,<2``
   :depends grep: 
   :depends hmmer: ``>=3.0,<4``
   :depends imageio: 
   :depends libxgboost: ``>=1.7,<2``
   :depends minced: ``>=0.4.2,<0.5``
   :depends multiprocess: ``>=0.70.14,<=0.70.15``
   :depends numpy: ``>=1.16,<=1.24.3``
   :depends pandas: ``>=1.3,<=2.0.3``
   :depends prodigal: ``>=2.0,<=2.6.2``
   :depends py-xgboost: ``>=1.4,<2``
   :depends python: ``>=3.8``
   :depends scikit-learn: ``>=1.1.3,<=1.3.0``
   :depends scipy: ``>=1,<=1.10.1``
   :depends sed: 
   :depends tqdm: ``>=4.64.1,<=4.66.5``
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

      mamba install cctyper

   and update with::

      mamba update cctyper

  To create a new environment, run::

      mamba create --name myenvname cctyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cctyper:<tag>

   (see `cctyper/tags`_ for valid values for ``<tag>``)


.. |downloads_cctyper| image:: https://img.shields.io/conda/dn/bioconda/cctyper.svg?style=flat
   :target: https://anaconda.org/bioconda/cctyper
   :alt:   (downloads)
.. |docker_cctyper| image:: https://quay.io/repository/biocontainers/cctyper/status
   :target: https://quay.io/repository/biocontainers/cctyper
.. _`cctyper/tags`: https://quay.io/repository/biocontainers/cctyper?tab=tags


.. raw:: html

    <script>
        var package = "cctyper";
        var versions = ["1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cctyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cctyper/README.html