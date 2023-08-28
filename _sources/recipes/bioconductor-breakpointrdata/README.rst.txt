:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-breakpointrdata'
.. highlight: bash

bioconductor-breakpointrdata
============================

.. conda:recipe:: bioconductor-breakpointrdata
   :replaces_section_title:
   :noindex:

   Strand\-seq data for demonstration purposes

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/breakpointRdata.html
   :license: file LICENSE
   :recipe: /`bioconductor-breakpointrdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breakpointrdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breakpointrdata/meta.yaml>`_

   Strand\-seq data to demonstrate functionalities of breakpointR package.


.. conda:package:: bioconductor-breakpointrdata

   |downloads_bioconductor-breakpointrdata| |docker_bioconductor-breakpointrdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.15.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-breakpointrdata

   and update with::

      mamba update bioconductor-breakpointrdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-breakpointrdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-breakpointrdata:<tag>

   (see `bioconductor-breakpointrdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-breakpointrdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breakpointrdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-breakpointrdata
   :alt:   (downloads)
.. |docker_bioconductor-breakpointrdata| image:: https://quay.io/repository/biocontainers/bioconductor-breakpointrdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breakpointrdata
.. _`bioconductor-breakpointrdata/tags`: https://quay.io/repository/biocontainers/bioconductor-breakpointrdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-breakpointrdata";
        var versions = ["1.18.0","1.16.0","1.15.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breakpointrdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breakpointrdata/README.html