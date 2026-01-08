:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gather'
.. highlight: bash

gather
======

.. conda:recipe:: gather
   :replaces_section_title:
   :noindex:

   Assembly of heavy and light chain BCRs using De Bruijn graphs.

   :homepage: https://github.com/Neuroimmunology-UiO/gather
   :license: MIT
   :recipe: /`gather <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gather>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gather/meta.yaml>`_

   Gather is a Python\-based toolkit for assembling heavy and light chain BCRs from sequence data using
   De Bruijn graphs. It includes modules for processing 10X and single\-cell data.



.. conda:package:: gather

   |downloads_gather| |docker_gather|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends argcomplete: 
   :depends bcalm: ``>=2.2.3``
   :depends biopython: 
   :depends glob2: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: ``>=1.19``
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends rich: 
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

      mamba install gather

   and update with::

      mamba update gather

  To create a new environment, run::

      mamba create --name myenvname gather

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gather:<tag>

   (see `gather/tags`_ for valid values for ``<tag>``)


.. |downloads_gather| image:: https://img.shields.io/conda/dn/bioconda/gather.svg?style=flat
   :target: https://anaconda.org/bioconda/gather
   :alt:   (downloads)
.. |docker_gather| image:: https://quay.io/repository/biocontainers/gather/status
   :target: https://quay.io/repository/biocontainers/gather
.. _`gather/tags`: https://quay.io/repository/biocontainers/gather?tab=tags


.. raw:: html

    <script>
        var package = "gather";
        var versions = ["1.0.1","1.0.1","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gather/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gather/README.html