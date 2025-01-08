:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chemminedrugs'
.. highlight: bash

bioconductor-chemminedrugs
==========================

.. conda:recipe:: bioconductor-chemminedrugs
   :replaces_section_title:
   :noindex:

   DrugBank data set

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/ChemmineDrugs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chemminedrugs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemminedrugs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemminedrugs/meta.yaml>`_

   An annotation package for use with ChemmineR. This package includes data from DrugBank. DUD data can be downloaded using the \"DUD\(\)\" function in ChemmineR.


.. conda:package:: bioconductor-chemminedrugs

   |downloads_bioconductor-chemminedrugs| |docker_bioconductor-chemminedrugs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2-13</code>,  <code>1.0.2-12</code>,  <code>1.0.2-11</code>,  <code>1.0.2-10</code>,  <code>1.0.2-9</code>,  <code>1.0.2-8</code>,  <code>1.0.2-7</code>,  <code>1.0.2-6</code>,  <code>1.0.2-5</code>,  </span></summary>
      

      ``1.0.2-13``,  ``1.0.2-12``,  ``1.0.2-11``,  ``1.0.2-10``,  ``1.0.2-9``,  ``1.0.2-8``,  ``1.0.2-7``,  ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-chemminer: ``>=3.58.0,<3.59.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rsqlite: 
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

      mamba install bioconductor-chemminedrugs

   and update with::

      mamba update bioconductor-chemminedrugs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chemminedrugs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chemminedrugs:<tag>

   (see `bioconductor-chemminedrugs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chemminedrugs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chemminedrugs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chemminedrugs
   :alt:   (downloads)
.. |docker_bioconductor-chemminedrugs| image:: https://quay.io/repository/biocontainers/bioconductor-chemminedrugs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chemminedrugs
.. _`bioconductor-chemminedrugs/tags`: https://quay.io/repository/biocontainers/bioconductor-chemminedrugs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chemminedrugs";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chemminedrugs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chemminedrugs/README.html