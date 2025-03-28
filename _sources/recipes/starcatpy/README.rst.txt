:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'starcatpy'
.. highlight: bash

starcatpy
=========

.. conda:recipe:: starcatpy
   :replaces_section_title:
   :noindex:

   Implements \*CellAnnotator \(aka \*CAT\/starCAT\)\, annotating scRNA\-Seq with predefined gene expression programs.

   :homepage: https://github.com/immunogenomics/starCAT
   :license: MIT / MIT
   :recipe: /`starcatpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starcatpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starcatpy/meta.yaml>`_

   


.. conda:package:: starcatpy

   |downloads_starcatpy| |docker_starcatpy|

   :versions:
      
      

      ``1.0.9-0``,  ``1.0.8-0``

      

   
   :depends anndata: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :depends scikit-learn: ``>=1.0``
   :depends scipy: 
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

      mamba install starcatpy

   and update with::

      mamba update starcatpy

  To create a new environment, run::

      mamba create --name myenvname starcatpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/starcatpy:<tag>

   (see `starcatpy/tags`_ for valid values for ``<tag>``)


.. |downloads_starcatpy| image:: https://img.shields.io/conda/dn/bioconda/starcatpy.svg?style=flat
   :target: https://anaconda.org/bioconda/starcatpy
   :alt:   (downloads)
.. |docker_starcatpy| image:: https://quay.io/repository/biocontainers/starcatpy/status
   :target: https://quay.io/repository/biocontainers/starcatpy
.. _`starcatpy/tags`: https://quay.io/repository/biocontainers/starcatpy?tab=tags


.. raw:: html

    <script>
        var package = "starcatpy";
        var versions = ["1.0.9","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/starcatpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/starcatpy/README.html