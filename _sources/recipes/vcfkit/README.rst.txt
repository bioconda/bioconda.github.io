:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfkit'
.. highlight: bash

vcfkit
======

.. conda:recipe:: vcfkit
   :replaces_section_title:
   :noindex:

   VCF\-kit is a command\-line based collection of utilities for performing analysis on Variant Call Format \(VCF\) files.

   :homepage: https://github.com/AndersenLab/VCF-kit
   :license: MIT / MIT
   :recipe: /`vcfkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfkit/meta.yaml>`_

   


.. conda:package:: vcfkit

   |downloads_vcfkit| |docker_vcfkit|

   :versions:
      
      

      ``0.2.9-0``,  ``0.2.8-0``,  ``0.1.6-4``,  ``0.1.6-3``,  ``0.1.6-2``,  ``0.1.6-0``,  ``0.0.4-0``

      

   
   :depends awesome-slugify: 
   :depends bcftools: ``>=1.3``
   :depends biopython: 
   :depends blast: ``>=2.2.31``
   :depends bwa: ``>=0.7.12``
   :depends clint: 
   :depends cyvcf2: ``>=0.6.5``
   :depends docopt: 
   :depends intervaltree: ``2.1.0``
   :depends jinja2: 
   :depends matplotlib-base: 
   :depends muscle: ``>=3.8.31``
   :depends networkx: ``1.11``
   :depends numpy: 
   :depends python: 
   :depends requests: 
   :depends samtools: ``>=1.3``
   :depends scipy: 
   :depends tabulate: 
   :depends yahmm: ``>=1.1.2``
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

      mamba install vcfkit

   and update with::

      mamba update vcfkit

  To create a new environment, run::

      mamba create --name myenvname vcfkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcfkit:<tag>

   (see `vcfkit/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfkit| image:: https://img.shields.io/conda/dn/bioconda/vcfkit.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfkit
   :alt:   (downloads)
.. |docker_vcfkit| image:: https://quay.io/repository/biocontainers/vcfkit/status
   :target: https://quay.io/repository/biocontainers/vcfkit
.. _`vcfkit/tags`: https://quay.io/repository/biocontainers/vcfkit?tab=tags


.. raw:: html

    <script>
        var package = "vcfkit";
        var versions = ["0.2.9","0.2.8","0.1.6","0.1.6","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfkit/README.html