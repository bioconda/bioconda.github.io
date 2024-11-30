:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-remapenrich'
.. highlight: bash

r-remapenrich
=============

.. conda:recipe:: r-remapenrich
   :replaces_section_title:
   :noindex:

   Bioinformatics tools to compute statistical enrichment of geonomic regions for ReMap peaks

   :homepage: https://github.com/nigiord/ReMapEnrich
   :license: AGPL / AGPL-3
   :recipe: /`r-remapenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-remapenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-remapenrich/meta.yaml>`_

   


.. conda:package:: r-remapenrich

   |downloads_r-remapenrich| |docker_r-remapenrich|

   :versions:
      
      

      ``0.99.0-0``

      

   
   :depends bioconductor-genomicranges: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-r.utils: 
   :depends r-rmysql: 
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

      mamba install r-remapenrich

   and update with::

      mamba update r-remapenrich

  To create a new environment, run::

      mamba create --name myenvname r-remapenrich

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-remapenrich:<tag>

   (see `r-remapenrich/tags`_ for valid values for ``<tag>``)


.. |downloads_r-remapenrich| image:: https://img.shields.io/conda/dn/bioconda/r-remapenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/r-remapenrich
   :alt:   (downloads)
.. |docker_r-remapenrich| image:: https://quay.io/repository/biocontainers/r-remapenrich/status
   :target: https://quay.io/repository/biocontainers/r-remapenrich
.. _`r-remapenrich/tags`: https://quay.io/repository/biocontainers/r-remapenrich?tab=tags


.. raw:: html

    <script>
        var package = "r-remapenrich";
        var versions = ["0.99.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-remapenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-remapenrich/README.html