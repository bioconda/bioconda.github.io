:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epivizrchart'
.. highlight: bash

bioconductor-epivizrchart
=========================

.. conda:recipe:: bioconductor-epivizrchart
   :replaces_section_title:
   :noindex:

   R interface to epiviz web components

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/epivizrChart.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epivizrchart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrchart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrchart/meta.yaml>`_

   This package provides an API for interactive visualization of genomic data using epiviz web components. Objects in R\/BioConductor can be used to generate interactive R markdown\/notebook documents or can be visualized in the R Studio\'s default viewer.


.. conda:package:: bioconductor-epivizrchart

   |downloads_bioconductor-epivizrchart| |docker_bioconductor-epivizrchart|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-epivizrdata: ``>=1.30.0,<1.31.0``
   :depends bioconductor-epivizrserver: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-htmltools: 
   :depends r-rjson: 
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

      mamba install bioconductor-epivizrchart

   and update with::

      mamba update bioconductor-epivizrchart

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epivizrchart

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epivizrchart:<tag>

   (see `bioconductor-epivizrchart/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epivizrchart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epivizrchart.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epivizrchart
   :alt:   (downloads)
.. |docker_bioconductor-epivizrchart| image:: https://quay.io/repository/biocontainers/bioconductor-epivizrchart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epivizrchart
.. _`bioconductor-epivizrchart/tags`: https://quay.io/repository/biocontainers/bioconductor-epivizrchart?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epivizrchart";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epivizrchart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epivizrchart/README.html