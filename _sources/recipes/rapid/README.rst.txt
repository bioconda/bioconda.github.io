:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapid'
.. highlight: bash

rapid
=====

.. conda:recipe:: rapid
   :replaces_section_title:
   :noindex:

   Read Alignment\, Analysis\, and Differential Pipeline \(RAPID\) is a set of tools for the alignment\, and analysis of genomic regions with small RNA clusters derived from small RNA sequencing data.

   :homepage: https://github.com/SchulzLab/RAPID
   :license: GPL2
   :recipe: /`rapid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapid/meta.yaml>`_

   


.. conda:package:: rapid

   |downloads_rapid| |docker_rapid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-2</code>,  <code>1.0-1</code>,  <code>1.0-0</code>,  <code>0.8-5</code>,  <code>0.8-4</code>,  <code>0.8-3</code>,  <code>0.8-2</code>,  <code>0.8-1</code>,  <code>0.8-0</code>,  </span></summary>
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.8-5``,  ``0.8-4``,  ``0.8-3``,  ``0.8-2``,  ``0.8-1``,  ``0.8-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-1``,  ``0.4-0``,  ``0.3-0``,  ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``2.23.0``
   :depends bioconductor-deseq2: 
   :depends bowtie2: ``2.3.0``
   :depends pandoc: 
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-knitr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-viridis: 
   :depends samtools: 
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

      mamba install rapid

   and update with::

      mamba update rapid

  To create a new environment, run::

      mamba create --name myenvname rapid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rapid:<tag>

   (see `rapid/tags`_ for valid values for ``<tag>``)


.. |downloads_rapid| image:: https://img.shields.io/conda/dn/bioconda/rapid.svg?style=flat
   :target: https://anaconda.org/bioconda/rapid
   :alt:   (downloads)
.. |docker_rapid| image:: https://quay.io/repository/biocontainers/rapid/status
   :target: https://quay.io/repository/biocontainers/rapid
.. _`rapid/tags`: https://quay.io/repository/biocontainers/rapid?tab=tags


.. raw:: html

    <script>
        var package = "rapid";
        var versions = ["1.0","1.0","1.0","0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapid/README.html