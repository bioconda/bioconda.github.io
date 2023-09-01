:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaquantome'
.. highlight: bash

metaquantome
============

.. conda:recipe:: metaquantome
   :replaces_section_title:
   :noindex:

   Quantitative metaproteomics analysis of taxonomy and function.

   :homepage: https://github.com/galaxyproteomics/metaquantome
   :license: APACHE / Apache Software License
   :recipe: /`metaquantome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaquantome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaquantome/meta.yaml>`_

   


.. conda:package:: metaquantome

   |downloads_metaquantome| |docker_metaquantome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>1.0a0-3</code>,  <code>0.99.5-3</code>,  </span></summary>
      

      ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``,  ``1.0a0-3``,  ``0.99.5-3``,  ``0.99.4a0-3``,  ``0.99.3-3``,  ``0.99.3-2``,  ``0.99.2-2``,  ``0.99.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``1.73.*``
   :depends ete3: ``3.1.2.*``
   :depends goatools: ``0.7.*``
   :depends libiconv: ``1.15.*``
   :depends numpy: ``1.15.*``
   :depends pandas: ``0.23.*``
   :depends python: ``>=3``
   :depends r-base: ``3.5.1.*``
   :depends r-dplyr: ``0.8.*``
   :depends r-ggplot2: ``3.0.*``
   :depends r-gplots: ``3.0.*``
   :depends r-jsonlite: ``1.5.*``
   :depends r-scico: ``1.1.0.*``
   :depends r-tidyr: ``0.8.*``
   :depends statsmodels: ``0.8.*``
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

      mamba install metaquantome

   and update with::

      mamba update metaquantome

  To create a new environment, run::

      mamba create --name myenvname metaquantome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaquantome:<tag>

   (see `metaquantome/tags`_ for valid values for ``<tag>``)


.. |downloads_metaquantome| image:: https://img.shields.io/conda/dn/bioconda/metaquantome.svg?style=flat
   :target: https://anaconda.org/bioconda/metaquantome
   :alt:   (downloads)
.. |docker_metaquantome| image:: https://quay.io/repository/biocontainers/metaquantome/status
   :target: https://quay.io/repository/biocontainers/metaquantome
.. _`metaquantome/tags`: https://quay.io/repository/biocontainers/metaquantome?tab=tags


.. raw:: html

    <script>
        var package = "metaquantome";
        var versions = ["2.0.2","2.0.1","2.0.0","2.0.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaquantome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaquantome/README.html