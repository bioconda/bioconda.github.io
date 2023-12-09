:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-experimenthubdata'
.. highlight: bash

bioconductor-experimenthubdata
==============================

.. conda:recipe:: bioconductor-experimenthubdata
   :replaces_section_title:
   :noindex:

   Add resources to ExperimentHub

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ExperimentHubData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-experimenthubdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthubdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthubdata/meta.yaml>`_

   Functions to add metadata to ExperimentHub db and resource files to AWS S3 buckets.


.. conda:package:: bioconductor-experimenthubdata

   |downloads_bioconductor-experimenthubdata| |docker_bioconductor-experimenthubdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhubdata: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-curl: 
   :depends r-dbi: 
   :depends r-httr: 
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

      mamba install bioconductor-experimenthubdata

   and update with::

      mamba update bioconductor-experimenthubdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-experimenthubdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-experimenthubdata:<tag>

   (see `bioconductor-experimenthubdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-experimenthubdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-experimenthubdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-experimenthubdata
   :alt:   (downloads)
.. |docker_bioconductor-experimenthubdata| image:: https://quay.io/repository/biocontainers/bioconductor-experimenthubdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-experimenthubdata
.. _`bioconductor-experimenthubdata/tags`: https://quay.io/repository/biocontainers/bioconductor-experimenthubdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-experimenthubdata";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-experimenthubdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-experimenthubdata/README.html