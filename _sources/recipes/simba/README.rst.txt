:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simba'
.. highlight: bash

simba
=====

.. conda:recipe:: simba
   :replaces_section_title:
   :noindex:

   SIMBA \- SIngle\-cell eMBedding Along with features

   :homepage: https://github.com/huidongchen/simba
   :license: BSD / BSD-3
   :recipe: /`simba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simba/meta.yaml>`_

   


.. conda:package:: simba

   |downloads_simba| |docker_simba|

   :versions:
      
      

      ``1.2-0``,  ``1.1-0``,  ``1.0-0``,  ``0.1-0``,  ``0.1a-0``

      

   
   :depends adjusttext: ``>=0.7.3``
   :depends anndata: ``>=0.7.4``
   :depends kneed: ``>=0.7``
   :depends matplotlib-base: ``>=3.3``
   :depends numpy: ``>=1.17.0``
   :depends pandas: ``>=1.0,!=1.1``
   :depends pybedtools: ``>=0.8.0``
   :depends pytables: 
   :depends python: 
   :depends scikit-learn: ``>=1.2``
   :depends scikit-misc: ``>=0.1.3``
   :depends scipy: ``>=1.4``
   :depends seaborn: ``>=0.11``
   :depends simba_pbg: ``>=1.2``
   :depends umap-learn: ``>=0.3.0``
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

      mamba install simba

   and update with::

      mamba update simba

  To create a new environment, run::

      mamba create --name myenvname simba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/simba:<tag>

   (see `simba/tags`_ for valid values for ``<tag>``)


.. |downloads_simba| image:: https://img.shields.io/conda/dn/bioconda/simba.svg?style=flat
   :target: https://anaconda.org/bioconda/simba
   :alt:   (downloads)
.. |docker_simba| image:: https://quay.io/repository/biocontainers/simba/status
   :target: https://quay.io/repository/biocontainers/simba
.. _`simba/tags`: https://quay.io/repository/biocontainers/simba?tab=tags


.. raw:: html

    <script>
        var package = "simba";
        var versions = ["1.2","1.1","1.0","0.1","0.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simba/README.html