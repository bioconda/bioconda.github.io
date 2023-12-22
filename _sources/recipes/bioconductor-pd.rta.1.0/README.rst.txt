:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.rta.1.0'
.. highlight: bash

bioconductor-pd.rta.1.0
=======================

.. conda:recipe:: bioconductor-pd.rta.1.0
   :replaces_section_title:
   :noindex:

   Platform Design Info for Affymetrix RTA\-1\_0

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/pd.rta.1.0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.rta.1.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.rta.1.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.rta.1.0/meta.yaml>`_

   Platform Design Info for Affymetrix RTA\-1\_0


.. conda:package:: bioconductor-pd.rta.1.0

   |downloads_bioconductor-pd.rta.1.0| |docker_bioconductor-pd.rta.1.0|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.2-12</code>,  <code>3.12.2-11</code>,  <code>3.12.2-10</code>,  <code>3.12.2-9</code>,  <code>3.12.2-8</code>,  <code>3.12.2-7</code>,  <code>3.12.2-6</code>,  <code>3.12.2-5</code>,  <code>3.12.2-4</code>,  </span></summary>
      

      ``3.12.2-12``,  ``3.12.2-11``,  ``3.12.2-10``,  ``3.12.2-9``,  ``3.12.2-8``,  ``3.12.2-7``,  ``3.12.2-6``,  ``3.12.2-5``,  ``3.12.2-4``,  ``3.12.2-3``,  ``3.12.2-2``,  ``3.12.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-oligo: ``>=1.66.0,<1.67.0``
   :depends bioconductor-oligoclasses: ``>=1.64.0,<1.65.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: ``>=0.3.1``
   :depends r-rsqlite: ``>=1.0.0``
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

      mamba install bioconductor-pd.rta.1.0

   and update with::

      mamba update bioconductor-pd.rta.1.0

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pd.rta.1.0

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.rta.1.0:<tag>

   (see `bioconductor-pd.rta.1.0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.rta.1.0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.rta.1.0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.rta.1.0
   :alt:   (downloads)
.. |docker_bioconductor-pd.rta.1.0| image:: https://quay.io/repository/biocontainers/bioconductor-pd.rta.1.0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.rta.1.0
.. _`bioconductor-pd.rta.1.0/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.rta.1.0?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.rta.1.0";
        var versions = ["3.12.2","3.12.2","3.12.2","3.12.2","3.12.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.rta.1.0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.rta.1.0/README.html