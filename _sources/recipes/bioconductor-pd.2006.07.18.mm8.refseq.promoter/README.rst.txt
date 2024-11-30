:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.2006.07.18.mm8.refseq.promoter'
.. highlight: bash

bioconductor-pd.2006.07.18.mm8.refseq.promoter
==============================================

.. conda:recipe:: bioconductor-pd.2006.07.18.mm8.refseq.promoter
   :replaces_section_title:
   :noindex:

   Platform Design Info for NimbleGen 2006\-07\-18\_mm8\_refseq\_promoter

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/pd.2006.07.18.mm8.refseq.promoter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.2006.07.18.mm8.refseq.promoter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.2006.07.18.mm8.refseq.promoter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.2006.07.18.mm8.refseq.promoter/meta.yaml>`_

   Platform Design Info for NimbleGen 2006\-07\-18\_mm8\_refseq\_promoter


.. conda:package:: bioconductor-pd.2006.07.18.mm8.refseq.promoter

   |downloads_bioconductor-pd.2006.07.18.mm8.refseq.promoter| |docker_bioconductor-pd.2006.07.18.mm8.refseq.promoter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.3-12</code>,  <code>0.99.3-11</code>,  <code>0.99.3-10</code>,  <code>0.99.3-9</code>,  <code>0.99.3-8</code>,  <code>0.99.3-7</code>,  <code>0.99.3-6</code>,  <code>0.99.3-5</code>,  <code>0.99.3-4</code>,  </span></summary>
      

      ``0.99.3-12``,  ``0.99.3-11``,  ``0.99.3-10``,  ``0.99.3-9``,  ``0.99.3-8``,  ``0.99.3-7``,  ``0.99.3-6``,  ``0.99.3-5``,  ``0.99.3-4``,  ``0.99.3-3``,  ``0.99.3-2``,  ``0.99.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-oligo: ``>=1.66.0,<1.67.0``
   :depends bioconductor-oligoclasses: ``>=1.64.0,<1.65.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-rsqlite: ``>=0.7-1``
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

      mamba install bioconductor-pd.2006.07.18.mm8.refseq.promoter

   and update with::

      mamba update bioconductor-pd.2006.07.18.mm8.refseq.promoter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pd.2006.07.18.mm8.refseq.promoter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.2006.07.18.mm8.refseq.promoter:<tag>

   (see `bioconductor-pd.2006.07.18.mm8.refseq.promoter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.2006.07.18.mm8.refseq.promoter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.2006.07.18.mm8.refseq.promoter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.2006.07.18.mm8.refseq.promoter
   :alt:   (downloads)
.. |docker_bioconductor-pd.2006.07.18.mm8.refseq.promoter| image:: https://quay.io/repository/biocontainers/bioconductor-pd.2006.07.18.mm8.refseq.promoter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.2006.07.18.mm8.refseq.promoter
.. _`bioconductor-pd.2006.07.18.mm8.refseq.promoter/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.2006.07.18.mm8.refseq.promoter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.2006.07.18.mm8.refseq.promoter";
        var versions = ["0.99.3","0.99.3","0.99.3","0.99.3","0.99.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.2006.07.18.mm8.refseq.promoter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.2006.07.18.mm8.refseq.promoter/README.html