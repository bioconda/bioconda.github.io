:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chimphumanbraindata'
.. highlight: bash

bioconductor-chimphumanbraindata
================================

.. conda:recipe:: bioconductor-chimphumanbraindata
   :replaces_section_title:
   :noindex:

   Chimp and human brain data package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/ChimpHumanBrainData.html
   :license: MIT
   :recipe: /`bioconductor-chimphumanbraindata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chimphumanbraindata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chimphumanbraindata/meta.yaml>`_

   This data package contains chimp and human brain data extracted from the ArrayExpress accession E\-AFMX\-2.  Both human and chimp RNAs were run on human hgu95av2 Affymetrix arrays. It is a useful dataset for tutorials.


.. conda:package:: bioconductor-chimphumanbraindata

   |downloads_bioconductor-chimphumanbraindata| |docker_bioconductor-chimphumanbraindata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-qvalue: ``>=2.32.0,<2.33.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-hexbin: 
   :depends r-statmod: 
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

      mamba install bioconductor-chimphumanbraindata

   and update with::

      mamba update bioconductor-chimphumanbraindata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chimphumanbraindata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chimphumanbraindata:<tag>

   (see `bioconductor-chimphumanbraindata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chimphumanbraindata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chimphumanbraindata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chimphumanbraindata
   :alt:   (downloads)
.. |docker_bioconductor-chimphumanbraindata| image:: https://quay.io/repository/biocontainers/bioconductor-chimphumanbraindata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chimphumanbraindata
.. _`bioconductor-chimphumanbraindata/tags`: https://quay.io/repository/biocontainers/bioconductor-chimphumanbraindata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chimphumanbraindata";
        var versions = ["1.38.0","1.36.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chimphumanbraindata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chimphumanbraindata/README.html