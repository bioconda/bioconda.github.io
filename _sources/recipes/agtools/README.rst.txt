:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agtools'
.. highlight: bash

agtools
=======

.. conda:recipe:: agtools
   :replaces_section_title:
   :noindex:

   agtools\: Tools for manipulating assembly graphs

   :homepage: https://github.com/Vini2/agtools
   :documentation: https://agtools.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`agtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agtools/meta.yaml>`_

   agtools is a toolkit for manipulating assembly graphs for downstream metagenomic applications\, with a focus on the Graphical Fragment Assembly \(GFA\) format.



.. conda:package:: agtools

   |downloads_agtools| |docker_agtools|

   :versions:
      
      

      ``1.0.0-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends bidict: 
   :depends biopython: 
   :depends click: 
   :depends loguru: 
   :depends pandas: 
   :depends pycairo: 
   :depends python: ``>=3.13,<3.14.0a0``
   :depends python-igraph: 
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

      mamba install agtools

   and update with::

      mamba update agtools

  To create a new environment, run::

      mamba create --name myenvname agtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/agtools:<tag>

   (see `agtools/tags`_ for valid values for ``<tag>``)


.. |downloads_agtools| image:: https://img.shields.io/conda/dn/bioconda/agtools.svg?style=flat
   :target: https://anaconda.org/bioconda/agtools
   :alt:   (downloads)
.. |docker_agtools| image:: https://quay.io/repository/biocontainers/agtools/status
   :target: https://quay.io/repository/biocontainers/agtools
.. _`agtools/tags`: https://quay.io/repository/biocontainers/agtools?tab=tags


.. raw:: html

    <script>
        var package = "agtools";
        var versions = ["1.0.0","0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agtools/README.html