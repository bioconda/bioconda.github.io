:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sam2lca'
.. highlight: bash

sam2lca
=======

.. conda:recipe:: sam2lca
   :replaces_section_title:
   :noindex:

   Lowest Common Ancestor on SAM\/BAM\/CRAM alignment files

   :homepage: https://github.com/maxibor/sam2lca
   :license: GPL-3.0
   :recipe: /`sam2lca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam2lca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sam2lca/meta.yaml>`_

   


.. conda:package:: sam2lca

   |downloads_sam2lca| |docker_sam2lca|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends click: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends python-rocksdb: 
   :depends scipy: 
   :depends taxopy: ``>=0.10.2``
   :depends tqdm: 
   :depends xopen: 
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

      mamba install sam2lca

   and update with::

      mamba update sam2lca

  To create a new environment, run::

      mamba create --name myenvname sam2lca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sam2lca:<tag>

   (see `sam2lca/tags`_ for valid values for ``<tag>``)


.. |downloads_sam2lca| image:: https://img.shields.io/conda/dn/bioconda/sam2lca.svg?style=flat
   :target: https://anaconda.org/bioconda/sam2lca
   :alt:   (downloads)
.. |docker_sam2lca| image:: https://quay.io/repository/biocontainers/sam2lca/status
   :target: https://quay.io/repository/biocontainers/sam2lca
.. _`sam2lca/tags`: https://quay.io/repository/biocontainers/sam2lca?tab=tags


.. raw:: html

    <script>
        var package = "sam2lca";
        var versions = ["1.1.4","1.1.3","1.1.2","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sam2lca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sam2lca/README.html