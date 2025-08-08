:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bandwagon'
.. highlight: bash

bandwagon
=========

.. conda:recipe:: bandwagon
   :replaces_section_title:
   :noindex:

   Simulate DNA band patterns for gel migration experiments

   :homepage: https://github.com/Edinburgh-Genome-Foundry/bandwagon
   :documentation: https://github.com/Edinburgh-Genome-Foundry/bandwagon/blob/v0.3.4/README.rst
   
   :license: MIT / MIT
   :recipe: /`bandwagon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandwagon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandwagon/meta.yaml>`_

   


.. conda:package:: bandwagon

   |downloads_bandwagon| |docker_bandwagon|

   :versions:
      
      

      ``0.3.4-0``

      

   
   :depends biopython: 
   :depends dna_features_viewer: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.9``
   :depends scipy: 
   :depends snapgene-reader: 
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

      mamba install bandwagon

   and update with::

      mamba update bandwagon

  To create a new environment, run::

      mamba create --name myenvname bandwagon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bandwagon:<tag>

   (see `bandwagon/tags`_ for valid values for ``<tag>``)


.. |downloads_bandwagon| image:: https://img.shields.io/conda/dn/bioconda/bandwagon.svg?style=flat
   :target: https://anaconda.org/bioconda/bandwagon
   :alt:   (downloads)
.. |docker_bandwagon| image:: https://quay.io/repository/biocontainers/bandwagon/status
   :target: https://quay.io/repository/biocontainers/bandwagon
.. _`bandwagon/tags`: https://quay.io/repository/biocontainers/bandwagon?tab=tags


.. raw:: html

    <script>
        var package = "bandwagon";
        var versions = ["0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bandwagon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bandwagon/README.html