:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gpaexample'
.. highlight: bash

bioconductor-gpaexample
=======================

.. conda:recipe:: bioconductor-gpaexample
   :replaces_section_title:
   :noindex:

   Example data for the GPA package \(Genetic analysis incorporating Pleiotropy and Annotation\)

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/gpaExample.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gpaexample <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpaexample>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpaexample/meta.yaml>`_

   Example data for the GPA package\, consisting of the p\-values of 1\,219\,805 SNPs for five psychiatric disorder GWAS from the psychiatric GWAS consortium \(PGC\)\, with the annotation data using genes preferentially expressed in the central nervous system \(CNS\).


.. conda:package:: bioconductor-gpaexample

   |downloads_bioconductor-gpaexample| |docker_bioconductor-gpaexample|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.9.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.9.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-gpaexample

   and update with::

      mamba update bioconductor-gpaexample

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gpaexample

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gpaexample:<tag>

   (see `bioconductor-gpaexample/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gpaexample| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpaexample.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gpaexample
   :alt:   (downloads)
.. |docker_bioconductor-gpaexample| image:: https://quay.io/repository/biocontainers/bioconductor-gpaexample/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpaexample
.. _`bioconductor-gpaexample/tags`: https://quay.io/repository/biocontainers/bioconductor-gpaexample?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gpaexample";
        var versions = ["1.14.0","1.12.0","1.9.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpaexample/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpaexample/README.html