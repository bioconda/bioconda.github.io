:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nupop'
.. highlight: bash

bioconductor-nupop
==================

.. conda:recipe:: bioconductor-nupop
   :replaces_section_title:
   :noindex:

   An R package for nucleosome positioning prediction

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/NuPoP.html
   :license: GPL-2
   :recipe: /`bioconductor-nupop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nupop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nupop/meta.yaml>`_

   NuPoP is an R package for Nucleosome Positioning Prediction.This package is built upon a duration hidden Markov model proposed in Xi et al\, 2010\; Wang et al\, 2008. The core of the package was written in Fotran. In addition to the R package\, a stand\-alone Fortran software tool is also available at https\:\/\/github.com\/jipingw. The Fortran codes have complete functonality as the R package.  Note\: NuPoP has two separate functions for prediction of nucleosome positioning\, one for MNase\-map trained models and the other for chemical map\-trained models. The latter was implemented for four species including yeast\, S.pombe\, mouse and human\, trained based on our recent publications. We noticed there is another package nuCpos by another group for prediction of nucleosome positioning trained with chemicals. A report to compare recent versions of NuPoP with nuCpos can be found at https\:\/\/github.com\/jiping\/NuPoP\_doc. Some more information can be found and will be posted at https\:\/\/github.com\/jipingw\/NuPoP.


.. conda:package:: bioconductor-nupop

   |downloads_bioconductor-nupop| |docker_bioconductor-nupop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.8.1-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.2.0-2</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.1-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-nupop

   and update with::

      mamba update bioconductor-nupop

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nupop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nupop:<tag>

   (see `bioconductor-nupop/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nupop| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nupop.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nupop
   :alt:   (downloads)
.. |docker_bioconductor-nupop| image:: https://quay.io/repository/biocontainers/bioconductor-nupop/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nupop
.. _`bioconductor-nupop/tags`: https://quay.io/repository/biocontainers/bioconductor-nupop?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nupop";
        var versions = ["2.14.0","2.10.0","2.10.0","2.8.1","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nupop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nupop/README.html