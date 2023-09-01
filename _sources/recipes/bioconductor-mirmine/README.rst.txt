:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirmine'
.. highlight: bash

bioconductor-mirmine
====================

.. conda:recipe:: bioconductor-mirmine
   :replaces_section_title:
   :noindex:

   Data package with miRNA\-seq datasets from miRmine database as RangedSummarizedExperiment

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/miRmine.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-mirmine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirmine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirmine/meta.yaml>`_

   miRmine database is a collection of expression profiles from different publicly available miRNA\-seq datasets\, Panwar et al \(2017\) miRmine\: A Database of Human miRNA Expression\, prepared with this data package as RangedSummarizedExperiment.


.. conda:package:: bioconductor-mirmine

   |downloads_bioconductor-mirmine| |docker_bioconductor-mirmine|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
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

      mamba install bioconductor-mirmine

   and update with::

      mamba update bioconductor-mirmine

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mirmine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirmine:<tag>

   (see `bioconductor-mirmine/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirmine| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirmine.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirmine
   :alt:   (downloads)
.. |docker_bioconductor-mirmine| image:: https://quay.io/repository/biocontainers/bioconductor-mirmine/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirmine
.. _`bioconductor-mirmine/tags`: https://quay.io/repository/biocontainers/bioconductor-mirmine?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirmine";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirmine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirmine/README.html