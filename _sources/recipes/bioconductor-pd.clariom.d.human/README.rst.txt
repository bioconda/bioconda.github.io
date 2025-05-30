:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.clariom.d.human'
.. highlight: bash

bioconductor-pd.clariom.d.human
===============================

.. conda:recipe:: bioconductor-pd.clariom.d.human
   :replaces_section_title:
   :noindex:

   Platform Design Info for Affymetrix Clariom\_D\_Human

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/pd.clariom.d.human.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.clariom.d.human <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.clariom.d.human>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.clariom.d.human/meta.yaml>`_

   Platform Design Info for Affymetrix Clariom\_D\_Human


.. conda:package:: bioconductor-pd.clariom.d.human

   |downloads_bioconductor-pd.clariom.d.human| |docker_bioconductor-pd.clariom.d.human|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.14.1-13</code>,  <code>3.14.1-12</code>,  <code>3.14.1-11</code>,  <code>3.14.1-10</code>,  <code>3.14.1-9</code>,  <code>3.14.1-8</code>,  <code>3.14.1-7</code>,  <code>3.14.1-6</code>,  <code>3.14.1-5</code>,  </span></summary>
      

      ``3.14.1-13``,  ``3.14.1-12``,  ``3.14.1-11``,  ``3.14.1-10``,  ``3.14.1-9``,  ``3.14.1-8``,  ``3.14.1-7``,  ``3.14.1-6``,  ``3.14.1-5``,  ``3.14.1-4``,  ``3.14.1-3``,  ``3.14.1-2``,  ``3.14.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-oligo: ``>=1.70.0,<1.71.0``
   :depends bioconductor-oligoclasses: ``>=1.68.0,<1.69.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-pd.clariom.d.human

   and update with::

      mamba update bioconductor-pd.clariom.d.human

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pd.clariom.d.human

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.clariom.d.human:<tag>

   (see `bioconductor-pd.clariom.d.human/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.clariom.d.human| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.clariom.d.human.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.clariom.d.human
   :alt:   (downloads)
.. |docker_bioconductor-pd.clariom.d.human| image:: https://quay.io/repository/biocontainers/bioconductor-pd.clariom.d.human/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.clariom.d.human
.. _`bioconductor-pd.clariom.d.human/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.clariom.d.human?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.clariom.d.human";
        var versions = ["3.14.1","3.14.1","3.14.1","3.14.1","3.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.clariom.d.human/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.clariom.d.human/README.html