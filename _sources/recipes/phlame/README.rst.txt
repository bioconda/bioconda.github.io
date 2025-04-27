:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phlame'
.. highlight: bash

phlame
======

.. conda:recipe:: phlame
   :replaces_section_title:
   :noindex:

   Novelty\-aware intraspecies profiling of metagenome samples.

   :homepage: https://github.com/quevan/phlame
   :license: MIT / MIT
   :recipe: /`phlame <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phlame>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phlame/meta.yaml>`_

   


.. conda:package:: phlame

   |downloads_phlame| |docker_phlame|

   :versions:
      
      

      ``1.0.8-0``

      

   
   :depends biopython: 
   :depends ete3: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pytest: 
   :depends python: ``<3.13``
   :depends seaborn-base: 
   :depends statsmodels: 
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

      mamba install phlame

   and update with::

      mamba update phlame

  To create a new environment, run::

      mamba create --name myenvname phlame

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phlame:<tag>

   (see `phlame/tags`_ for valid values for ``<tag>``)


.. |downloads_phlame| image:: https://img.shields.io/conda/dn/bioconda/phlame.svg?style=flat
   :target: https://anaconda.org/bioconda/phlame
   :alt:   (downloads)
.. |docker_phlame| image:: https://quay.io/repository/biocontainers/phlame/status
   :target: https://quay.io/repository/biocontainers/phlame
.. _`phlame/tags`: https://quay.io/repository/biocontainers/phlame?tab=tags


.. raw:: html

    <script>
        var package = "phlame";
        var versions = ["1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phlame/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phlame/README.html