:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hellorangesdata'
.. highlight: bash

bioconductor-hellorangesdata
============================

.. conda:recipe:: bioconductor-hellorangesdata
   :replaces_section_title:
   :noindex:

   Data for the HelloRanges tutorial vignette

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/HelloRangesData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hellorangesdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hellorangesdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hellorangesdata/meta.yaml>`_

   Provides the data that were used in the bedtools tutorial by Aaron Quinlan \(http\:\/\/quinlanlab.org\/tutorials\/bedtools\/bedtools.html\). Includes a subset of the DnaseI hypersensitivity data from \"Maurano et al. Systematic Localization of Common Disease\-Associated Variation in Regulatory DNA. Science. 2012. Vol. 337 no. 6099 pp. 1190\-1195.\" The rest of the tracks were originally downloaded from the UCSC table browser. See the HelloRanges vignette for a port of the bedtools tutorial to R.


.. conda:package:: bioconductor-hellorangesdata

   |downloads_bioconductor-hellorangesdata| |docker_bioconductor-hellorangesdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.23.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.23.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
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

      mamba install bioconductor-hellorangesdata

   and update with::

      mamba update bioconductor-hellorangesdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hellorangesdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hellorangesdata:<tag>

   (see `bioconductor-hellorangesdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hellorangesdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hellorangesdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hellorangesdata
   :alt:   (downloads)
.. |docker_bioconductor-hellorangesdata| image:: https://quay.io/repository/biocontainers/bioconductor-hellorangesdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hellorangesdata
.. _`bioconductor-hellorangesdata/tags`: https://quay.io/repository/biocontainers/bioconductor-hellorangesdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hellorangesdata";
        var versions = ["1.32.0","1.28.0","1.26.0","1.23.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hellorangesdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hellorangesdata/README.html