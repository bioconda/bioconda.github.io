:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drug2cell'
.. highlight: bash

drug2cell
=========

.. conda:recipe:: drug2cell
   :replaces_section_title:
   :noindex:

   This is a collection of utility functions for gene group activity evaluation in scanpy

   :homepage: https://github.com/teichlab/drug2cell/
   :license: non-commercial license
   :recipe: /`drug2cell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drug2cell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drug2cell/meta.yaml>`_

   


.. conda:package:: drug2cell

   |downloads_drug2cell| |docker_drug2cell|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends anndata: 
   :depends blitzgsea: 
   :depends numpy: 
   :depends pandas: ``>=1.5.3,<2.0``
   :depends python: ``>=3.10,<3.11``
   :depends scipy: 
   :depends statsmodels: 
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

      mamba install drug2cell

   and update with::

      mamba update drug2cell

  To create a new environment, run::

      mamba create --name myenvname drug2cell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/drug2cell:<tag>

   (see `drug2cell/tags`_ for valid values for ``<tag>``)


.. |downloads_drug2cell| image:: https://img.shields.io/conda/dn/bioconda/drug2cell.svg?style=flat
   :target: https://anaconda.org/bioconda/drug2cell
   :alt:   (downloads)
.. |docker_drug2cell| image:: https://quay.io/repository/biocontainers/drug2cell/status
   :target: https://quay.io/repository/biocontainers/drug2cell
.. _`drug2cell/tags`: https://quay.io/repository/biocontainers/drug2cell?tab=tags


.. raw:: html

    <script>
        var package = "drug2cell";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drug2cell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drug2cell/README.html