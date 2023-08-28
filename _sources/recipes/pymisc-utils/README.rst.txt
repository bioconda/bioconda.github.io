:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymisc-utils'
.. highlight: bash

pymisc-utils
============

.. conda:recipe:: pymisc-utils
   :replaces_section_title:
   :noindex:

   Utility library for rp\-bp

   :homepage: https://github.com/dieterich-lab/pymisc-utils
   :license: MIT
   :recipe: /`pymisc-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymisc-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymisc-utils/meta.yaml>`_

   


.. conda:package:: pymisc-utils

   |downloads_pymisc-utils| |docker_pymisc-utils|

   :versions:
      
      

      ``0.2.11-6``,  ``0.2.11-5``,  ``0.2.11-4``,  ``0.2.11-3``,  ``0.2.11-2``,  ``0.2.11-1``,  ``0.2.11-0``,  ``0.2.10-1``,  ``0.2.10-0``

      

   
   :depends dask: 
   :depends docopt: 
   :depends fastparquet: 
   :depends graphviz: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends nltk: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends paramiko: 
   :depends pydot: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends six: 
   :depends statsmodels: 
   :depends tqdm: 
   :depends xlrd: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pymisc-utils

   and update with::

      mamba update pymisc-utils

  To create a new environment, run::

      mamba create --name myenvname pymisc-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pymisc-utils:<tag>

   (see `pymisc-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_pymisc-utils| image:: https://img.shields.io/conda/dn/bioconda/pymisc-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/pymisc-utils
   :alt:   (downloads)
.. |docker_pymisc-utils| image:: https://quay.io/repository/biocontainers/pymisc-utils/status
   :target: https://quay.io/repository/biocontainers/pymisc-utils
.. _`pymisc-utils/tags`: https://quay.io/repository/biocontainers/pymisc-utils?tab=tags


.. raw:: html

    <script>
        var package = "pymisc-utils";
        var versions = ["0.2.11","0.2.11","0.2.11","0.2.11","0.2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymisc-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymisc-utils/README.html