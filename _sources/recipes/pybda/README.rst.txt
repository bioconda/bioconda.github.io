:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybda'
.. highlight: bash

pybda
=====

.. conda:recipe:: pybda
   :replaces_section_title:
   :noindex:

   Big biological data analytics powered by Apache Spark

   :homepage: https://github.com/cbg-ethz/pybda
   :documentation: https://pybda.readthedocs.io/en/latest/
   
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`pybda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybda/meta.yaml>`_

   


.. conda:package:: pybda

   |downloads_pybda| |docker_pybda|

   :versions:
      
      

      ``0.1.0-0``,  ``0.0.6-0``

      

   
   :depends click: ``>=6.7``
   :depends joypy: ``>=0.1.10``
   :depends matplotlib: 
   :depends numpy: ``>=1.15.0``
   :depends pandas: ``>=0.23.3``
   :depends pyspark: ``2.4.0.*``
   :depends python: ``3.6.*``
   :depends scipy: ``>=1.0.0``
   :depends seaborn: 
   :depends snakemake: ``>=5.2.2``
   :depends sparkhpc: ``>=0.3.post4``
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

      mamba install pybda

   and update with::

      mamba update pybda

  To create a new environment, run::

      mamba create --name myenvname pybda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybda:<tag>

   (see `pybda/tags`_ for valid values for ``<tag>``)


.. |downloads_pybda| image:: https://img.shields.io/conda/dn/bioconda/pybda.svg?style=flat
   :target: https://anaconda.org/bioconda/pybda
   :alt:   (downloads)
.. |docker_pybda| image:: https://quay.io/repository/biocontainers/pybda/status
   :target: https://quay.io/repository/biocontainers/pybda
.. _`pybda/tags`: https://quay.io/repository/biocontainers/pybda?tab=tags


.. raw:: html

    <script>
        var package = "pybda";
        var versions = ["0.1.0","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybda/README.html