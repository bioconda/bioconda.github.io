:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'codoff'
.. highlight: bash

codoff
======

.. conda:recipe:: codoff
   :replaces_section_title:
   :noindex:

   codoff\: program to measure the irregularity of the codon usage for a single genomic region \(e.g. a BGC\, phage\, etc.\) relative to the full genome.

   :homepage: https://github.com/Kalan-Lab/codoff
   :license: BSD / BSD-3-Clause license
   :recipe: /`codoff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codoff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codoff/meta.yaml>`_

   


.. conda:package:: codoff

   |downloads_codoff| |docker_codoff|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.8-0``,  ``1.1.5-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends pyrodigal: 
   :depends python: ``>=3.10``
   :depends scipy: 
   :depends seaborn: 
   :depends setuptools: 
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

      mamba install codoff

   and update with::

      mamba update codoff

  To create a new environment, run::

      mamba create --name myenvname codoff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/codoff:<tag>

   (see `codoff/tags`_ for valid values for ``<tag>``)


.. |downloads_codoff| image:: https://img.shields.io/conda/dn/bioconda/codoff.svg?style=flat
   :target: https://anaconda.org/bioconda/codoff
   :alt:   (downloads)
.. |docker_codoff| image:: https://quay.io/repository/biocontainers/codoff/status
   :target: https://quay.io/repository/biocontainers/codoff
.. _`codoff/tags`: https://quay.io/repository/biocontainers/codoff?tab=tags


.. raw:: html

    <script>
        var package = "codoff";
        var versions = ["1.2.0","1.1.8","1.1.5","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/codoff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/codoff/README.html