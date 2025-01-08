:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gghumanmethcancerpanelv1.db'
.. highlight: bash

bioconductor-gghumanmethcancerpanelv1.db
========================================

.. conda:recipe:: bioconductor-gghumanmethcancerpanelv1.db
   :replaces_section_title:
   :noindex:

   Illumina Golden Gate Human Methylation Cancer Panel Version 1 annotation data \(chip GGHumanMethCancerPanelv1\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/GGHumanMethCancerPanelv1.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gghumanmethcancerpanelv1.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gghumanmethcancerpanelv1.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gghumanmethcancerpanelv1.db/meta.yaml>`_

   Illumina Golden Gate Human Methylation Cancer Panel Version 1 annotation data \(chip GGHumanMethCancerPanelv1\) assembled using data from public repositories


.. conda:package:: bioconductor-gghumanmethcancerpanelv1.db

   |downloads_bioconductor-gghumanmethcancerpanelv1.db| |docker_bioconductor-gghumanmethcancerpanelv1.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-13</code>,  <code>1.4.1-12</code>,  <code>1.4.1-11</code>,  <code>1.4.1-10</code>,  <code>1.4.1-9</code>,  <code>1.4.1-8</code>,  <code>1.4.1-7</code>,  <code>1.4.1-6</code>,  <code>1.4.1-5</code>,  </span></summary>
      

      ``1.4.1-13``,  ``1.4.1-12``,  ``1.4.1-11``,  ``1.4.1-10``,  ``1.4.1-9``,  ``1.4.1-8``,  ``1.4.1-7``,  ``1.4.1-6``,  ``1.4.1-5``,  ``1.4.1-4``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationforge: ``>=1.48.0,<1.49.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
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

      mamba install bioconductor-gghumanmethcancerpanelv1.db

   and update with::

      mamba update bioconductor-gghumanmethcancerpanelv1.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gghumanmethcancerpanelv1.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gghumanmethcancerpanelv1.db:<tag>

   (see `bioconductor-gghumanmethcancerpanelv1.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gghumanmethcancerpanelv1.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gghumanmethcancerpanelv1.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gghumanmethcancerpanelv1.db
   :alt:   (downloads)
.. |docker_bioconductor-gghumanmethcancerpanelv1.db| image:: https://quay.io/repository/biocontainers/bioconductor-gghumanmethcancerpanelv1.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gghumanmethcancerpanelv1.db
.. _`bioconductor-gghumanmethcancerpanelv1.db/tags`: https://quay.io/repository/biocontainers/bioconductor-gghumanmethcancerpanelv1.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gghumanmethcancerpanelv1.db";
        var versions = ["1.4.1","1.4.1","1.4.1","1.4.1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gghumanmethcancerpanelv1.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gghumanmethcancerpanelv1.db/README.html