:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fabiadata'
.. highlight: bash

bioconductor-fabiadata
======================

.. conda:recipe:: bioconductor-fabiadata
   :replaces_section_title:
   :noindex:

   Data sets for FABIA \(Factor Analysis for Bicluster Acquisition\)

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/fabiaData.html
   :license: LGPL (>= 2.1)
   :recipe: /`bioconductor-fabiadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fabiadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fabiadata/meta.yaml>`_

   Supplying gene expression data sets for the demos of the biclustering method \"Factor Analysis for Bicluster Acquisition\" \(FABIA\). The following three data sets are provided\: A\) breast cancer \(van\'t Veer\, Nature\, 2002\)\, B\) multiple tissues \(Su\, PNAS\, 2002\)\, and C\) diffuse large\-B\-cell lymphoma \(Rosenwald\, N Engl J Med\, 2002\).


.. conda:package:: bioconductor-fabiadata

   |downloads_bioconductor-fabiadata| |docker_bioconductor-fabiadata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-fabiadata

   and update with::

      mamba update bioconductor-fabiadata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fabiadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fabiadata:<tag>

   (see `bioconductor-fabiadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fabiadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fabiadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fabiadata
   :alt:   (downloads)
.. |docker_bioconductor-fabiadata| image:: https://quay.io/repository/biocontainers/bioconductor-fabiadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fabiadata
.. _`bioconductor-fabiadata/tags`: https://quay.io/repository/biocontainers/bioconductor-fabiadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fabiadata";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fabiadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fabiadata/README.html