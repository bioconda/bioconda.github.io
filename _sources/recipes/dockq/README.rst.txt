:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dockq'
.. highlight: bash

dockq
=====

.. conda:recipe:: dockq
   :replaces_section_title:
   :noindex:

   A Quality Measure for Protein\, Nucleic Acids and Small Ligand Docking Modelsc

   :homepage: https://github.com/bjornwallner/DockQ
   :documentation: https://github.com/bjornwallner/DockQ#dockq
   
   :license: MIT / MIT
   :recipe: /`dockq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dockq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dockq/meta.yaml>`_

   


.. conda:package:: dockq

   |downloads_dockq| |docker_dockq|

   :versions:
      
      

      ``2.1.3-0``

      

   
   :depends biopython: ``>=1.79``
   :depends libgcc: ``>=12``
   :depends networkx: 
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends parallelbar: 
   :depends python: ``>=3.12,<3.13.0a0``
   :depends python_abi: ``3.12.* *_cp312``
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

      mamba install dockq

   and update with::

      mamba update dockq

  To create a new environment, run::

      mamba create --name myenvname dockq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dockq:<tag>

   (see `dockq/tags`_ for valid values for ``<tag>``)


.. |downloads_dockq| image:: https://img.shields.io/conda/dn/bioconda/dockq.svg?style=flat
   :target: https://anaconda.org/bioconda/dockq
   :alt:   (downloads)
.. |docker_dockq| image:: https://quay.io/repository/biocontainers/dockq/status
   :target: https://quay.io/repository/biocontainers/dockq
.. _`dockq/tags`: https://quay.io/repository/biocontainers/dockq?tab=tags


.. raw:: html

    <script>
        var package = "dockq";
        var versions = ["2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dockq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dockq/README.html