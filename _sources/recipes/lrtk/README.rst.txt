:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lrtk'
.. highlight: bash

lrtk
====

.. conda:recipe:: lrtk
   :replaces_section_title:
   :noindex:

   This is a unified and versatile ToolKit for analyzing Linked\-Read sequencing data.

   :homepage: https://github.com/ericcombiolab/LRTK
   :license: MIT
   :recipe: /`lrtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrtk/meta.yaml>`_

   


.. conda:package:: lrtk

   |downloads_lrtk| |docker_lrtk|

   :versions:
      
      

      ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends aquila: 
   :depends bcftools: 
   :depends bedtools: 
   :depends bowtie2: 
   :depends bwa: 
   :depends fastp: 
   :depends freebayes: 
   :depends gatk: 
   :depends hapcut2: 
   :depends megahit: 
   :depends metabat2: 
   :depends parallel: 
   :depends picard: 
   :depends python: 
   :depends r-ade4: 
   :depends r-base: 
   :depends r-clustersim: 
   :depends r-factoextra: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-proxy: 
   :depends r-vegan: 
   :depends tabix: 
   :depends vcflib: 
   :depends vcftools: 
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

      mamba install lrtk

   and update with::

      mamba update lrtk

  To create a new environment, run::

      mamba create --name myenvname lrtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lrtk:<tag>

   (see `lrtk/tags`_ for valid values for ``<tag>``)


.. |downloads_lrtk| image:: https://img.shields.io/conda/dn/bioconda/lrtk.svg?style=flat
   :target: https://anaconda.org/bioconda/lrtk
   :alt:   (downloads)
.. |docker_lrtk| image:: https://quay.io/repository/biocontainers/lrtk/status
   :target: https://quay.io/repository/biocontainers/lrtk
.. _`lrtk/tags`: https://quay.io/repository/biocontainers/lrtk?tab=tags


.. raw:: html

    <script>
        var package = "lrtk";
        var versions = ["1.8","1.7","1.6","1.5","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lrtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lrtk/README.html