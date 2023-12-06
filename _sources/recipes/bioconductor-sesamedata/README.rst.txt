:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sesamedata'
.. highlight: bash

bioconductor-sesamedata
=======================

.. conda:recipe:: bioconductor-sesamedata
   :replaces_section_title:
   :noindex:

   Supporting Data for SeSAMe Package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/sesameData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sesamedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesamedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesamedata/meta.yaml>`_

   Provides supporting annotation and test data for SeSAMe package. This includes chip tango addresses\, mapping information\, performance annotation\, and trained predictor for Infinium array data. This package provides user access to essential annotation data for working with many generations of the Infinium DNA methylation array. Current we support human array \(HM27\, HM450\, EPIC\)\, mouse array \(MM285\) and the HorvathMethylChip40 \(Mammal40\) array.


.. conda:package:: bioconductor-sesamedata

   |downloads_bioconductor-sesamedata| |docker_bioconductor-sesamedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-readr: 
   :depends r-stringr: 
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

      mamba install bioconductor-sesamedata

   and update with::

      mamba update bioconductor-sesamedata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sesamedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sesamedata:<tag>

   (see `bioconductor-sesamedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sesamedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sesamedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sesamedata
   :alt:   (downloads)
.. |docker_bioconductor-sesamedata| image:: https://quay.io/repository/biocontainers/bioconductor-sesamedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sesamedata
.. _`bioconductor-sesamedata/tags`: https://quay.io/repository/biocontainers/bioconductor-sesamedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sesamedata";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sesamedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sesamedata/README.html