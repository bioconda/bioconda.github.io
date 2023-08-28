:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prebsdata'
.. highlight: bash

bioconductor-prebsdata
======================

.. conda:recipe:: bioconductor-prebsdata
   :replaces_section_title:
   :noindex:

   Data for \'prebs\' package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/prebsdata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prebsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prebsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prebsdata/meta.yaml>`_

   This package contains data required to run examples in \'prebs\' package. The data files include\: 1\) Small sample bam files for demonstration purposes 2\) Probe sequence mappings for Custom CDF \(taken from http\:\/\/brainarray.mbni.med.umich.edu\/brainarray\/Database\/CustomCDF\/genomic\_curated\_CDF.asp\) 3\) Probe sequence mappings for manufacturer\'s CDF \(manually created using bowtie\)


.. conda:package:: bioconductor-prebsdata

   |downloads_bioconductor-prebsdata| |docker_bioconductor-prebsdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
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

      mamba install bioconductor-prebsdata

   and update with::

      mamba update bioconductor-prebsdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-prebsdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prebsdata:<tag>

   (see `bioconductor-prebsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prebsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prebsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prebsdata
   :alt:   (downloads)
.. |docker_bioconductor-prebsdata| image:: https://quay.io/repository/biocontainers/bioconductor-prebsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prebsdata
.. _`bioconductor-prebsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-prebsdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prebsdata";
        var versions = ["1.36.0","1.33.0","1.30.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prebsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prebsdata/README.html