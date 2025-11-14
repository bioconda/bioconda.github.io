:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'palantir'
.. highlight: bash

palantir
========

.. conda:recipe:: palantir
   :replaces_section_title:
   :noindex:

   Palantir for modeling continuous cell state and cell fate choices in single cell data

   :homepage: https://github.com/dpeerlab/palantir
   :documentation: https://palantir.readthedocs.io
   
   :license: GPL / GPL-2.0-only
   :recipe: /`palantir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/palantir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/palantir/meta.yaml>`_

   


.. conda:package:: palantir

   |downloads_palantir| |docker_palantir|

   :versions:
      
      

      ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.6-0``,  ``1.3.4-0``,  ``1.3.3-0``

      

   
   :depends anndata: ``>=0.8.0``
   :depends fcsparser: ``>=0.1.2``
   :depends joblib: 
   :depends leidenalg: ``>=0.9.1``
   :depends matplotlib-base: ``>=2.2.2``
   :depends mellon: ``>=1.3.0``
   :depends networkx: ``>=2.1``
   :depends numpy: ``>=1.14.2``
   :depends pandas: ``>=0.22.0``
   :depends pygam: 
   :depends python: 
   :depends scanpy: ``>=1.6.0``
   :depends scikit-learn: 
   :depends scipy: ``>=1.3``
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

      mamba install palantir

   and update with::

      mamba update palantir

  To create a new environment, run::

      mamba create --name myenvname palantir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/palantir:<tag>

   (see `palantir/tags`_ for valid values for ``<tag>``)


.. |downloads_palantir| image:: https://img.shields.io/conda/dn/bioconda/palantir.svg?style=flat
   :target: https://anaconda.org/bioconda/palantir
   :alt:   (downloads)
.. |docker_palantir| image:: https://quay.io/repository/biocontainers/palantir/status
   :target: https://quay.io/repository/biocontainers/palantir
.. _`palantir/tags`: https://quay.io/repository/biocontainers/palantir?tab=tags


.. raw:: html

    <script>
        var package = "palantir";
        var versions = ["1.4.2","1.4.1","1.4.0","1.3.6","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/palantir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/palantir/README.html