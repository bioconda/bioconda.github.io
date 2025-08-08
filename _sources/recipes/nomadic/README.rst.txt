:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nomadic'
.. highlight: bash

nomadic
=======

.. conda:recipe:: nomadic
   :replaces_section_title:
   :noindex:

   Mobile sequencing and analysis in real\-time

   :homepage: https://jasonahendry.github.io/nomadic/
   :developer docs: https://github.com/JasonAHendry/nomadic
   :license: MIT
   :recipe: /`nomadic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nomadic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nomadic/meta.yaml>`_

   Nomadic is a real\-time bioinformatics pipeline and dashboard for nanopore sequencing data. While sequencing is still ongoing\, it performs read mapping and sample quality control\, as well as variant calling and annotation. This information is displayed in real\-time to a graphical dashboard that has interactive features.



.. conda:package:: nomadic

   |downloads_nomadic| |docker_nomadic|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-0``

      

   
   :depends bcftools: ``>=1.20``
   :depends bedtools: 
   :depends click: 
   :depends dash: 
   :depends i18nice: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends platformdirs: 
   :depends pysam: 
   :depends python: ``>=3.10``
   :depends pyyaml: 
   :depends samtools: ``>=1.20``
   :depends seaborn: 
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

      mamba install nomadic

   and update with::

      mamba update nomadic

  To create a new environment, run::

      mamba create --name myenvname nomadic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nomadic:<tag>

   (see `nomadic/tags`_ for valid values for ``<tag>``)


.. |downloads_nomadic| image:: https://img.shields.io/conda/dn/bioconda/nomadic.svg?style=flat
   :target: https://anaconda.org/bioconda/nomadic
   :alt:   (downloads)
.. |docker_nomadic| image:: https://quay.io/repository/biocontainers/nomadic/status
   :target: https://quay.io/repository/biocontainers/nomadic
.. _`nomadic/tags`: https://quay.io/repository/biocontainers/nomadic?tab=tags


.. raw:: html

    <script>
        var package = "nomadic";
        var versions = ["0.5.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nomadic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nomadic/README.html