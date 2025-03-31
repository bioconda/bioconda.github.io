:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soi'
.. highlight: bash

soi
===

.. conda:recipe:: soi
   :replaces_section_title:
   :noindex:

   Orthology Index \(OrthoIndex or OI\) determines the orthology of a syntenic block.

   :homepage: https://github.com/zhangrengang/SOI/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`soi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soi/meta.yaml>`_

   


.. conda:package:: soi

   |downloads_soi| |docker_soi|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends biopython: 
   :depends drmaa: 
   :depends iqtree: 
   :depends lazy-property: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends newick_utils: 
   :depends pal2nal: 
   :depends psutil: 
   :depends python: 
   :depends trimal: 
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

      mamba install soi

   and update with::

      mamba update soi

  To create a new environment, run::

      mamba create --name myenvname soi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/soi:<tag>

   (see `soi/tags`_ for valid values for ``<tag>``)


.. |downloads_soi| image:: https://img.shields.io/conda/dn/bioconda/soi.svg?style=flat
   :target: https://anaconda.org/bioconda/soi
   :alt:   (downloads)
.. |docker_soi| image:: https://quay.io/repository/biocontainers/soi/status
   :target: https://quay.io/repository/biocontainers/soi
.. _`soi/tags`: https://quay.io/repository/biocontainers/soi?tab=tags


.. raw:: html

    <script>
        var package = "soi";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soi/README.html