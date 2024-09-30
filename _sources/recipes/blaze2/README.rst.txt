:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blaze2'
.. highlight: bash

blaze2
======

.. conda:recipe:: blaze2
   :replaces_section_title:
   :noindex:

   Barcode identification from \(Nanopore\) Long reads for AnalyZing single\-cell gene Expression.

   :homepage: https://github.com/shimlab/BLAZE
   :documentation: https://github.com/shimlab/BLAZE/blob/v2.5.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`blaze2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blaze2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blaze2/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-023-02907-y`

   


.. conda:package:: blaze2

   |downloads_blaze2| |docker_blaze2|

   :versions:
      
      

      ``2.5.0-0``,  ``2.4.0-0``,  ``2.2.1-0``

      

   
   :depends fast-edit-distance: ``1.2.1``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install blaze2

   and update with::

      mamba update blaze2

  To create a new environment, run::

      mamba create --name myenvname blaze2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blaze2:<tag>

   (see `blaze2/tags`_ for valid values for ``<tag>``)


.. |downloads_blaze2| image:: https://img.shields.io/conda/dn/bioconda/blaze2.svg?style=flat
   :target: https://anaconda.org/bioconda/blaze2
   :alt:   (downloads)
.. |docker_blaze2| image:: https://quay.io/repository/biocontainers/blaze2/status
   :target: https://quay.io/repository/biocontainers/blaze2
.. _`blaze2/tags`: https://quay.io/repository/biocontainers/blaze2?tab=tags


.. raw:: html

    <script>
        var package = "blaze2";
        var versions = ["2.5.0","2.4.0","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blaze2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blaze2/README.html