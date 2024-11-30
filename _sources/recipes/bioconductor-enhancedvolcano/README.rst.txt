:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enhancedvolcano'
.. highlight: bash

bioconductor-enhancedvolcano
============================

.. conda:recipe:: bioconductor-enhancedvolcano
   :replaces_section_title:
   :noindex:

   Publication\-ready volcano plots with enhanced colouring and labeling

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/EnhancedVolcano.html
   :license: GPL-3
   :recipe: /`bioconductor-enhancedvolcano <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enhancedvolcano>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enhancedvolcano/meta.yaml>`_

   Volcano plots represent a useful way to visualise the results of differential expression analyses. Here\, we present a highly\-configurable function that produces publication\-ready volcano plots. EnhancedVolcano will attempt to fit as many point labels in the plot window as possible\, thus avoiding \'clogging\' up the plot with labels that could not otherwise have been read. Other functionality allows the user to identify up to 4 different types of attributes in the same plot space via colour\, shape\, size\, and shade parameter configurations.


.. conda:package:: bioconductor-enhancedvolcano

   |downloads_bioconductor-enhancedvolcano| |docker_bioconductor-enhancedvolcano|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
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

      mamba install bioconductor-enhancedvolcano

   and update with::

      mamba update bioconductor-enhancedvolcano

  To create a new environment, run::

      mamba create --name myenvname bioconductor-enhancedvolcano

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enhancedvolcano:<tag>

   (see `bioconductor-enhancedvolcano/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enhancedvolcano| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enhancedvolcano.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enhancedvolcano
   :alt:   (downloads)
.. |docker_bioconductor-enhancedvolcano| image:: https://quay.io/repository/biocontainers/bioconductor-enhancedvolcano/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enhancedvolcano
.. _`bioconductor-enhancedvolcano/tags`: https://quay.io/repository/biocontainers/bioconductor-enhancedvolcano?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enhancedvolcano";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enhancedvolcano/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enhancedvolcano/README.html