:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'inmoose'
.. highlight: bash

inmoose
=======

.. conda:recipe:: inmoose
   :replaces_section_title:
   :noindex:

   InMoose is the Integrated Multi Omic Open Source Environment. It is a collection of tools for the analysis of omic data.

   :homepage: https://github.com/epigenelabs/inmoose
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`inmoose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inmoose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inmoose/meta.yaml>`_

   


.. conda:package:: inmoose

   |downloads_inmoose| |docker_inmoose|

   :versions:
      
      

      ``0.7.2-1``,  ``0.7.2-0``

      

   
   :depends anndata: 
   :depends click: 
   :depends fastcluster: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: 
   :depends mpmath: ``>=1.1.0``
   :depends numpy: ``>=1.21,<3``
   :depends pandas: 
   :depends patsy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install inmoose

   and update with::

      mamba update inmoose

  To create a new environment, run::

      mamba create --name myenvname inmoose

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/inmoose:<tag>

   (see `inmoose/tags`_ for valid values for ``<tag>``)


.. |downloads_inmoose| image:: https://img.shields.io/conda/dn/bioconda/inmoose.svg?style=flat
   :target: https://anaconda.org/bioconda/inmoose
   :alt:   (downloads)
.. |docker_inmoose| image:: https://quay.io/repository/biocontainers/inmoose/status
   :target: https://quay.io/repository/biocontainers/inmoose
.. _`inmoose/tags`: https://quay.io/repository/biocontainers/inmoose?tab=tags


.. raw:: html

    <script>
        var package = "inmoose";
        var versions = ["0.7.2","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/inmoose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/inmoose/README.html