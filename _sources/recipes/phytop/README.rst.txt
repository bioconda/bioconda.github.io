:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phytop'
.. highlight: bash

phytop
======

.. conda:recipe:: phytop
   :replaces_section_title:
   :noindex:

   Phytop\: A tool for visualizing and recognizing signals of incomplete lineage sorting and hybridization using species trees output from ASTRAL

   :homepage: https://github.com/zhangrengang/phytop/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`phytop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phytop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phytop/meta.yaml>`_

   


.. conda:package:: phytop

   |downloads_phytop| |docker_phytop|

   :versions:
      
      

      ``0.3-0``

      

   
   :depends biopython: 
   :depends ete3: 
   :depends lazy-property: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends python: ``>=3.8``
   :depends scipy: 
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

      mamba install phytop

   and update with::

      mamba update phytop

  To create a new environment, run::

      mamba create --name myenvname phytop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phytop:<tag>

   (see `phytop/tags`_ for valid values for ``<tag>``)


.. |downloads_phytop| image:: https://img.shields.io/conda/dn/bioconda/phytop.svg?style=flat
   :target: https://anaconda.org/bioconda/phytop
   :alt:   (downloads)
.. |docker_phytop| image:: https://quay.io/repository/biocontainers/phytop/status
   :target: https://quay.io/repository/biocontainers/phytop
.. _`phytop/tags`: https://quay.io/repository/biocontainers/phytop?tab=tags


.. raw:: html

    <script>
        var package = "phytop";
        var versions = ["0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phytop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phytop/README.html