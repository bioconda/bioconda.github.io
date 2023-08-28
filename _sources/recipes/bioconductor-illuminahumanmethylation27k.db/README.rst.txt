:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanmethylation27k.db'
.. highlight: bash

bioconductor-illuminahumanmethylation27k.db
===========================================

.. conda:recipe:: bioconductor-illuminahumanmethylation27k.db
   :replaces_section_title:
   :noindex:

   Illumina Illumina Human Methylation 27k annotation data \(chip IlluminaHumanMethylation27k\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/IlluminaHumanMethylation27k.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanmethylation27k.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation27k.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation27k.db/meta.yaml>`_

   Illumina Illumina Human Methylation 27k annotation data \(chip IlluminaHumanMethylation27k\) assembled using data from public repositories


.. conda:package:: bioconductor-illuminahumanmethylation27k.db

   |downloads_bioconductor-illuminahumanmethylation27k.db| |docker_bioconductor-illuminahumanmethylation27k.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.8-11</code>,  <code>1.4.8-10</code>,  <code>1.4.8-9</code>,  <code>1.4.8-8</code>,  <code>1.4.8-7</code>,  <code>1.4.8-6</code>,  <code>1.4.8-5</code>,  <code>1.4.8-4</code>,  <code>1.4.8-3</code>,  </span></summary>
      

      ``1.4.8-11``,  ``1.4.8-10``,  ``1.4.8-9``,  ``1.4.8-8``,  ``1.4.8-7``,  ``1.4.8-6``,  ``1.4.8-5``,  ``1.4.8-4``,  ``1.4.8-3``,  ``1.4.8-2``,  ``1.4.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
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

      mamba install bioconductor-illuminahumanmethylation27k.db

   and update with::

      mamba update bioconductor-illuminahumanmethylation27k.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-illuminahumanmethylation27k.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanmethylation27k.db:<tag>

   (see `bioconductor-illuminahumanmethylation27k.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanmethylation27k.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanmethylation27k.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanmethylation27k.db
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanmethylation27k.db| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation27k.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation27k.db
.. _`bioconductor-illuminahumanmethylation27k.db/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation27k.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminahumanmethylation27k.db";
        var versions = ["1.4.8","1.4.8","1.4.8","1.4.8","1.4.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation27k.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation27k.db/README.html