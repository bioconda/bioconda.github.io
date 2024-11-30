:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cospar'
.. highlight: bash

cospar
======

.. conda:recipe:: cospar
   :replaces_section_title:
   :noindex:

   A toolkit for dynamic inference of cell fate by integrating state and lineage information.

   :homepage: https://github.com/ShouWenWang-Lab/cospar
   :license: MIT
   :recipe: /`cospar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cospar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cospar/meta.yaml>`_

   


.. conda:package:: cospar

   |downloads_cospar| |docker_cospar|

   :versions:
      
      

      ``0.4.1-0``,  ``0.3.3-0``

      

   
   :depends anndata: ``>=0.9.2,<0.10.0``
   :depends ete3: ``>=3.1.3,<4.0.0``
   :depends fastcluster: ``>=1.2.6,<2.0.0``
   :depends gseapy: ``>=1.1.3,<2.0.0``
   :depends leidenalg: ``>=0.10.2,<0.11.0``
   :depends matplotlib-base: ``>=3.7.3,<3.8.0``
   :depends numpy: ``>=1.24.4,<2.0.0``
   :depends pandas: ``>=2.0.3,<3.0.0``
   :depends plotnine: ``>=0.12.4,<0.13.0``
   :depends python: ``>=3.9,<3.12``
   :depends scanpy: ``>=1.9.8,<2.0.0``
   :depends scikit-learn: ``>=1.1.3,<1.2.0``
   :depends scikit-misc: ``>=0.1.4,<0.3.0``
   :depends scipy: ``>=1.10.1,<2.0.0``
   :depends statsmodels: ``>=0.14.2,<0.15.0``
   :depends tqdm: ``>=4.66.5,<5.0.0``
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

      mamba install cospar

   and update with::

      mamba update cospar

  To create a new environment, run::

      mamba create --name myenvname cospar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cospar:<tag>

   (see `cospar/tags`_ for valid values for ``<tag>``)


.. |downloads_cospar| image:: https://img.shields.io/conda/dn/bioconda/cospar.svg?style=flat
   :target: https://anaconda.org/bioconda/cospar
   :alt:   (downloads)
.. |docker_cospar| image:: https://quay.io/repository/biocontainers/cospar/status
   :target: https://quay.io/repository/biocontainers/cospar
.. _`cospar/tags`: https://quay.io/repository/biocontainers/cospar?tab=tags


.. raw:: html

    <script>
        var package = "cospar";
        var versions = ["0.4.1","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cospar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cospar/README.html