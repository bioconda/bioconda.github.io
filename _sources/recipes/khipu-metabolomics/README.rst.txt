:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'khipu-metabolomics'
.. highlight: bash

khipu-metabolomics
==================

.. conda:recipe:: khipu-metabolomics
   :replaces_section_title:
   :noindex:

   Python library for generalized\, low\-level annotation of MS metabolomics

   :homepage: https://github.com/shuzhao-li/khipu
   :license: BSD-3-Clause
   :recipe: /`khipu-metabolomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/khipu-metabolomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/khipu-metabolomics/meta.yaml>`_

   


.. conda:package:: khipu-metabolomics

   |downloads_khipu-metabolomics| |docker_khipu-metabolomics|

   :versions:
      
      

      ``2.0.1-0``,  ``0.7.5-0``

      

   
   :depends intervaltree: 
   :depends isocor: 
   :depends mass2chem: 
   :depends matplotlib: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends requests: 
   :depends scipy: 
   :depends treelib: 
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

      mamba install khipu-metabolomics

   and update with::

      mamba update khipu-metabolomics

  To create a new environment, run::

      mamba create --name myenvname khipu-metabolomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/khipu-metabolomics:<tag>

   (see `khipu-metabolomics/tags`_ for valid values for ``<tag>``)


.. |downloads_khipu-metabolomics| image:: https://img.shields.io/conda/dn/bioconda/khipu-metabolomics.svg?style=flat
   :target: https://anaconda.org/bioconda/khipu-metabolomics
   :alt:   (downloads)
.. |docker_khipu-metabolomics| image:: https://quay.io/repository/biocontainers/khipu-metabolomics/status
   :target: https://quay.io/repository/biocontainers/khipu-metabolomics
.. _`khipu-metabolomics/tags`: https://quay.io/repository/biocontainers/khipu-metabolomics?tab=tags


.. raw:: html

    <script>
        var package = "khipu-metabolomics";
        var versions = ["2.0.1","0.7.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/khipu-metabolomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/khipu-metabolomics/README.html