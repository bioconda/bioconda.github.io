:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phynteny'
.. highlight: bash

phynteny
========

.. conda:recipe:: phynteny
   :replaces_section_title:
   :noindex:

   Phynteny\: Synteny\-based prediction of bacteriophage genes

   :homepage: https://github.com/susiegriggo/Phynteny
   :license: MIT / MIT
   :recipe: /`phynteny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phynteny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phynteny/meta.yaml>`_

   


.. conda:package:: phynteny

   |downloads_phynteny| |docker_phynteny|

   :versions:
      
      

      ``0.1.13-0``,  ``0.1.11-0``

      

   
   :depends alive-progress: 
   :depends biopython: ``>=1.79``
   :depends click: 
   :depends joblib: 
   :depends loguru: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``<3.11``
   :depends python_abi: 
   :depends scikit-learn: ``<=1.2.2``
   :depends tensorflow-cpu: ``2.9.1``
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

      mamba install phynteny

   and update with::

      mamba update phynteny

  To create a new environment, run::

      mamba create --name myenvname phynteny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phynteny:<tag>

   (see `phynteny/tags`_ for valid values for ``<tag>``)


.. |downloads_phynteny| image:: https://img.shields.io/conda/dn/bioconda/phynteny.svg?style=flat
   :target: https://anaconda.org/bioconda/phynteny
   :alt:   (downloads)
.. |docker_phynteny| image:: https://quay.io/repository/biocontainers/phynteny/status
   :target: https://quay.io/repository/biocontainers/phynteny
.. _`phynteny/tags`: https://quay.io/repository/biocontainers/phynteny?tab=tags


.. raw:: html

    <script>
        var package = "phynteny";
        var versions = ["0.1.13","0.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phynteny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phynteny/README.html