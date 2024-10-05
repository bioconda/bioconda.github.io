:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qtlseq'
.. highlight: bash

qtlseq
======

.. conda:recipe:: qtlseq
   :replaces_section_title:
   :noindex:

   QTL\-seq\: pipeline to identify causative mutations responsible for a phenotype

   :homepage: https://github.com/YuSugihara/QTL-seq
   :license: GPL / GPL-3.0-or-later
   :recipe: /`qtlseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qtlseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qtlseq/meta.yaml>`_
   :links: biotools: :biotools:`qtlseq`, doi: :doi:`10.1111/tpj.12105`

   


.. conda:package:: qtlseq

   |downloads_qtlseq| |docker_qtlseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.5-0</code>,  <code>2.2.4-0</code>,  <code>2.2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  </span></summary>
      

      ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.7``
   :depends bwa: 
   :depends htslib: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.5``
   :depends samtools: ``>=1.7``
   :depends seaborn: 
   :depends snpeff: 
   :depends trimmomatic: 
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

      mamba install qtlseq

   and update with::

      mamba update qtlseq

  To create a new environment, run::

      mamba create --name myenvname qtlseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qtlseq:<tag>

   (see `qtlseq/tags`_ for valid values for ``<tag>``)


.. |downloads_qtlseq| image:: https://img.shields.io/conda/dn/bioconda/qtlseq.svg?style=flat
   :target: https://anaconda.org/bioconda/qtlseq
   :alt:   (downloads)
.. |docker_qtlseq| image:: https://quay.io/repository/biocontainers/qtlseq/status
   :target: https://quay.io/repository/biocontainers/qtlseq
.. _`qtlseq/tags`: https://quay.io/repository/biocontainers/qtlseq?tab=tags


.. raw:: html

    <script>
        var package = "qtlseq";
        var versions = ["2.2.5","2.2.4","2.2.3","2.2.2","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qtlseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qtlseq/README.html