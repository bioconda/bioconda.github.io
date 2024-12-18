:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prostatecancervarambally'
.. highlight: bash

bioconductor-prostatecancervarambally
=====================================

.. conda:recipe:: bioconductor-prostatecancervarambally
   :replaces_section_title:
   :noindex:

   Prostate Cancer Data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/prostateCancerVarambally.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prostatecancervarambally <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancervarambally>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancervarambally/meta.yaml>`_

   A Bioconductor data package for the Varambally dataset


.. conda:package:: bioconductor-prostatecancervarambally

   |downloads_bioconductor-prostatecancervarambally| |docker_bioconductor-prostatecancervarambally|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
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

      mamba install bioconductor-prostatecancervarambally

   and update with::

      mamba update bioconductor-prostatecancervarambally

  To create a new environment, run::

      mamba create --name myenvname bioconductor-prostatecancervarambally

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prostatecancervarambally:<tag>

   (see `bioconductor-prostatecancervarambally/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prostatecancervarambally| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prostatecancervarambally.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prostatecancervarambally
   :alt:   (downloads)
.. |docker_bioconductor-prostatecancervarambally| image:: https://quay.io/repository/biocontainers/bioconductor-prostatecancervarambally/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prostatecancervarambally
.. _`bioconductor-prostatecancervarambally/tags`: https://quay.io/repository/biocontainers/bioconductor-prostatecancervarambally?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prostatecancervarambally";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prostatecancervarambally/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prostatecancervarambally/README.html