:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaquant'
.. highlight: bash

metaquant
=========

.. conda:recipe:: metaquant
   :replaces_section_title:
   :noindex:

   Quantitative microbiome analysis

   :homepage: The package home page
   :developer docs: https://github.com/caleb-easterly/metaquant
   :license: APACHE / Apache Software License
   :recipe: /`metaquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaquant/meta.yaml>`_

   


.. conda:package:: metaquant

   |downloads_metaquant| |docker_metaquant|

   :versions:
      
      

      ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends ete3: 
   :depends goatools: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends statsmodels: 
   :depends wget: 
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

      mamba install metaquant

   and update with::

      mamba update metaquant

  To create a new environment, run::

      mamba create --name myenvname metaquant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaquant:<tag>

   (see `metaquant/tags`_ for valid values for ``<tag>``)


.. |downloads_metaquant| image:: https://img.shields.io/conda/dn/bioconda/metaquant.svg?style=flat
   :target: https://anaconda.org/bioconda/metaquant
   :alt:   (downloads)
.. |docker_metaquant| image:: https://quay.io/repository/biocontainers/metaquant/status
   :target: https://quay.io/repository/biocontainers/metaquant
.. _`metaquant/tags`: https://quay.io/repository/biocontainers/metaquant?tab=tags


.. raw:: html

    <script>
        var package = "metaquant";
        var versions = ["0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaquant/README.html