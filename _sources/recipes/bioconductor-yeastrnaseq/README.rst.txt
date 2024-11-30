:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yeastrnaseq'
.. highlight: bash

bioconductor-yeastrnaseq
========================

.. conda:recipe:: bioconductor-yeastrnaseq
   :replaces_section_title:
   :noindex:

   Yeast RNA\-Seq Experimental Data from Lee et al. 2008

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/yeastRNASeq.html
   :license: GPL
   :recipe: /`bioconductor-yeastrnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastrnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastrnaseq/meta.yaml>`_

   A selection of RNA\-Seq data from a yeast transcriptome experiment.


.. conda:package:: bioconductor-yeastrnaseq

   |downloads_bioconductor-yeastrnaseq| |docker_bioconductor-yeastrnaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.35.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  <code>0.27.0-0</code>,  </span></summary>
      

      ``0.40.0-0``,  ``0.38.0-0``,  ``0.35.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.22.0-0``,  ``0.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-yeastrnaseq

   and update with::

      mamba update bioconductor-yeastrnaseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-yeastrnaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yeastrnaseq:<tag>

   (see `bioconductor-yeastrnaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yeastrnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yeastrnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yeastrnaseq
   :alt:   (downloads)
.. |docker_bioconductor-yeastrnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-yeastrnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yeastrnaseq
.. _`bioconductor-yeastrnaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-yeastrnaseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-yeastrnaseq";
        var versions = ["0.40.0","0.38.0","0.35.0","0.32.0","0.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yeastrnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yeastrnaseq/README.html