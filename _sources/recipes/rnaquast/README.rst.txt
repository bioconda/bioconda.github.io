:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaquast'
.. highlight: bash

rnaquast
========

.. conda:recipe:: rnaquast
   :replaces_section_title:
   :noindex:

   rnaQUAST is a tool for evaluating RNA\-Seq assemblies using reference genome and gene database. In addition\, rnaQUAST is also capable of estimating gene database coverage by raw reads and de novo quality assessment using third\-party software.

   :homepage: https://github.com/ablab/rnaquast
   :license: GPL / GPL-2.0-or-later
   :recipe: /`rnaquast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaquast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaquast/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw218`, biotools: :biotools:`rnaQUAST`, usegalaxy-eu: :usegalaxy-eu:`rna_quast`

   


.. conda:package:: rnaquast

   |downloads_rnaquast| |docker_rnaquast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.0-0</code>,  <code>2.2.3-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-2</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.1-0</code>,  </span></summary>
      

      ``2.3.0-0``,  ``2.2.3-0``,  ``2.2.1-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends busco: ``>=5``
   :depends emboss: 
   :depends gffutils: 
   :depends gmap: ``>=2020.03.12``
   :depends joblib: 
   :depends matplotlib-base: 
   :depends python: 
   :depends samtools: 
   :depends star: 
   :depends ucsc-blat: 
   :depends ucsc-pslsort: 
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

      mamba install rnaquast

   and update with::

      mamba update rnaquast

  To create a new environment, run::

      mamba create --name myenvname rnaquast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnaquast:<tag>

   (see `rnaquast/tags`_ for valid values for ``<tag>``)


.. |downloads_rnaquast| image:: https://img.shields.io/conda/dn/bioconda/rnaquast.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaquast
   :alt:   (downloads)
.. |docker_rnaquast| image:: https://quay.io/repository/biocontainers/rnaquast/status
   :target: https://quay.io/repository/biocontainers/rnaquast
.. _`rnaquast/tags`: https://quay.io/repository/biocontainers/rnaquast?tab=tags


.. raw:: html

    <script>
        var package = "rnaquast";
        var versions = ["2.3.0","2.2.3","2.2.1","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaquast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaquast/README.html