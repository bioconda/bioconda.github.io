:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mus.musculus'
.. highlight: bash

bioconductor-mus.musculus
=========================

.. conda:recipe:: bioconductor-mus.musculus
   :replaces_section_title:
   :noindex:

   Annotation package for the Mus.musculus object

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/Mus.musculus.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mus.musculus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mus.musculus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mus.musculus/meta.yaml>`_

   Contains the Mus.musculus object to access data from several related annotation packages.


.. conda:package:: bioconductor-mus.musculus

   |downloads_bioconductor-mus.musculus| |docker_bioconductor-mus.musculus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-11</code>,  <code>1.3.1-10</code>,  <code>1.3.1-9</code>,  <code>1.3.1-8</code>,  <code>1.3.1-7</code>,  <code>1.3.1-6</code>,  <code>1.3.1-5</code>,  <code>1.3.1-4</code>,  <code>1.3.1-3</code>,  </span></summary>
      

      ``1.3.1-11``,  ``1.3.1-10``,  ``1.3.1-9``,  ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-go.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-organismdbi: ``>=1.42.0,<1.43.0``
   :depends bioconductor-txdb.mmusculus.ucsc.mm10.knowngene: ``>=3.10.0,<3.11.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-mus.musculus

   and update with::

      mamba update bioconductor-mus.musculus

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mus.musculus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mus.musculus:<tag>

   (see `bioconductor-mus.musculus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mus.musculus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mus.musculus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mus.musculus
   :alt:   (downloads)
.. |docker_bioconductor-mus.musculus| image:: https://quay.io/repository/biocontainers/bioconductor-mus.musculus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mus.musculus
.. _`bioconductor-mus.musculus/tags`: https://quay.io/repository/biocontainers/bioconductor-mus.musculus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mus.musculus";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mus.musculus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mus.musculus/README.html