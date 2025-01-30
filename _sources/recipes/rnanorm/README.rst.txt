:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnanorm'
.. highlight: bash

rnanorm
=======

.. conda:recipe:: rnanorm
   :replaces_section_title:
   :noindex:

   Common RNA\-seq normalization methods

   :homepage: https://github.com/genialis/RNAnorm
   :license: Apache-2.0
   :recipe: /`rnanorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnanorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnanorm/meta.yaml>`_

   


.. conda:package:: rnanorm

   |downloads_rnanorm| |docker_rnanorm|

   :versions:
      
      

      ``2.2.0-0``,  ``2.1.0-0``

      

   
   :depends click: 
   :depends numpy: ``>=1.0.0``
   :depends pandas: ``>=1.0.0``
   :depends pandera: 
   :depends python: ``>=3.8,<3.13``
   :depends scikit-learn: ``>=1.0.0``
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

      mamba install rnanorm

   and update with::

      mamba update rnanorm

  To create a new environment, run::

      mamba create --name myenvname rnanorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnanorm:<tag>

   (see `rnanorm/tags`_ for valid values for ``<tag>``)


.. |downloads_rnanorm| image:: https://img.shields.io/conda/dn/bioconda/rnanorm.svg?style=flat
   :target: https://anaconda.org/bioconda/rnanorm
   :alt:   (downloads)
.. |docker_rnanorm| image:: https://quay.io/repository/biocontainers/rnanorm/status
   :target: https://quay.io/repository/biocontainers/rnanorm
.. _`rnanorm/tags`: https://quay.io/repository/biocontainers/rnanorm?tab=tags


.. raw:: html

    <script>
        var package = "rnanorm";
        var versions = ["2.2.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnanorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnanorm/README.html