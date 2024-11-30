:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vgorient'
.. highlight: bash

vgorient
========

.. conda:recipe:: vgorient
   :replaces_section_title:
   :noindex:

   Scripts for processing mitochondrial graphs.

   :homepage: https://github.com/whelixw/vgOrient
   :documentation: https://github.com/whelixw/vgOrient/blob/v0.1.1/README.md
   
   :license: MIT / MIT
   :recipe: /`vgorient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vgorient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vgorient/meta.yaml>`_

   MitoGraphs is a collection of scripts for analyzing and processing mitochondrial genome graphs using various bioinformatics tools.



.. conda:package:: vgorient

   |downloads_vgorient| |docker_vgorient|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends biopython: ``>=1.83``
   :depends networkx: ``>=3.3``
   :depends numpy: ``>=1.26.4``
   :depends python: ``>=3.8,<3.12``
   :depends vg: 
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

      mamba install vgorient

   and update with::

      mamba update vgorient

  To create a new environment, run::

      mamba create --name myenvname vgorient

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vgorient:<tag>

   (see `vgorient/tags`_ for valid values for ``<tag>``)


.. |downloads_vgorient| image:: https://img.shields.io/conda/dn/bioconda/vgorient.svg?style=flat
   :target: https://anaconda.org/bioconda/vgorient
   :alt:   (downloads)
.. |docker_vgorient| image:: https://quay.io/repository/biocontainers/vgorient/status
   :target: https://quay.io/repository/biocontainers/vgorient
.. _`vgorient/tags`: https://quay.io/repository/biocontainers/vgorient?tab=tags


.. raw:: html

    <script>
        var package = "vgorient";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vgorient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vgorient/README.html