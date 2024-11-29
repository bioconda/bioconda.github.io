:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytximport'
.. highlight: bash

pytximport
==========

.. conda:recipe:: pytximport
   :replaces_section_title:
   :noindex:

   pytximport \- gene count estimation from transcript\-level quantification

   :homepage: https://pytximport.readthedocs.io/en/stable/start.html
   :documentation: https://pytximport.readthedocs.io
   
   :developer docs: https://github.com/complextissue/pytximport
   :license: GPL / GPL-3.0-only
   :recipe: /`pytximport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytximport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytximport/meta.yaml>`_

   pytximport is a Python port of tximport that allows users to import transcript counts from tools such as kallisto and Salmon\, correct them for differential isoform usage\, and summarize them at the gene level.



.. conda:package:: pytximport

   |downloads_pytximport| |docker_pytximport|

   :versions:
      
      

      ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``

      

   
   :depends anndata: ``>=0.8.0``
   :depends click: ``>=8.1.7``
   :depends click-default-group: ``>=1.2.0``
   :depends flox: ``>=0.9.8``
   :depends h5py: ``>=3.11.0``
   :depends numpy: ``>=1.23.0``
   :depends pandas: ``>=1.4.0``
   :depends pybiomart: ``>=0.2.0``
   :depends python: ``>=3.9``
   :depends tqdm: ``>=4.66.4``
   :depends xarray: ``>=2024.6.0``
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

      mamba install pytximport

   and update with::

      mamba update pytximport

  To create a new environment, run::

      mamba create --name myenvname pytximport

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pytximport:<tag>

   (see `pytximport/tags`_ for valid values for ``<tag>``)


.. |downloads_pytximport| image:: https://img.shields.io/conda/dn/bioconda/pytximport.svg?style=flat
   :target: https://anaconda.org/bioconda/pytximport
   :alt:   (downloads)
.. |docker_pytximport| image:: https://quay.io/repository/biocontainers/pytximport/status
   :target: https://quay.io/repository/biocontainers/pytximport
.. _`pytximport/tags`: https://quay.io/repository/biocontainers/pytximport?tab=tags


.. raw:: html

    <script>
        var package = "pytximport";
        var versions = ["0.11.0","0.10.0","0.9.0","0.8.0","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytximport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytximport/README.html