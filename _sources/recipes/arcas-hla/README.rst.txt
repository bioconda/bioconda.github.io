:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arcas-hla'
.. highlight: bash

arcas-hla
=========

.. conda:recipe:: arcas-hla
   :replaces_section_title:
   :noindex:

   high\-resolution HLA typing from RNA seq

   :homepage: https://github.com/RabadanLab/arcasHLA
   :license: GPL-3.0-only
   :recipe: /`arcas-hla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arcas-hla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arcas-hla/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz474`

   arcasHLA performs high\-resolution genotyping for HLA class I and class II
   genes from RNA sequencing\, supporting both paired and single\-end samples.



.. conda:package:: arcas-hla

   |downloads_arcas-hla| |docker_arcas-hla|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-0</code>,  <code>0.5.0-3</code>,  <code>0.5.0-2</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.5-0</code>,  <code>0.2.0-1</code>,  </span></summary>
      

      ``0.6.0-0``,  ``0.5.0-3``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.5-0``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends biopython: 
   :depends coreutils: 
   :depends git: 
   :depends git-lfs: 
   :depends kallisto: ``0.44``
   :depends numpy: 
   :depends pandas: 
   :depends pigz: 
   :depends pip: 
   :depends pyarrow: 
   :depends pytest: 
   :depends python: 
   :depends samtools: 
   :depends scipy: 
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

      mamba install arcas-hla

   and update with::

      mamba update arcas-hla

  To create a new environment, run::

      mamba create --name myenvname arcas-hla

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/arcas-hla:<tag>

   (see `arcas-hla/tags`_ for valid values for ``<tag>``)


.. |downloads_arcas-hla| image:: https://img.shields.io/conda/dn/bioconda/arcas-hla.svg?style=flat
   :target: https://anaconda.org/bioconda/arcas-hla
   :alt:   (downloads)
.. |docker_arcas-hla| image:: https://quay.io/repository/biocontainers/arcas-hla/status
   :target: https://quay.io/repository/biocontainers/arcas-hla
.. _`arcas-hla/tags`: https://quay.io/repository/biocontainers/arcas-hla?tab=tags


.. raw:: html

    <script>
        var package = "arcas-hla";
        var versions = ["0.6.0","0.5.0","0.5.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arcas-hla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arcas-hla/README.html