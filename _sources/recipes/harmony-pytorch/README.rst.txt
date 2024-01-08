:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harmony-pytorch'
.. highlight: bash

harmony-pytorch
===============

.. conda:recipe:: harmony-pytorch
   :replaces_section_title:
   :noindex:

   This is a Pytorch implementation of Harmony algorithm on single\-cell sequencing data integration.

   :homepage: https://github.com/lilab-bcb/harmony-pytorch
   :license: BSD / BSD-3-Clause
   :recipe: /`harmony-pytorch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harmony-pytorch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harmony-pytorch/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-019-0619-0`

   


.. conda:package:: harmony-pytorch

   |downloads_harmony-pytorch| |docker_harmony-pytorch|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends psutil: 
   :depends python: ``>=3.7``
   :depends pytorch: 
   :depends scikit-learn: ``>=0.23``
   :depends threadpoolctl: 
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

      mamba install harmony-pytorch

   and update with::

      mamba update harmony-pytorch

  To create a new environment, run::

      mamba create --name myenvname harmony-pytorch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/harmony-pytorch:<tag>

   (see `harmony-pytorch/tags`_ for valid values for ``<tag>``)


.. |downloads_harmony-pytorch| image:: https://img.shields.io/conda/dn/bioconda/harmony-pytorch.svg?style=flat
   :target: https://anaconda.org/bioconda/harmony-pytorch
   :alt:   (downloads)
.. |docker_harmony-pytorch| image:: https://quay.io/repository/biocontainers/harmony-pytorch/status
   :target: https://quay.io/repository/biocontainers/harmony-pytorch
.. _`harmony-pytorch/tags`: https://quay.io/repository/biocontainers/harmony-pytorch?tab=tags


.. raw:: html

    <script>
        var package = "harmony-pytorch";
        var versions = ["0.1.8","0.1.7","0.1.7","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harmony-pytorch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harmony-pytorch/README.html