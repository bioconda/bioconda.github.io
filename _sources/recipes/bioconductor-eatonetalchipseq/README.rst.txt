:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eatonetalchipseq'
.. highlight: bash

bioconductor-eatonetalchipseq
=============================

.. conda:recipe:: bioconductor-eatonetalchipseq
   :replaces_section_title:
   :noindex:

   ChIP\-seq data of ORC\-binding sites in Yeast excerpted from Eaton et al. 2010

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/EatonEtAlChIPseq.html
   :license: Artistic 2.0
   :recipe: /`bioconductor-eatonetalchipseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eatonetalchipseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eatonetalchipseq/meta.yaml>`_

   ChIP\-seq analysis subset from \"Conserved nucleosome positioning defines replication origins\" \(PMID 20351051\)


.. conda:package:: bioconductor-eatonetalchipseq

   |downloads_bioconductor-eatonetalchipseq| |docker_bioconductor-eatonetalchipseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.38.0-0</code>,  <code>0.36.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  <code>0.26.0-0</code>,  <code>0.24.0-0</code>,  </span></summary>
      

      ``0.38.0-0``,  ``0.36.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-shortread: ``>=1.58.0,<1.59.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-eatonetalchipseq

   and update with::

      mamba update bioconductor-eatonetalchipseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-eatonetalchipseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eatonetalchipseq:<tag>

   (see `bioconductor-eatonetalchipseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eatonetalchipseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eatonetalchipseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eatonetalchipseq
   :alt:   (downloads)
.. |docker_bioconductor-eatonetalchipseq| image:: https://quay.io/repository/biocontainers/bioconductor-eatonetalchipseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eatonetalchipseq
.. _`bioconductor-eatonetalchipseq/tags`: https://quay.io/repository/biocontainers/bioconductor-eatonetalchipseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-eatonetalchipseq";
        var versions = ["0.38.0","0.36.0","0.32.0","0.32.0","0.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eatonetalchipseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eatonetalchipseq/README.html