:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shapeshifter'
.. highlight: bash

shapeshifter
============

.. conda:recipe:: shapeshifter
   :replaces_section_title:
   :noindex:

   A tool for managing large datasets

   :homepage: https://github.com/srp33/ShapeShifter
   :license: MIT / MIT
   :recipe: /`shapeshifter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeshifter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeshifter/meta.yaml>`_

   


.. conda:package:: shapeshifter

   |downloads_shapeshifter| |docker_shapeshifter|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``,  ``0.0.3-0``

      

   
   :depends nbformat: 
   :depends numpy: 
   :depends pandas: 
   :depends pyarrow: 
   :depends python: ``>=3``
   :depends sqlalchemy: 
   :depends xlrd: 
   :depends xlsxwriter: 
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

      mamba install shapeshifter

   and update with::

      mamba update shapeshifter

  To create a new environment, run::

      mamba create --name myenvname shapeshifter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shapeshifter:<tag>

   (see `shapeshifter/tags`_ for valid values for ``<tag>``)


.. |downloads_shapeshifter| image:: https://img.shields.io/conda/dn/bioconda/shapeshifter.svg?style=flat
   :target: https://anaconda.org/bioconda/shapeshifter
   :alt:   (downloads)
.. |docker_shapeshifter| image:: https://quay.io/repository/biocontainers/shapeshifter/status
   :target: https://quay.io/repository/biocontainers/shapeshifter
.. _`shapeshifter/tags`: https://quay.io/repository/biocontainers/shapeshifter?tab=tags


.. raw:: html

    <script>
        var package = "shapeshifter";
        var versions = ["1.1.1","1.1.1","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapeshifter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapeshifter/README.html