:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.tgondii.toxodb.7.0'
.. highlight: bash

bioconductor-bsgenome.tgondii.toxodb.7.0
========================================

.. conda:recipe:: bioconductor-bsgenome.tgondii.toxodb.7.0
   :replaces_section_title:
   :noindex:

   Toxoplasma gondii ME49 \(ToxoDB\-7.0\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/BSgenome.Tgondii.ToxoDB.7.0.html
   :license: GPL 3
   :recipe: /`bioconductor-bsgenome.tgondii.toxodb.7.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.tgondii.toxodb.7.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.tgondii.toxodb.7.0/meta.yaml>`_

   Toxoplasma gondii ME49 genome Release 7.0 available at http\:\/\/www.toxodb.org


.. conda:package:: bioconductor-bsgenome.tgondii.toxodb.7.0

   |downloads_bioconductor-bsgenome.tgondii.toxodb.7.0| |docker_bioconductor-bsgenome.tgondii.toxodb.7.0|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.1-5</code>,  <code>0.99.1-4</code>,  <code>0.99.1-3</code>,  <code>0.99.1-2</code>,  <code>0.99.1-1</code>,  <code>0.99.1-0</code>,  <code>0.99.0-4</code>,  <code>0.99.0-3</code>,  <code>0.99.0-2</code>,  </span></summary>
      

      ``0.99.1-5``,  ``0.99.1-4``,  ``0.99.1-3``,  ``0.99.1-2``,  ``0.99.1-1``,  ``0.99.1-0``,  ``0.99.0-4``,  ``0.99.0-3``,  ``0.99.0-2``,  ``0.99.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-bsgenome.tgondii.toxodb.7.0

   and update with::

      mamba update bioconductor-bsgenome.tgondii.toxodb.7.0

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.tgondii.toxodb.7.0

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.tgondii.toxodb.7.0:<tag>

   (see `bioconductor-bsgenome.tgondii.toxodb.7.0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.tgondii.toxodb.7.0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.tgondii.toxodb.7.0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.tgondii.toxodb.7.0
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.tgondii.toxodb.7.0| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.tgondii.toxodb.7.0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.tgondii.toxodb.7.0
.. _`bioconductor-bsgenome.tgondii.toxodb.7.0/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.tgondii.toxodb.7.0?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.tgondii.toxodb.7.0";
        var versions = ["0.99.1","0.99.1","0.99.1","0.99.1","0.99.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.tgondii.toxodb.7.0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.tgondii.toxodb.7.0/README.html