:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnaweaver'
.. highlight: bash

dnaweaver
=========

.. conda:recipe:: dnaweaver
   :replaces_section_title:
   :noindex:

   Python library to find optimal strategies for assembling large DNA constructs.

   :homepage: https://github.com/Edinburgh-Genome-Foundry/DnaWeaver/
   :license: MIT
   :recipe: /`dnaweaver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaweaver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaweaver/meta.yaml>`_

   


.. conda:package:: dnaweaver

   |downloads_dnaweaver| |docker_dnaweaver|

   :versions:
      
      

      ``v0.3.7-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends dna_features_viewer: 
   :depends dnachisel: 
   :depends flametree: 
   :depends jinja2: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends proglog: 
   :depends python: ``>=3.6``
   :depends weasyprint: 
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

      mamba install dnaweaver

   and update with::

      mamba update dnaweaver

  To create a new environment, run::

      mamba create --name myenvname dnaweaver

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dnaweaver:<tag>

   (see `dnaweaver/tags`_ for valid values for ``<tag>``)


.. |downloads_dnaweaver| image:: https://img.shields.io/conda/dn/bioconda/dnaweaver.svg?style=flat
   :target: https://anaconda.org/bioconda/dnaweaver
   :alt:   (downloads)
.. |docker_dnaweaver| image:: https://quay.io/repository/biocontainers/dnaweaver/status
   :target: https://quay.io/repository/biocontainers/dnaweaver
.. _`dnaweaver/tags`: https://quay.io/repository/biocontainers/dnaweaver?tab=tags


.. raw:: html

    <script>
        var package = "dnaweaver";
        var versions = ["v0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnaweaver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnaweaver/README.html