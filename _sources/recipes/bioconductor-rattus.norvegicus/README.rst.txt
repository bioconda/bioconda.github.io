:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rattus.norvegicus'
.. highlight: bash

bioconductor-rattus.norvegicus
==============================

.. conda:recipe:: bioconductor-rattus.norvegicus
   :replaces_section_title:
   :noindex:

   Annotation package for the Rattus.norvegicus object

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/Rattus.norvegicus.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rattus.norvegicus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rattus.norvegicus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rattus.norvegicus/meta.yaml>`_

   Contains the Rattus.norvegicus object to access data from several related annotation packages.


.. conda:package:: bioconductor-rattus.norvegicus

   |downloads_bioconductor-rattus.norvegicus| |docker_bioconductor-rattus.norvegicus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-12</code>,  <code>1.3.1-11</code>,  <code>1.3.1-10</code>,  <code>1.3.1-9</code>,  <code>1.3.1-8</code>,  <code>1.3.1-7</code>,  <code>1.3.1-6</code>,  <code>1.3.1-5</code>,  <code>1.3.1-4</code>,  </span></summary>
      

      ``1.3.1-12``,  ``1.3.1-11``,  ``1.3.1-10``,  ``1.3.1-9``,  ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.rn.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-organismdbi: ``>=1.44.0,<1.45.0``
   :depends bioconductor-txdb.rnorvegicus.ucsc.rn5.refgene: ``>=3.12.0,<3.13.0``
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

      mamba install bioconductor-rattus.norvegicus

   and update with::

      mamba update bioconductor-rattus.norvegicus

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rattus.norvegicus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rattus.norvegicus:<tag>

   (see `bioconductor-rattus.norvegicus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rattus.norvegicus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rattus.norvegicus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rattus.norvegicus
   :alt:   (downloads)
.. |docker_bioconductor-rattus.norvegicus| image:: https://quay.io/repository/biocontainers/bioconductor-rattus.norvegicus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rattus.norvegicus
.. _`bioconductor-rattus.norvegicus/tags`: https://quay.io/repository/biocontainers/bioconductor-rattus.norvegicus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rattus.norvegicus";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rattus.norvegicus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rattus.norvegicus/README.html