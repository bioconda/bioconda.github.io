:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pchicdata'
.. highlight: bash

bioconductor-pchicdata
======================

.. conda:recipe:: bioconductor-pchicdata
   :replaces_section_title:
   :noindex:

   Promoter Capture Hi\-C data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/PCHiCdata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pchicdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pchicdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pchicdata/meta.yaml>`_

   Subsets of Promoter Capture Hi\-C data conveniently packaged for Chicago users. Data includes interactions detected for chromosomes 20 and 21 in GM12878 cells and for chromosomes 18 and 19 in mESC.


.. conda:package:: bioconductor-pchicdata

   |downloads_bioconductor-pchicdata| |docker_bioconductor-pchicdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.1-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.22.1-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-chicago: ``>=1.30.0,<1.31.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
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

      mamba install bioconductor-pchicdata

   and update with::

      mamba update bioconductor-pchicdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pchicdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pchicdata:<tag>

   (see `bioconductor-pchicdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pchicdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pchicdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pchicdata
   :alt:   (downloads)
.. |docker_bioconductor-pchicdata| image:: https://quay.io/repository/biocontainers/bioconductor-pchicdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pchicdata
.. _`bioconductor-pchicdata/tags`: https://quay.io/repository/biocontainers/bioconductor-pchicdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pchicdata";
        var versions = ["1.30.0","1.28.0","1.25.0","1.22.1","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pchicdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pchicdata/README.html