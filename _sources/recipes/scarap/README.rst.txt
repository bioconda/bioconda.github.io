:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scarap'
.. highlight: bash

scarap
======

.. conda:recipe:: scarap
   :replaces_section_title:
   :noindex:

   A toolkit for prokaryotic comparative genomics

   :homepage: https://pypi.org/project/scarap
   :developer docs: https://github.com/swittouck/scarap
   :license: GPL-3.0-or-later
   :recipe: /`scarap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scarap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scarap/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btae735`

   


.. conda:package:: scarap

   |downloads_scarap| |docker_scarap|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends biopython: ``>=1.67``
   :depends ete3: ``>=3.1.1``
   :depends iqtree: 
   :depends mafft: 
   :depends mmseqs2: 
   :depends numpy: ``>=1.16.5``
   :depends pandas: 
   :depends python: ``>=3.6.7,<=3.11``
   :depends scipy: ``>=1.4.1``
   :depends wheel: 
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

      mamba install scarap

   and update with::

      mamba update scarap

  To create a new environment, run::

      mamba create --name myenvname scarap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scarap:<tag>

   (see `scarap/tags`_ for valid values for ``<tag>``)


.. |downloads_scarap| image:: https://img.shields.io/conda/dn/bioconda/scarap.svg?style=flat
   :target: https://anaconda.org/bioconda/scarap
   :alt:   (downloads)
.. |docker_scarap| image:: https://quay.io/repository/biocontainers/scarap/status
   :target: https://quay.io/repository/biocontainers/scarap
.. _`scarap/tags`: https://quay.io/repository/biocontainers/scarap?tab=tags


.. raw:: html

    <script>
        var package = "scarap";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scarap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scarap/README.html