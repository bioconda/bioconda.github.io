:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seacells'
.. highlight: bash

seacells
========

.. conda:recipe:: seacells
   :replaces_section_title:
   :noindex:

   SEACells algorithm for Inference of transcriptional and epigenomic cellular states from single\-cell genomics data.

   :homepage: https://github.com/dpeerlab/SEACells
   :license: GPL / GPL-2.0-or-later
   :recipe: /`seacells <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seacells>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seacells/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-01716-9`

   


.. conda:package:: seacells

   |downloads_seacells| |docker_seacells|

   :versions:
      
      

      ``0.3.3-0``

      

   
   :depends anndata: 
   :depends numba: ``>=0.51.2``
   :depends numpy: 
   :depends palantir: 
   :depends pandas: 
   :depends pyranges: 
   :depends python: ``>=3.8``
   :depends scanpy: ``>1.8``
   :depends scipy: ``>=1.5``
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

      mamba install seacells

   and update with::

      mamba update seacells

  To create a new environment, run::

      mamba create --name myenvname seacells

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seacells:<tag>

   (see `seacells/tags`_ for valid values for ``<tag>``)


.. |downloads_seacells| image:: https://img.shields.io/conda/dn/bioconda/seacells.svg?style=flat
   :target: https://anaconda.org/bioconda/seacells
   :alt:   (downloads)
.. |docker_seacells| image:: https://quay.io/repository/biocontainers/seacells/status
   :target: https://quay.io/repository/biocontainers/seacells
.. _`seacells/tags`: https://quay.io/repository/biocontainers/seacells?tab=tags


.. raw:: html

    <script>
        var package = "seacells";
        var versions = ["0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seacells/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seacells/README.html