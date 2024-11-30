:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geosubmission'
.. highlight: bash

bioconductor-geosubmission
==========================

.. conda:recipe:: bioconductor-geosubmission
   :replaces_section_title:
   :noindex:

   Prepares microarray data for submission to GEO

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GEOsubmission.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-geosubmission <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geosubmission>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geosubmission/meta.yaml>`_
   :links: biotools: :biotools:`geosubmission`, doi: :doi:`10.1038/nmeth.3252`

   Helps to easily submit a microarray dataset and the associated sample information to GEO by preparing a single file for upload \(direct deposit\).


.. conda:package:: bioconductor-geosubmission

   |downloads_bioconductor-geosubmission| |docker_bioconductor-geosubmission|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
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

      mamba install bioconductor-geosubmission

   and update with::

      mamba update bioconductor-geosubmission

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geosubmission

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geosubmission:<tag>

   (see `bioconductor-geosubmission/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geosubmission| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geosubmission.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geosubmission
   :alt:   (downloads)
.. |docker_bioconductor-geosubmission| image:: https://quay.io/repository/biocontainers/bioconductor-geosubmission/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geosubmission
.. _`bioconductor-geosubmission/tags`: https://quay.io/repository/biocontainers/bioconductor-geosubmission?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geosubmission";
        var versions = ["1.54.0","1.52.0","1.50.0","1.46.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geosubmission/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geosubmission/README.html