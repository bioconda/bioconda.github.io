:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svviz'
.. highlight: bash

svviz
=====

.. conda:recipe:: svviz
   :replaces_section_title:
   :noindex:

   A read visualizer for structural variants

   :homepage: https://github.com/svviz/svviz
   :license: MIT License
   :recipe: /`svviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svviz/meta.yaml>`_

   


.. conda:package:: svviz

   |downloads_svviz| |docker_svviz|

   :versions:
      
      

      ``1.6.2-6``,  ``1.6.2-5``,  ``1.6.2-4``,  ``1.6.2-3``,  ``1.6.2-2``,  ``1.6.2-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.4.0-0``

      

   
   :depends flask: 
   :depends joblib: 
   :depends libgcc-ng: ``>=12``
   :depends numpy: 
   :depends pyfaidx: 
   :depends pysam: ``>=0.7.8``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends requests: 
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

      mamba install svviz

   and update with::

      mamba update svviz

  To create a new environment, run::

      mamba create --name myenvname svviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svviz:<tag>

   (see `svviz/tags`_ for valid values for ``<tag>``)


.. |downloads_svviz| image:: https://img.shields.io/conda/dn/bioconda/svviz.svg?style=flat
   :target: https://anaconda.org/bioconda/svviz
   :alt:   (downloads)
.. |docker_svviz| image:: https://quay.io/repository/biocontainers/svviz/status
   :target: https://quay.io/repository/biocontainers/svviz
.. _`svviz/tags`: https://quay.io/repository/biocontainers/svviz?tab=tags


.. raw:: html

    <script>
        var package = "svviz";
        var versions = ["1.6.2","1.6.2","1.6.2","1.6.2","1.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svviz/README.html