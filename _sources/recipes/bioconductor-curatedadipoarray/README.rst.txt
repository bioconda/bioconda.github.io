:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedadipoarray'
.. highlight: bash

bioconductor-curatedadipoarray
==============================

.. conda:recipe:: bioconductor-curatedadipoarray
   :replaces_section_title:
   :noindex:

   A Curated Microarrays Dataset of MDI\-induced Differentiated Adipocytes \(3T3\-L1\) Under Genetic and Pharmacological Perturbations

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/curatedAdipoArray.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-curatedadipoarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedadipoarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedadipoarray/meta.yaml>`_

   A curated dataset of Microarrays samples. The samples are MDI\- induced pre\-adipocytes \(3T3\-L1\) at different time points\/stage of differentiation under different types of genetic \(knockdown\/overexpression\) and pharmacological \(drug treatment\) perturbations. The package documents the data collection and processing. In addition to the documentation\, the package contains the scripts that was used to generated the data.


.. conda:package:: bioconductor-curatedadipoarray

   |downloads_bioconductor-curatedadipoarray| |docker_bioconductor-curatedadipoarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.9.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.9.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
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

      mamba install bioconductor-curatedadipoarray

   and update with::

      mamba update bioconductor-curatedadipoarray

  To create a new environment, run::

      mamba create --name myenvname bioconductor-curatedadipoarray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-curatedadipoarray:<tag>

   (see `bioconductor-curatedadipoarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-curatedadipoarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedadipoarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedadipoarray
   :alt:   (downloads)
.. |docker_bioconductor-curatedadipoarray| image:: https://quay.io/repository/biocontainers/bioconductor-curatedadipoarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedadipoarray
.. _`bioconductor-curatedadipoarray/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedadipoarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-curatedadipoarray";
        var versions = ["1.18.0","1.14.0","1.12.0","1.9.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedadipoarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedadipoarray/README.html