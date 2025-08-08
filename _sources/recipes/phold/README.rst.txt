:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phold'
.. highlight: bash

phold
=====

.. conda:recipe:: phold
   :replaces_section_title:
   :noindex:

   Phage annotation using protein structures

   :homepage: https://github.com/gbouras13/phold
   :documentation: https://phold.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`phold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phold/meta.yaml>`_

   


.. conda:package:: phold

   |downloads_phold| |docker_phold|

   :versions:
      
      

      ``1.0.0-0``,  ``0.2.0-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends alive-progress: ``>=3.0.1``
   :depends biopython: ``>=1.76``
   :depends click: ``>=8.0.0``
   :depends datasets: ``>=2.15``
   :depends foldseek: ``10.941cd33``
   :depends h5py: ``>=3.5``
   :depends loguru: ``>=0.5.3``
   :depends numpy: ``>=1.20``
   :depends pandas: ``>=1.4.2``
   :depends pyarrow: ``>=14.0.0``
   :depends pycirclize: ``>=0.3.1``
   :depends pyrodigal-gv: ``>=0.3.1``
   :depends python: ``>=3.8,<4``
   :depends pytorch: ``>=2.1.2``
   :depends pyyaml: ``>=6.0``
   :depends requests: ``>=2.25``
   :depends sentencepiece: ``>=0.1.99``
   :depends transformers: ``>=4.34``
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

      mamba install phold

   and update with::

      mamba update phold

  To create a new environment, run::

      mamba create --name myenvname phold

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phold:<tag>

   (see `phold/tags`_ for valid values for ``<tag>``)


.. |downloads_phold| image:: https://img.shields.io/conda/dn/bioconda/phold.svg?style=flat
   :target: https://anaconda.org/bioconda/phold
   :alt:   (downloads)
.. |docker_phold| image:: https://quay.io/repository/biocontainers/phold/status
   :target: https://quay.io/repository/biocontainers/phold
.. _`phold/tags`: https://quay.io/repository/biocontainers/phold?tab=tags


.. raw:: html

    <script>
        var package = "phold";
        var versions = ["1.0.0","0.2.0","0.1.4","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phold/README.html