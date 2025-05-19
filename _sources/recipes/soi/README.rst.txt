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
      
      

      ``1.2.3-0``,  ``1.2.0-0``

      

   
   :depends biopython: ``>=1.81``
   :depends blast: ``>=2.14.1``
   :depends diamond: ``>=2.1.8``
   :depends drmaa: 
   :depends entrez-direct: ``>=16.2``
   :depends iqtree: ``>=2.2.5``
   :depends lazy-property: ``>=0.0.1``
   :depends mafft: ``>=7.520``
   :depends matplotlib-base: 
   :depends mcl: ``>=22.282``
   :depends mmseqs2: ``>=14.7e284``
   :depends muscle: ``>=3.8.1551``
   :depends networkx: ``>=3.1``
   :depends newick_utils: 
   :depends orthofinder: ``>=2.5.5``
   :depends pal2nal: 
   :depends pp: ``>=1.6.4.4``
   :depends psutil: 
   :depends python: ``>=3``
   :depends raxml-ng: ``>=1.2.0``
   :depends trimal: 
   :depends xopen: ``>=1.1.0``
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
        var versions = ["1.2.3","1.2.0"];
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