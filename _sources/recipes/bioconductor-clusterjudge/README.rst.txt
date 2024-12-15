:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterjudge'
.. highlight: bash

bioconductor-clusterjudge
=========================

.. conda:recipe:: bioconductor-clusterjudge
   :replaces_section_title:
   :noindex:

   Judging Quality of Clustering Methods using Mutual Information

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ClusterJudge.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterjudge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterjudge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterjudge/meta.yaml>`_

   ClusterJudge implements the functions\, examples and other software published as an algorithm by Gibbons\, FD and Roth FP. The article is called \"Judging the Quality of Gene Expression\-Based Clustering Methods Using Gene Annotation\" and it appeared in Genome Research\, vol. 12\, pp1574\-1581 \(2002\). See package\?ClusterJudge for an overview.


.. conda:package:: bioconductor-clusterjudge

   |downloads_bioconductor-clusterjudge| |docker_bioconductor-clusterjudge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-httr: 
   :depends r-infotheo: 
   :depends r-jsonlite: 
   :depends r-lattice: 
   :depends r-latticeextra: 
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

      mamba install bioconductor-clusterjudge

   and update with::

      mamba update bioconductor-clusterjudge

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clusterjudge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clusterjudge:<tag>

   (see `bioconductor-clusterjudge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clusterjudge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterjudge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterjudge
   :alt:   (downloads)
.. |docker_bioconductor-clusterjudge| image:: https://quay.io/repository/biocontainers/bioconductor-clusterjudge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterjudge
.. _`bioconductor-clusterjudge/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterjudge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clusterjudge";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterjudge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterjudge/README.html