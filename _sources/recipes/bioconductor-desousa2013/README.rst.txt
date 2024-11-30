:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-desousa2013'
.. highlight: bash

bioconductor-desousa2013
========================

.. conda:recipe:: bioconductor-desousa2013
   :replaces_section_title:
   :noindex:

   Poor prognosis colon cancer is defined by a molecularly distinct subtype and precursor lesion

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/DeSousa2013.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-desousa2013 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desousa2013>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desousa2013/meta.yaml>`_

   This package reproduces the main pipeline to analyze the AMC\-AJCCII\-90 microarray data set in De Sousa et al. accepted by Nature Medicine in 2013.


.. conda:package:: bioconductor-desousa2013

   |downloads_bioconductor-desousa2013| |docker_bioconductor-desousa2013|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-consensusclusterplus: ``>=1.66.0,<1.67.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-frma: ``>=1.54.0,<1.55.0``
   :depends bioconductor-frmatools: ``>=1.54.0,<1.55.0``
   :depends bioconductor-hgu133plus2.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-hgu133plus2frmavecs: ``>=1.5.0,<1.6.0``
   :depends bioconductor-siggenes: ``>=1.76.0,<1.77.0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-gplots: 
   :depends r-pamr: 
   :depends r-rgl: 
   :depends r-rocr: 
   :depends r-survival: 
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

      mamba install bioconductor-desousa2013

   and update with::

      mamba update bioconductor-desousa2013

  To create a new environment, run::

      mamba create --name myenvname bioconductor-desousa2013

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-desousa2013:<tag>

   (see `bioconductor-desousa2013/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-desousa2013| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-desousa2013.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-desousa2013
   :alt:   (downloads)
.. |docker_bioconductor-desousa2013| image:: https://quay.io/repository/biocontainers/bioconductor-desousa2013/status
   :target: https://quay.io/repository/biocontainers/bioconductor-desousa2013
.. _`bioconductor-desousa2013/tags`: https://quay.io/repository/biocontainers/bioconductor-desousa2013?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-desousa2013";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-desousa2013/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-desousa2013/README.html