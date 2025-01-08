:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rat2302frmavecs'
.. highlight: bash

bioconductor-rat2302frmavecs
============================

.. conda:recipe:: bioconductor-rat2302frmavecs
   :replaces_section_title:
   :noindex:

   Vectors used by frma for microarrays of type rat2302rnentrezg

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/rat2302frmavecs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rat2302frmavecs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rat2302frmavecs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rat2302frmavecs/meta.yaml>`_

   This package was created with the help of frmaTools version 1.24.0.


.. conda:package:: bioconductor-rat2302frmavecs

   |downloads_bioconductor-rat2302frmavecs| |docker_bioconductor-rat2302frmavecs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.11-12</code>,  <code>0.99.11-11</code>,  <code>0.99.11-10</code>,  <code>0.99.11-9</code>,  <code>0.99.11-8</code>,  <code>0.99.11-7</code>,  <code>0.99.11-6</code>,  <code>0.99.11-5</code>,  <code>0.99.11-4</code>,  </span></summary>
      

      ``0.99.11-12``,  ``0.99.11-11``,  ``0.99.11-10``,  ``0.99.11-9``,  ``0.99.11-8``,  ``0.99.11-7``,  ``0.99.11-6``,  ``0.99.11-5``,  ``0.99.11-4``,  ``0.99.11-3``,  ``0.99.11-2``,  ``0.99.11-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-frma: ``>=1.58.0,<1.59.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-rat2302frmavecs

   and update with::

      mamba update bioconductor-rat2302frmavecs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rat2302frmavecs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rat2302frmavecs:<tag>

   (see `bioconductor-rat2302frmavecs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rat2302frmavecs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rat2302frmavecs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rat2302frmavecs
   :alt:   (downloads)
.. |docker_bioconductor-rat2302frmavecs| image:: https://quay.io/repository/biocontainers/bioconductor-rat2302frmavecs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rat2302frmavecs
.. _`bioconductor-rat2302frmavecs/tags`: https://quay.io/repository/biocontainers/bioconductor-rat2302frmavecs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rat2302frmavecs";
        var versions = ["0.99.11","0.99.11","0.99.11","0.99.11","0.99.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rat2302frmavecs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rat2302frmavecs/README.html