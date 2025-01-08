:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drawproteins'
.. highlight: bash

bioconductor-drawproteins
=========================

.. conda:recipe:: bioconductor-drawproteins
   :replaces_section_title:
   :noindex:

   Package to Draw Protein Schematics from Uniprot API output

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/drawProteins.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-drawproteins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drawproteins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drawproteins/meta.yaml>`_

   This package draws protein schematics from Uniprot API output. From the JSON returned by the GET command\, it creates a dataframe from the Uniprot Features API. This dataframe can then be used by geoms based on ggplot2 and base R to draw protein schematics.


.. conda:package:: bioconductor-drawproteins

   |downloads_bioconductor-drawproteins| |docker_bioconductor-drawproteins|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-httr: 
   :depends r-readr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-drawproteins

   and update with::

      mamba update bioconductor-drawproteins

  To create a new environment, run::

      mamba create --name myenvname bioconductor-drawproteins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drawproteins:<tag>

   (see `bioconductor-drawproteins/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drawproteins| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drawproteins.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drawproteins
   :alt:   (downloads)
.. |docker_bioconductor-drawproteins| image:: https://quay.io/repository/biocontainers/bioconductor-drawproteins/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drawproteins
.. _`bioconductor-drawproteins/tags`: https://quay.io/repository/biocontainers/bioconductor-drawproteins?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-drawproteins";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drawproteins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drawproteins/README.html