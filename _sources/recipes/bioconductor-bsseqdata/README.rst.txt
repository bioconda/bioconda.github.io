:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsseqdata'
.. highlight: bash

bioconductor-bsseqdata
======================

.. conda:recipe:: bioconductor-bsseqdata
   :replaces_section_title:
   :noindex:

   Example whole genome bisulfite data for the bsseq package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/bsseqData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsseqdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsseqdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsseqdata/meta.yaml>`_

   Example whole genome bisulfite data for the bsseq package


.. conda:package:: bioconductor-bsseqdata

   |downloads_bioconductor-bsseqdata| |docker_bioconductor-bsseqdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.38.0-0</code>,  <code>0.36.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  <code>0.26.0-0</code>,  <code>0.24.0-0</code>,  </span></summary>
      

      ``0.38.0-0``,  ``0.36.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsseq: ``>=1.36.0,<1.37.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-bsseqdata

   and update with::

      mamba update bioconductor-bsseqdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsseqdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsseqdata:<tag>

   (see `bioconductor-bsseqdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsseqdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsseqdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsseqdata
   :alt:   (downloads)
.. |docker_bioconductor-bsseqdata| image:: https://quay.io/repository/biocontainers/bioconductor-bsseqdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsseqdata
.. _`bioconductor-bsseqdata/tags`: https://quay.io/repository/biocontainers/bioconductor-bsseqdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsseqdata";
        var versions = ["0.38.0","0.36.0","0.32.0","0.32.0","0.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsseqdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsseqdata/README.html