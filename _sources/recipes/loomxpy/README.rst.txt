:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'loomxpy'
.. highlight: bash

loomxpy
=======

.. conda:recipe:: loomxpy
   :replaces_section_title:
   :noindex:

   Python package \(compatible with SCope\) to create .loom files and extend them with other data \(like SCENIC regulons\)

   :homepage: https://github.com/aertslab/loomxpy
   :license: MIT
   :recipe: /`loomxpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/loomxpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/loomxpy/meta.yaml>`_

   


.. conda:package:: loomxpy

   |downloads_loomxpy| |docker_loomxpy|

   :versions:
      
      

      ``0.4.2-0``

      

   
   :depends click: 
   :depends dataclasses-json: ``>=0.5.3``
   :depends loompy: ``>=3.0.7,<4.0.0``
   :depends numpy: ``>=1.20.2``
   :depends pandas: ``>=1.2.4``
   :depends pyscenic: ``>=0.12.0``
   :depends python: ``>=3.9``
   :depends scikit-learn: ``>=0.24.2``
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

      mamba install loomxpy

   and update with::

      mamba update loomxpy

  To create a new environment, run::

      mamba create --name myenvname loomxpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/loomxpy:<tag>

   (see `loomxpy/tags`_ for valid values for ``<tag>``)


.. |downloads_loomxpy| image:: https://img.shields.io/conda/dn/bioconda/loomxpy.svg?style=flat
   :target: https://anaconda.org/bioconda/loomxpy
   :alt:   (downloads)
.. |docker_loomxpy| image:: https://quay.io/repository/biocontainers/loomxpy/status
   :target: https://quay.io/repository/biocontainers/loomxpy
.. _`loomxpy/tags`: https://quay.io/repository/biocontainers/loomxpy?tab=tags


.. raw:: html

    <script>
        var package = "loomxpy";
        var versions = ["0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/loomxpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/loomxpy/README.html