:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chamois'
.. highlight: bash

chamois
=======

.. conda:recipe:: chamois
   :replaces_section_title:
   :noindex:

   Chemical Hierarchy Approximation for secondary Metabolism clusters Obtained In Silico.

   :homepage: https://chamois.readthedocs.io/
   :developer docs: https://github.com/zellerlab/CHAMOIS
   :license: GPL / GPL-3.0-or-later
   :recipe: /`chamois <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chamois>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chamois/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.03.13.642868`

   


.. conda:package:: chamois

   |downloads_chamois| |docker_chamois|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-0``

      

   
   :depends anndata: ``>=0.8,<0.10``
   :depends gb-io: ``>=0.3.1,<0.4``
   :depends importlib_resources: ``>=1.0``
   :depends kennard-stone: ``>=2.1,<3.0``
   :depends lz4: ``>=4.0,<5.0``
   :depends numpy: ``>=1.0,<3.0``
   :depends numpy: ``>=1.16,<3.0``
   :depends pandas: ``>=1.3,<3.0``
   :depends platformdirs: ``>=3.0,<5.0``
   :depends pyhmmer: ``>=0.12.0,<0.13.0``
   :depends pyrodigal: ``>=3.0,<4.0``
   :depends python: ``>=3.7``
   :depends rdkit: ``>=2023.3``
   :depends rich: ``>=12.4.0``
   :depends rich-argparse: ``>=1.1,<2.0``
   :depends scikit-learn: ``>=1.0,<2.0``
   :depends scipy: ``>=1.4,<2.0``
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

      mamba install chamois

   and update with::

      mamba update chamois

  To create a new environment, run::

      mamba create --name myenvname chamois

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chamois:<tag>

   (see `chamois/tags`_ for valid values for ``<tag>``)


.. |downloads_chamois| image:: https://img.shields.io/conda/dn/bioconda/chamois.svg?style=flat
   :target: https://anaconda.org/bioconda/chamois
   :alt:   (downloads)
.. |docker_chamois| image:: https://quay.io/repository/biocontainers/chamois/status
   :target: https://quay.io/repository/biocontainers/chamois
.. _`chamois/tags`: https://quay.io/repository/biocontainers/chamois?tab=tags


.. raw:: html

    <script>
        var package = "chamois";
        var versions = ["0.2.1","0.2.0","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chamois/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chamois/README.html