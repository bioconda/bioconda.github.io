:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'halla'
.. highlight: bash

halla
=====

.. conda:recipe:: halla
   :replaces_section_title:
   :noindex:

   HAllA\: Hierarchically All\-against\-All Association Testing.

   :homepage: http://huttenhower.sph.harvard.edu/halla
   :license: MIT / MIT
   :recipe: /`halla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/halla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/halla/meta.yaml>`_

   


.. conda:package:: halla

   |downloads_halla| |docker_halla|

   :versions:
      
      

      ``0.8.40-0``,  ``0.8.17-0``

      

   
   :depends jenkspy: ``>=0.1.5``
   :depends matplotlib-base: ``>=3.5.3``
   :depends numpy: ``>=1.19.0``
   :depends pandas: ``>=1.0.5``
   :depends python: 
   :depends pyyaml: ``>=5.4``
   :depends r-eva: ``>=0.2.6``
   :depends r-xicor: ``>=0.3.3``
   :depends rpy2: ``>=3.3.5``
   :depends scikit-learn: ``>=0.23.1``
   :depends scipy: ``>=1.5.1``
   :depends seaborn: ``>=0.10.1``
   :depends statsmodels: ``>=0.11.1``
   :depends tqdm: ``>=4.50.2``
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

      mamba install halla

   and update with::

      mamba update halla

  To create a new environment, run::

      mamba create --name myenvname halla

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/halla:<tag>

   (see `halla/tags`_ for valid values for ``<tag>``)


.. |downloads_halla| image:: https://img.shields.io/conda/dn/bioconda/halla.svg?style=flat
   :target: https://anaconda.org/bioconda/halla
   :alt:   (downloads)
.. |docker_halla| image:: https://quay.io/repository/biocontainers/halla/status
   :target: https://quay.io/repository/biocontainers/halla
.. _`halla/tags`: https://quay.io/repository/biocontainers/halla?tab=tags


.. raw:: html

    <script>
        var package = "halla";
        var versions = ["0.8.40","0.8.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/halla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/halla/README.html