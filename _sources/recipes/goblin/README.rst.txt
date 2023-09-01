:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goblin'
.. highlight: bash

goblin
======

.. conda:recipe:: goblin
   :replaces_section_title:
   :noindex:

   Generate trusted prOteins to supplement BacteriaL annotatIoN

   :homepage: https://github.com/rpetit3/goblin
   :license: MIT
   :recipe: /`goblin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goblin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goblin/meta.yaml>`_

   


.. conda:package:: goblin

   |downloads_goblin| |docker_goblin|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends cd-hit: 
   :depends executor: 
   :depends ncbi-genome-download: 
   :depends pigz: 
   :depends python: ``>=3.7``
   :depends rich-click: 
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

      mamba install goblin

   and update with::

      mamba update goblin

  To create a new environment, run::

      mamba create --name myenvname goblin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/goblin:<tag>

   (see `goblin/tags`_ for valid values for ``<tag>``)


.. |downloads_goblin| image:: https://img.shields.io/conda/dn/bioconda/goblin.svg?style=flat
   :target: https://anaconda.org/bioconda/goblin
   :alt:   (downloads)
.. |docker_goblin| image:: https://quay.io/repository/biocontainers/goblin/status
   :target: https://quay.io/repository/biocontainers/goblin
.. _`goblin/tags`: https://quay.io/repository/biocontainers/goblin?tab=tags


.. raw:: html

    <script>
        var package = "goblin";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goblin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goblin/README.html