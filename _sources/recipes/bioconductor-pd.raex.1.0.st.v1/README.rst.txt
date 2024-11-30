:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.raex.1.0.st.v1'
.. highlight: bash

bioconductor-pd.raex.1.0.st.v1
==============================

.. conda:recipe:: bioconductor-pd.raex.1.0.st.v1
   :replaces_section_title:
   :noindex:

   Platform Design Info for Affymetrix RaEx\-1\_0\-st\-v1

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/pd.raex.1.0.st.v1.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.raex.1.0.st.v1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.raex.1.0.st.v1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.raex.1.0.st.v1/meta.yaml>`_

   Platform Design Info for Affymetrix RaEx\-1\_0\-st\-v1


.. conda:package:: bioconductor-pd.raex.1.0.st.v1

   |downloads_bioconductor-pd.raex.1.0.st.v1| |docker_bioconductor-pd.raex.1.0.st.v1|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.14.1-12</code>,  <code>3.14.1-11</code>,  <code>3.14.1-10</code>,  <code>3.14.1-9</code>,  <code>3.14.1-8</code>,  <code>3.14.1-7</code>,  <code>3.14.1-6</code>,  <code>3.14.1-5</code>,  <code>3.14.1-4</code>,  </span></summary>
      

      ``3.14.1-12``,  ``3.14.1-11``,  ``3.14.1-10``,  ``3.14.1-9``,  ``3.14.1-8``,  ``3.14.1-7``,  ``3.14.1-6``,  ``3.14.1-5``,  ``3.14.1-4``,  ``3.14.1-3``,  ``3.14.1-2``,  ``3.14.1-0``

      
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

      mamba install bioconductor-pd.raex.1.0.st.v1

   and update with::

      mamba update bioconductor-pd.raex.1.0.st.v1

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pd.raex.1.0.st.v1

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.raex.1.0.st.v1:<tag>

   (see `bioconductor-pd.raex.1.0.st.v1/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.raex.1.0.st.v1| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.raex.1.0.st.v1.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.raex.1.0.st.v1
   :alt:   (downloads)
.. |docker_bioconductor-pd.raex.1.0.st.v1| image:: https://quay.io/repository/biocontainers/bioconductor-pd.raex.1.0.st.v1/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.raex.1.0.st.v1
.. _`bioconductor-pd.raex.1.0.st.v1/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.raex.1.0.st.v1?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.raex.1.0.st.v1";
        var versions = ["3.14.1","3.14.1","3.14.1","3.14.1","3.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.raex.1.0.st.v1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.raex.1.0.st.v1/README.html