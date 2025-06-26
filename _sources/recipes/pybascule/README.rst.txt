:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybascule'
.. highlight: bash

pybascule
=========

.. conda:recipe:: pybascule
   :replaces_section_title:
   :noindex:

   Bayesian NMF signatures deconvolution and DP clustering.

   :homepage: https://github.com/caravagnalab/pybascule
   :license: GPL-3.0-only
   :recipe: /`pybascule <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybascule>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybascule/meta.yaml>`_

   


.. conda:package:: pybascule

   |downloads_pybascule| |docker_pybascule|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends numpy: ``1.*``
   :depends pandas: ``>=1.4.2``
   :depends pyro-api: ``0.1.2``
   :depends pyro-ppl: ``1.8.0``
   :depends python: ``>=3.8``
   :depends pytorch: ``1.*``
   :depends scikit-learn: 
   :depends scipy: 
   :depends statsmodels: 
   :depends tqdm: 
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

      mamba install pybascule

   and update with::

      mamba update pybascule

  To create a new environment, run::

      mamba create --name myenvname pybascule

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybascule:<tag>

   (see `pybascule/tags`_ for valid values for ``<tag>``)


.. |downloads_pybascule| image:: https://img.shields.io/conda/dn/bioconda/pybascule.svg?style=flat
   :target: https://anaconda.org/bioconda/pybascule
   :alt:   (downloads)
.. |docker_pybascule| image:: https://quay.io/repository/biocontainers/pybascule/status
   :target: https://quay.io/repository/biocontainers/pybascule
.. _`pybascule/tags`: https://quay.io/repository/biocontainers/pybascule?tab=tags


.. raw:: html

    <script>
        var package = "pybascule";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybascule/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybascule/README.html