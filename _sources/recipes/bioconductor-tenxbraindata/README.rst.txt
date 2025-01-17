:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tenxbraindata'
.. highlight: bash

bioconductor-tenxbraindata
==========================

.. conda:recipe:: bioconductor-tenxbraindata
   :replaces_section_title:
   :noindex:

   Data from the 10X 1.3 Million Brain Cell Study

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/TENxBrainData.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-tenxbraindata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxbraindata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxbraindata/meta.yaml>`_

   Single\-cell RNA\-seq data for 1.3 million brain cells from E18 mice\, generated by 10X Genomics.


.. conda:package:: bioconductor-tenxbraindata

   |downloads_bioconductor-tenxbraindata| |docker_bioconductor-tenxbraindata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
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

      mamba install bioconductor-tenxbraindata

   and update with::

      mamba update bioconductor-tenxbraindata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tenxbraindata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tenxbraindata:<tag>

   (see `bioconductor-tenxbraindata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tenxbraindata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenxbraindata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tenxbraindata
   :alt:   (downloads)
.. |docker_bioconductor-tenxbraindata| image:: https://quay.io/repository/biocontainers/bioconductor-tenxbraindata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenxbraindata
.. _`bioconductor-tenxbraindata/tags`: https://quay.io/repository/biocontainers/bioconductor-tenxbraindata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tenxbraindata";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tenxbraindata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tenxbraindata/README.html