:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scanvis'
.. highlight: bash

bioconductor-scanvis
====================

.. conda:recipe:: bioconductor-scanvis
   :replaces_section_title:
   :noindex:

   SCANVIS \- a tool for SCoring\, ANnotating and VISualizing splice junctions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SCANVIS.html
   :license: file LICENSE
   :recipe: /`bioconductor-scanvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scanvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scanvis/meta.yaml>`_

   SCANVIS is a set of annotation\-dependent tools for analyzing splice junctions and their read support as predetermined by an alignment tool of choice \(for example\, STAR aligner\). SCANVIS assesses each junction\'s relative read support \(RRS\) by relating to the context of local split reads aligning to annotated transcripts. SCANVIS also annotates each splice junction by indicating whether the junction is supported by annotation or not\, and if not\, what type of junction it is \(e.g. exon skipping\, alternative 5\' or 3\' events\, Novel Exons\). Unannotated junctions are also futher annotated by indicating whether it induces a frame shift or not. SCANVIS includes a visualization function to generate static sashimi\-style plots depicting relative read support and number of split reads using arc thickness and arc heights\, making it easy for users to spot well\-supported junctions. These plots also clearly delineate unannotated junctions from annotated ones using designated color schemes\, and users can also highlight splice junctions of choice. Variants and\/or a read profile are also incoroporated into the plot if the user supplies variants in bed format and\/or the BAM file. One further feature of the visualization function is that users can submit multiple samples of a certain disease or cohort to generate a single plot \- this occurs via a \"merge\" function wherein junction details over multiple samples are merged to generate a single sashimi plot\, which is useful when contrasting cohorots \(eg. disease vs control\).


.. conda:package:: bioconductor-scanvis

   |downloads_bioconductor-scanvis| |docker_bioconductor-scanvis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-plotrix: 
   :depends r-rcurl: 
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

      mamba install bioconductor-scanvis

   and update with::

      mamba update bioconductor-scanvis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scanvis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scanvis:<tag>

   (see `bioconductor-scanvis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scanvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scanvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scanvis
   :alt:   (downloads)
.. |docker_bioconductor-scanvis| image:: https://quay.io/repository/biocontainers/bioconductor-scanvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scanvis
.. _`bioconductor-scanvis/tags`: https://quay.io/repository/biocontainers/bioconductor-scanvis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scanvis";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scanvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scanvis/README.html