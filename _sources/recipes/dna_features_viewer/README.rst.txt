:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dna_features_viewer'
.. highlight: bash

dna_features_viewer
===================

.. conda:recipe:: dna_features_viewer
   :replaces_section_title:
   :noindex:

   Plot features from DNA sequences \(e.g. Genbank\) with Python.

   :homepage: https://github.com/Edinburgh-Genome-Foundry/DnaFeaturesViewer
   :documentation: https://edinburgh-genome-foundry.github.io/DnaFeaturesViewer
   
   :license: MIT / MIT
   :recipe: /`dna_features_viewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dna_features_viewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dna_features_viewer/meta.yaml>`_

   


.. conda:package:: dna_features_viewer

   |downloads_dna_features_viewer| |docker_dna_features_viewer|

   :versions:
      
      

      ``3.1.5-0``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: ``>=3``
   :depends packaging: 
   :depends python: 
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

      mamba install dna_features_viewer

   and update with::

      mamba update dna_features_viewer

  To create a new environment, run::

      mamba create --name myenvname dna_features_viewer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dna_features_viewer:<tag>

   (see `dna_features_viewer/tags`_ for valid values for ``<tag>``)


.. |downloads_dna_features_viewer| image:: https://img.shields.io/conda/dn/bioconda/dna_features_viewer.svg?style=flat
   :target: https://anaconda.org/bioconda/dna_features_viewer
   :alt:   (downloads)
.. |docker_dna_features_viewer| image:: https://quay.io/repository/biocontainers/dna_features_viewer/status
   :target: https://quay.io/repository/biocontainers/dna_features_viewer
.. _`dna_features_viewer/tags`: https://quay.io/repository/biocontainers/dna_features_viewer?tab=tags


.. raw:: html

    <script>
        var package = "dna_features_viewer";
        var versions = ["3.1.5","3.1.4","3.1.3","3.1.2","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dna_features_viewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dna_features_viewer/README.html