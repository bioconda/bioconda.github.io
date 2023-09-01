:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dca'
.. highlight: bash

dca
===

.. conda:recipe:: dca
   :replaces_section_title:
   :noindex:

   Count autoencoder for scRNA\-seq denoising

   :homepage: https://github.com/theislab/dca
   :license: APACHE / Apache Software
   :recipe: /`dca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dca/meta.yaml>`_
   :links: doi: :doi:`10.1101/300681`

   


.. conda:package:: dca

   |downloads_dca| |docker_dca|

   :versions:
      
      

      ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends h5py: 
   :depends keras: ``>=2.0.8``
   :depends kopt: 
   :depends numpy: ``>=1.7``
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scanpy: 
   :depends scikit-learn: 
   :depends six: ``>=1.10.0``
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

      mamba install dca

   and update with::

      mamba update dca

  To create a new environment, run::

      mamba create --name myenvname dca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dca:<tag>

   (see `dca/tags`_ for valid values for ``<tag>``)


.. |downloads_dca| image:: https://img.shields.io/conda/dn/bioconda/dca.svg?style=flat
   :target: https://anaconda.org/bioconda/dca
   :alt:   (downloads)
.. |docker_dca| image:: https://quay.io/repository/biocontainers/dca/status
   :target: https://quay.io/repository/biocontainers/dca
.. _`dca/tags`: https://quay.io/repository/biocontainers/dca?tab=tags


.. raw:: html

    <script>
        var package = "dca";
        var versions = ["0.3.4","0.3.3","0.3.2","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dca/README.html