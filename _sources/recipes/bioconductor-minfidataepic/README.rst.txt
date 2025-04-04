:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minfidataepic'
.. highlight: bash

bioconductor-minfidataepic
==========================

.. conda:recipe:: bioconductor-minfidataepic
   :replaces_section_title:
   :noindex:

   Example data for the Illumina Methylation EPIC array

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/minfiDataEPIC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minfidataepic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfidataepic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfidataepic/meta.yaml>`_

   Data from 3 technical replicates of the cell line GM12878 from the EPIC methylation array.


.. conda:package:: bioconductor-minfidataepic

   |downloads_bioconductor-minfidataepic| |docker_bioconductor-minfidataepic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylationepicmanifest: ``>=0.3.0,<0.4.0``
   :depends bioconductor-minfi: ``>=1.52.0,<1.53.0``
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

      mamba install bioconductor-minfidataepic

   and update with::

      mamba update bioconductor-minfidataepic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-minfidataepic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-minfidataepic:<tag>

   (see `bioconductor-minfidataepic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-minfidataepic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minfidataepic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minfidataepic
   :alt:   (downloads)
.. |docker_bioconductor-minfidataepic| image:: https://quay.io/repository/biocontainers/bioconductor-minfidataepic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minfidataepic
.. _`bioconductor-minfidataepic/tags`: https://quay.io/repository/biocontainers/bioconductor-minfidataepic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-minfidataepic";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minfidataepic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minfidataepic/README.html