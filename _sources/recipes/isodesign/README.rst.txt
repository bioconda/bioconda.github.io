:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isodesign'
.. highlight: bash

isodesign
=========

.. conda:recipe:: isodesign
   :replaces_section_title:
   :noindex:

   Facilitates the choice of the optimal isotopic composition of labeled substrates in 13C\-fluxomics experiments.

   :homepage: https://github.com/MetaboHUB-MetaToul-FluxoMet/IsoDesign
   :documentation: https://isodesign.readthedocs.io/en/latest/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`isodesign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isodesign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isodesign/meta.yaml>`_

   


.. conda:package:: isodesign

   |downloads_isodesign| |docker_isodesign|

   :versions:
      
      

      ``2.0.2-0``,  ``2.0.1-0``

      

   
   :depends influx_si: ``>=7.2.4``
   :depends numpy: ``>=1.24.0,<2.0.0``
   :depends openpyxl: ``>=3.1.5``
   :depends pandas: ``>=2.1.4``
   :depends plotly: ``>=5.23.0,<6.0.0``
   :depends python: ``>=3.10``
   :depends sess_i: ``>=0.2.1``
   :depends streamlit: ``>=1.41``
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

      mamba install isodesign

   and update with::

      mamba update isodesign

  To create a new environment, run::

      mamba create --name myenvname isodesign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isodesign:<tag>

   (see `isodesign/tags`_ for valid values for ``<tag>``)


.. |downloads_isodesign| image:: https://img.shields.io/conda/dn/bioconda/isodesign.svg?style=flat
   :target: https://anaconda.org/bioconda/isodesign
   :alt:   (downloads)
.. |docker_isodesign| image:: https://quay.io/repository/biocontainers/isodesign/status
   :target: https://quay.io/repository/biocontainers/isodesign
.. _`isodesign/tags`: https://quay.io/repository/biocontainers/isodesign?tab=tags


.. raw:: html

    <script>
        var package = "isodesign";
        var versions = ["2.0.2","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isodesign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isodesign/README.html