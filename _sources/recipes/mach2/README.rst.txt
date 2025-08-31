:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mach2'
.. highlight: bash

mach2
=====

.. conda:recipe:: mach2
   :replaces_section_title:
   :noindex:

   Migration Analysis of Clonal Histories 2

   :homepage: https://github.com/elkebir-group/mach2
   :license: BSD-3-Clause
   :recipe: /`mach2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mach2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mach2/meta.yaml>`_

   


.. conda:package:: mach2

   |downloads_mach2| |docker_mach2|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1.1-0``

      

   
   :depends jupyterlab: 
   :depends networkx: 
   :depends pandas: 
   :depends python: ``>=3.12``
   :depends python-graphviz: 
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

      mamba install mach2

   and update with::

      mamba update mach2

  To create a new environment, run::

      mamba create --name myenvname mach2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mach2:<tag>

   (see `mach2/tags`_ for valid values for ``<tag>``)


.. |downloads_mach2| image:: https://img.shields.io/conda/dn/bioconda/mach2.svg?style=flat
   :target: https://anaconda.org/bioconda/mach2
   :alt:   (downloads)
.. |docker_mach2| image:: https://quay.io/repository/biocontainers/mach2/status
   :target: https://quay.io/repository/biocontainers/mach2
.. _`mach2/tags`: https://quay.io/repository/biocontainers/mach2?tab=tags


.. raw:: html

    <script>
        var package = "mach2";
        var versions = ["1.0.2","1.0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mach2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mach2/README.html