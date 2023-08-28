:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kissde'
.. highlight: bash

bioconductor-kissde
===================

.. conda:recipe:: bioconductor-kissde
   :replaces_section_title:
   :noindex:

   Retrieves Condition\-Specific Variants in RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/kissDE.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-kissde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kissde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kissde/meta.yaml>`_

   Retrieves condition\-specific variants in RNA\-seq data \(SNVs\, alternative\-splicings\, indels\). It has been developed as a post\-treatment of \'KisSplice\' but can also be used with user\'s own data.


.. conda:package:: bioconductor-kissde

   |downloads_bioconductor-kissde| |docker_bioconductor-kissde|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-dss: ``>=2.48.0,<2.49.0``
   :depends r-ade4: 
   :depends r-aods3: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-dt: 
   :depends r-factoextra: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-matrixstats: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
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

      mamba install bioconductor-kissde

   and update with::

      mamba update bioconductor-kissde

  To create a new environment, run::

      mamba create --name myenvname bioconductor-kissde

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kissde:<tag>

   (see `bioconductor-kissde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kissde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kissde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kissde
   :alt:   (downloads)
.. |docker_bioconductor-kissde| image:: https://quay.io/repository/biocontainers/bioconductor-kissde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kissde
.. _`bioconductor-kissde/tags`: https://quay.io/repository/biocontainers/bioconductor-kissde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kissde";
        var versions = ["1.20.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kissde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kissde/README.html