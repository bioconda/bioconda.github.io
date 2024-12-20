:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-systempiperdata'
.. highlight: bash

bioconductor-systempiperdata
============================

.. conda:recipe:: bioconductor-systempiperdata
   :replaces_section_title:
   :noindex:

   systemPipeRdata\: Workflow templates and sample data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/systemPipeRdata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-systempiperdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempiperdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempiperdata/meta.yaml>`_

   systemPipeRdata is a helper package to generate with a single command NGS workflow templates that are intended to be used by its parent package systemPipeR. The latter is an environment for building end\-to\-end analysis pipelines with automated report generation for next generation sequence \(NGS\) applications such as RNA\-Seq\, RIBO\-Seq\, ChIP\-Seq\, VAR\-Seq and many others. Detailed examples for using systemPipeRdata are given in systemPipeR\'s overview vignette.


.. conda:package:: bioconductor-systempiperdata

   |downloads_bioconductor-systempiperdata| |docker_bioconductor-systempiperdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>1.22.3-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.22.3-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.17.4-0``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-jsonlite: 
   :depends r-remotes: 
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

      mamba install bioconductor-systempiperdata

   and update with::

      mamba update bioconductor-systempiperdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-systempiperdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-systempiperdata:<tag>

   (see `bioconductor-systempiperdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-systempiperdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-systempiperdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-systempiperdata
   :alt:   (downloads)
.. |docker_bioconductor-systempiperdata| image:: https://quay.io/repository/biocontainers/bioconductor-systempiperdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-systempiperdata
.. _`bioconductor-systempiperdata/tags`: https://quay.io/repository/biocontainers/bioconductor-systempiperdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-systempiperdata";
        var versions = ["2.10.0","2.6.0","2.4.0","2.2.0","1.22.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-systempiperdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-systempiperdata/README.html