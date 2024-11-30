:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affycontam'
.. highlight: bash

bioconductor-affycontam
=======================

.. conda:recipe:: bioconductor-affycontam
   :replaces_section_title:
   :noindex:

   structured corruption of affymetrix cel file data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/affyContam.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-affycontam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycontam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycontam/meta.yaml>`_
   :links: biotools: :biotools:`affycontam`, doi: :doi:`10.1038/nmeth.3252`

   structured corruption of cel file data to demonstrate QA effectiveness


.. conda:package:: bioconductor-affycontam

   |downloads_bioconductor-affycontam| |docker_bioconductor-affycontam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-affydata: ``>=1.50.0,<1.51.0``
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

      mamba install bioconductor-affycontam

   and update with::

      mamba update bioconductor-affycontam

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affycontam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affycontam:<tag>

   (see `bioconductor-affycontam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affycontam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affycontam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affycontam
   :alt:   (downloads)
.. |docker_bioconductor-affycontam| image:: https://quay.io/repository/biocontainers/bioconductor-affycontam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affycontam
.. _`bioconductor-affycontam/tags`: https://quay.io/repository/biocontainers/bioconductor-affycontam?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affycontam";
        var versions = ["1.60.0","1.58.0","1.56.0","1.52.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affycontam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affycontam/README.html