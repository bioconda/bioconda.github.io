:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mpralib'
.. highlight: bash

mpralib
=======

.. conda:recipe:: mpralib
   :replaces_section_title:
   :noindex:

   Library to analyze count data of MPRA experiments.

   :homepage: https://github.com/kircherlab/MPRAlib
   :license: MIT
   :recipe: /`mpralib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpralib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpralib/meta.yaml>`_

   


.. conda:package:: mpralib

   |downloads_mpralib| |docker_mpralib|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``

      

   
   :depends anndata: ``>=0.11.3``
   :depends click: 
   :depends jsonschema: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install mpralib

   and update with::

      mamba update mpralib

  To create a new environment, run::

      mamba create --name myenvname mpralib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mpralib:<tag>

   (see `mpralib/tags`_ for valid values for ``<tag>``)


.. |downloads_mpralib| image:: https://img.shields.io/conda/dn/bioconda/mpralib.svg?style=flat
   :target: https://anaconda.org/bioconda/mpralib
   :alt:   (downloads)
.. |docker_mpralib| image:: https://quay.io/repository/biocontainers/mpralib/status
   :target: https://quay.io/repository/biocontainers/mpralib
.. _`mpralib/tags`: https://quay.io/repository/biocontainers/mpralib?tab=tags


.. raw:: html

    <script>
        var package = "mpralib";
        var versions = ["0.7.0","0.6.5","0.6.4","0.6.3","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mpralib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mpralib/README.html