:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bakdrive'
.. highlight: bash

bakdrive
========

.. conda:recipe:: bakdrive
   :replaces_section_title:
   :noindex:

   Bakdrive finds a minimum set of driver species from real metagenomic samples and simulates fecal microbial transplantation \(FMT\) process

   :homepage: https://gitlab.com/treangenlab/bakdrive
   :license: MIT
   :recipe: /`bakdrive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakdrive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakdrive/meta.yaml>`_

   


.. conda:package:: bakdrive

   |downloads_bakdrive| |docker_bakdrive|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends biopython: 
   :depends micom: 
   :depends pulp: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bakdrive

   and update with::

      mamba update bakdrive

  To create a new environment, run::

      mamba create --name myenvname bakdrive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bakdrive:<tag>

   (see `bakdrive/tags`_ for valid values for ``<tag>``)


.. |downloads_bakdrive| image:: https://img.shields.io/conda/dn/bioconda/bakdrive.svg?style=flat
   :target: https://anaconda.org/bioconda/bakdrive
   :alt:   (downloads)
.. |docker_bakdrive| image:: https://quay.io/repository/biocontainers/bakdrive/status
   :target: https://quay.io/repository/biocontainers/bakdrive
.. _`bakdrive/tags`: https://quay.io/repository/biocontainers/bakdrive?tab=tags


.. raw:: html

    <script>
        var package = "bakdrive";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bakdrive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bakdrive/README.html