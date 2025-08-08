:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dapcy'
.. highlight: bash

dapcy
=====

.. conda:recipe:: dapcy
   :replaces_section_title:
   :noindex:

   An sklearn implementation of discriminant analysis of principal components \(DAPC\) for population genetics.

   :homepage: https://gitlab.com/uhasselt-bioinfo/dapcy
   :documentation: https://uhasselt-bioinfo.gitlab.io/dapcy
   
   :license: MIT / MIT
   :recipe: /`dapcy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dapcy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dapcy/meta.yaml>`_

   


.. conda:package:: dapcy

   |downloads_dapcy| |docker_dapcy|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0.post1-0``,  ``1.3.0-0``,  ``1.0.1-0``,  ``0.1.1-0``

      

   
   :depends bed-reader: 
   :depends bio2zarr: ``>=0.1.6``
   :depends joblib: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends sgkit: 
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

      mamba install dapcy

   and update with::

      mamba update dapcy

  To create a new environment, run::

      mamba create --name myenvname dapcy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dapcy:<tag>

   (see `dapcy/tags`_ for valid values for ``<tag>``)


.. |downloads_dapcy| image:: https://img.shields.io/conda/dn/bioconda/dapcy.svg?style=flat
   :target: https://anaconda.org/bioconda/dapcy
   :alt:   (downloads)
.. |docker_dapcy| image:: https://quay.io/repository/biocontainers/dapcy/status
   :target: https://quay.io/repository/biocontainers/dapcy
.. _`dapcy/tags`: https://quay.io/repository/biocontainers/dapcy?tab=tags


.. raw:: html

    <script>
        var package = "dapcy";
        var versions = ["1.3.1","1.3.0.post1","1.3.0","1.0.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dapcy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dapcy/README.html