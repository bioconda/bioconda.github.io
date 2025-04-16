:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ervmancer'
.. highlight: bash

ervmancer
=========

.. conda:recipe:: ervmancer
   :replaces_section_title:
   :noindex:

   Quantifies HERV short read RNA sequencing expression data

   :homepage: https://github.com/AuslanderLab/ervmancer
   :license: MIT / MIT
   :recipe: /`ervmancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ervmancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ervmancer/meta.yaml>`_

   ERVmancer quantifies Human Endogenous Retrovirus \(HERV\) short read RNA sequencing expression data by aligning short reads to a curated subset of HERVs and then resolves ambiguity in alignment using a pre\-computed HERV phylogenetic tree.


.. conda:package:: ervmancer

   |downloads_ervmancer| |docker_ervmancer|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends bedtools: ``>=2.29.2``
   :depends bowtie2: ``>=2.4.2``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends regex: 
   :depends samtools: ``>=1.20``
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

      mamba install ervmancer

   and update with::

      mamba update ervmancer

  To create a new environment, run::

      mamba create --name myenvname ervmancer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ervmancer:<tag>

   (see `ervmancer/tags`_ for valid values for ``<tag>``)


.. |downloads_ervmancer| image:: https://img.shields.io/conda/dn/bioconda/ervmancer.svg?style=flat
   :target: https://anaconda.org/bioconda/ervmancer
   :alt:   (downloads)
.. |docker_ervmancer| image:: https://quay.io/repository/biocontainers/ervmancer/status
   :target: https://quay.io/repository/biocontainers/ervmancer
.. _`ervmancer/tags`: https://quay.io/repository/biocontainers/ervmancer?tab=tags


.. raw:: html

    <script>
        var package = "ervmancer";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ervmancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ervmancer/README.html