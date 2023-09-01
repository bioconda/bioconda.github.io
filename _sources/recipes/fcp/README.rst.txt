:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fcp'
.. highlight: bash

fcp
===

.. conda:recipe:: fcp
   :replaces_section_title:
   :noindex:

   Homology\- and composition\-based classifiers for assigning a taxonomic attribution to metagenomic fragments.

   :homepage: https://github.com/dparks1134/FragmentClassificationPackage
   :license: GPL3
   :recipe: /`fcp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fcp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fcp/meta.yaml>`_

   


.. conda:package:: fcp

   |downloads_fcp| |docker_fcp|

   :versions:
      
      

      ``1.0.7-0``

      

   
   :depends blast: 
   :depends libgcc: 
   :depends python: ``2.7*``
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

      mamba install fcp

   and update with::

      mamba update fcp

  To create a new environment, run::

      mamba create --name myenvname fcp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fcp:<tag>

   (see `fcp/tags`_ for valid values for ``<tag>``)


.. |downloads_fcp| image:: https://img.shields.io/conda/dn/bioconda/fcp.svg?style=flat
   :target: https://anaconda.org/bioconda/fcp
   :alt:   (downloads)
.. |docker_fcp| image:: https://quay.io/repository/biocontainers/fcp/status
   :target: https://quay.io/repository/biocontainers/fcp
.. _`fcp/tags`: https://quay.io/repository/biocontainers/fcp?tab=tags


.. raw:: html

    <script>
        var package = "fcp";
        var versions = ["1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fcp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fcp/README.html