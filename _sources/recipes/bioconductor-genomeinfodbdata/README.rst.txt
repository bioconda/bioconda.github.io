:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomeinfodbdata'
.. highlight: bash

bioconductor-genomeinfodbdata
=============================

.. conda:recipe:: bioconductor-genomeinfodbdata
   :replaces_section_title:
   :noindex:

   Species and taxonomy ID look up tables used by GenomeInfoDb

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/GenomeInfoDbData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomeinfodbdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomeinfodbdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomeinfodbdata/meta.yaml>`_

   Files for mapping between NCBI taxonomy ID and species. Used by functions in the GenomeInfoDb package.


.. conda:package:: bioconductor-genomeinfodbdata

   |downloads_bioconductor-genomeinfodbdata| |docker_bioconductor-genomeinfodbdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.10-0</code>,  <code>1.2.9-0</code>,  <code>1.2.7-2</code>,  <code>1.2.7-1</code>,  <code>1.2.7-0</code>,  <code>1.2.6-0</code>,  <code>1.2.4-2</code>,  <code>1.2.4-1</code>,  <code>1.2.4-0</code>,  </span></summary>
      

      ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.7-2``,  ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.4-2``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.99.0-1``,  ``0.99.0-0``

      
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

      mamba install bioconductor-genomeinfodbdata

   and update with::

      mamba update bioconductor-genomeinfodbdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomeinfodbdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomeinfodbdata:<tag>

   (see `bioconductor-genomeinfodbdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomeinfodbdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomeinfodbdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomeinfodbdata
   :alt:   (downloads)
.. |docker_bioconductor-genomeinfodbdata| image:: https://quay.io/repository/biocontainers/bioconductor-genomeinfodbdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomeinfodbdata
.. _`bioconductor-genomeinfodbdata/tags`: https://quay.io/repository/biocontainers/bioconductor-genomeinfodbdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomeinfodbdata";
        var versions = ["1.2.10","1.2.9","1.2.7","1.2.7","1.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomeinfodbdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomeinfodbdata/README.html