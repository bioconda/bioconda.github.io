:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gsea'
.. highlight: bash

gsea
====

.. conda:recipe:: gsea
   :replaces_section_title:
   :noindex:

   Gene Set Enrichment Analysis \(GSEA\)

   :homepage: https://www.gsea-msigdb.org/gsea
   :license: BSD / BSD-3-Clause
   :recipe: /`gsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsea/meta.yaml>`_

   


.. conda:package:: gsea

   |downloads_gsea| |docker_gsea|

   :versions:
      
      

      ``4.3.2-0``

      

   
   :depends openjdk: 
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

      mamba install gsea

   and update with::

      mamba update gsea

  To create a new environment, run::

      mamba create --name myenvname gsea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gsea:<tag>

   (see `gsea/tags`_ for valid values for ``<tag>``)


.. |downloads_gsea| image:: https://img.shields.io/conda/dn/bioconda/gsea.svg?style=flat
   :target: https://anaconda.org/bioconda/gsea
   :alt:   (downloads)
.. |docker_gsea| image:: https://quay.io/repository/biocontainers/gsea/status
   :target: https://quay.io/repository/biocontainers/gsea
.. _`gsea/tags`: https://quay.io/repository/biocontainers/gsea?tab=tags


.. raw:: html

    <script>
        var package = "gsea";
        var versions = ["4.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gsea/README.html