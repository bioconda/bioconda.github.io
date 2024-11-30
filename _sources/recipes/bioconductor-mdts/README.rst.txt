:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mdts'
.. highlight: bash

bioconductor-mdts
=================

.. conda:recipe:: bioconductor-mdts
   :replaces_section_title:
   :noindex:

   Detection of de novo deletion in targeted sequencing trios

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MDTS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mdts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdts/meta.yaml>`_

   A package for the detection of de novo copy number deletions in targeted sequencing of trios with high sensitivity and positive predictive value.


.. conda:package:: bioconductor-mdts

   |downloads_bioconductor-mdts| |docker_bioconductor-mdts|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-dnacopy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-stringr: 
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

      mamba install bioconductor-mdts

   and update with::

      mamba update bioconductor-mdts

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mdts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mdts:<tag>

   (see `bioconductor-mdts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mdts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mdts.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mdts
   :alt:   (downloads)
.. |docker_bioconductor-mdts| image:: https://quay.io/repository/biocontainers/bioconductor-mdts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mdts
.. _`bioconductor-mdts/tags`: https://quay.io/repository/biocontainers/bioconductor-mdts?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mdts";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mdts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mdts/README.html