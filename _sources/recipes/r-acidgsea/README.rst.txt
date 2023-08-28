:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidgsea'
.. highlight: bash

r-acidgsea
==========

.. conda:recipe:: r-acidgsea
   :replaces_section_title:
   :noindex:

   Parameterized fast gene set enrichment analysis.

   :homepage: https://r.acidgenomics.com/packages/acidgsea/
   :developer docs: https://github.com/acidgenomics/r-acidgsea
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgsea/meta.yaml>`_

   


.. conda:package:: r-acidgsea

   |downloads_r-acidgsea| |docker_r-acidgsea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.9-0</code>,  <code>0.8.8-2</code>,  <code>0.8.8-1</code>,  <code>0.8.8-0</code>,  <code>0.8.7-1</code>,  <code>0.8.7-0</code>,  <code>0.8.6-1</code>,  <code>0.8.6-0</code>,  <code>0.7.0-1</code>,  </span></summary>
      

      ``0.8.9-0``,  ``0.8.8-2``,  ``0.8.8-1``,  ``0.8.8-0``,  ``0.8.7-1``,  ``0.8.7-0``,  ``0.8.6-1``,  ``0.8.6-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.4-1``,  ``0.6.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0``
   :depends bioconductor-biocparallel: ``>=1.32.0``
   :depends bioconductor-fgsea: ``>=1.24.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0``
   :depends bioconductor-iranges: ``>=2.32.0``
   :depends bioconductor-s4vectors: ``>=0.36.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0``
   :depends r-acidbase: ``>=0.6.15``
   :depends r-acidcli: ``>=0.2.7``
   :depends r-acidexperiment: ``>=0.4.7``
   :depends r-acidgenerics: ``>=0.6.7``
   :depends r-acidgenomes: ``>=0.5.0``
   :depends r-acidmarkdown: ``>=0.2.5``
   :depends r-acidplots: ``>=0.5.5``
   :depends r-acidplyr: ``>=0.3.10``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-basejump: ``>=0.16.5``
   :depends r-deseqanalysis: ``>=0.6.8``
   :depends r-ggplot2: ``>=3.4.2``
   :depends r-goalie: ``>=0.6.9``
   :depends r-knitr: ``>=1.42``
   :depends r-pipette: ``>=0.10.9``
   :depends r-rmarkdown: ``>=2.17``
   :depends r-syntactic: ``>=0.6.5``
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

      mamba install r-acidgsea

   and update with::

      mamba update r-acidgsea

  To create a new environment, run::

      mamba create --name myenvname r-acidgsea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-acidgsea:<tag>

   (see `r-acidgsea/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidgsea| image:: https://img.shields.io/conda/dn/bioconda/r-acidgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidgsea
   :alt:   (downloads)
.. |docker_r-acidgsea| image:: https://quay.io/repository/biocontainers/r-acidgsea/status
   :target: https://quay.io/repository/biocontainers/r-acidgsea
.. _`r-acidgsea/tags`: https://quay.io/repository/biocontainers/r-acidgsea?tab=tags


.. raw:: html

    <script>
        var package = "r-acidgsea";
        var versions = ["0.8.9","0.8.8","0.8.8","0.8.8","0.8.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidgsea/README.html