:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-predasampledata'
.. highlight: bash

bioconductor-predasampledata
============================

.. conda:recipe:: bioconductor-predasampledata
   :replaces_section_title:
   :noindex:

   expression and copy number data on clear cell renal carcinoma samples

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/PREDAsampledata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-predasampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-predasampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-predasampledata/meta.yaml>`_

   Sample data for PREDA package. \(annotations objects synchronized with GeneAnnot custom CDFs version 2.2.0\)


.. conda:package:: bioconductor-predasampledata

   |downloads_bioconductor-predasampledata| |docker_bioconductor-predasampledata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.42.0-0</code>,  <code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.34.0-1</code>,  <code>0.34.0-0</code>,  <code>0.32.0-0</code>,  <code>0.30.0-1</code>,  <code>0.30.0-0</code>,  <code>0.28.0-0</code>,  </span></summary>
      

      ``0.42.0-0``,  ``0.40.0-0``,  ``0.38.0-0``,  ``0.34.0-1``,  ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-1``,  ``0.30.0-0``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-1``,  ``0.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-preda: ``>=1.48.0,<1.49.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-predasampledata

   and update with::

      mamba update bioconductor-predasampledata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-predasampledata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-predasampledata:<tag>

   (see `bioconductor-predasampledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-predasampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-predasampledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-predasampledata
   :alt:   (downloads)
.. |docker_bioconductor-predasampledata| image:: https://quay.io/repository/biocontainers/bioconductor-predasampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-predasampledata
.. _`bioconductor-predasampledata/tags`: https://quay.io/repository/biocontainers/bioconductor-predasampledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-predasampledata";
        var versions = ["0.42.0","0.40.0","0.38.0","0.34.0","0.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-predasampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-predasampledata/README.html