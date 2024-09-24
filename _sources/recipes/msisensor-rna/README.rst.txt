:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msisensor-rna'
.. highlight: bash

msisensor-rna
=============

.. conda:recipe:: msisensor-rna
   :replaces_section_title:
   :noindex:

   MSIsensor\-RNA\: Microsatellite instability detection using RNA sequencing data.

   :homepage: https://github.com/xjtu-omics/msisensor-rna
   :license: Community-Spec-1.0
   :recipe: /`msisensor-rna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor-rna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor-rna/meta.yaml>`_
   :links: doi: :doi:`10.1093/gpbjnl/qzae004`

   


.. conda:package:: msisensor-rna

   |downloads_msisensor-rna| |docker_msisensor-rna|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.6a-0``

      

   
   :depends imbalanced-learn: ``>=0.8.0``
   :depends numpy: ``>=1.16``
   :depends pandas: ``>=1.0``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.24``
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

      mamba install msisensor-rna

   and update with::

      mamba update msisensor-rna

  To create a new environment, run::

      mamba create --name myenvname msisensor-rna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msisensor-rna:<tag>

   (see `msisensor-rna/tags`_ for valid values for ``<tag>``)


.. |downloads_msisensor-rna| image:: https://img.shields.io/conda/dn/bioconda/msisensor-rna.svg?style=flat
   :target: https://anaconda.org/bioconda/msisensor-rna
   :alt:   (downloads)
.. |docker_msisensor-rna| image:: https://quay.io/repository/biocontainers/msisensor-rna/status
   :target: https://quay.io/repository/biocontainers/msisensor-rna
.. _`msisensor-rna/tags`: https://quay.io/repository/biocontainers/msisensor-rna?tab=tags


.. raw:: html

    <script>
        var package = "msisensor-rna";
        var versions = ["0.1.6","0.1.6a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msisensor-rna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msisensor-rna/README.html