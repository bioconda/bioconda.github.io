:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepmicro'
.. highlight: bash

deepmicro
=========

.. conda:recipe:: deepmicro
   :replaces_section_title:
   :noindex:

   Deep representation learning framework

   :homepage: https://github.com/paulzierep/DeepMicro
   :license: MIT
   :recipe: /`deepmicro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmicro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmicro/meta.yaml>`_

   


.. conda:package:: deepmicro

   |downloads_deepmicro| |docker_deepmicro|

   :versions:
      
      

      ``1.4-1``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``

      

   
   :depends h5py: 
   :depends keras: ``>=2.3.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends psutil: 
   :depends python: ``3.10.*``
   :depends scikit-learn: 
   :depends scipy: 
   :depends tensorflow: ``>=2.11.0``
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

      mamba install deepmicro

   and update with::

      mamba update deepmicro

  To create a new environment, run::

      mamba create --name myenvname deepmicro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepmicro:<tag>

   (see `deepmicro/tags`_ for valid values for ``<tag>``)


.. |downloads_deepmicro| image:: https://img.shields.io/conda/dn/bioconda/deepmicro.svg?style=flat
   :target: https://anaconda.org/bioconda/deepmicro
   :alt:   (downloads)
.. |docker_deepmicro| image:: https://quay.io/repository/biocontainers/deepmicro/status
   :target: https://quay.io/repository/biocontainers/deepmicro
.. _`deepmicro/tags`: https://quay.io/repository/biocontainers/deepmicro?tab=tags


.. raw:: html

    <script>
        var package = "deepmicro";
        var versions = ["1.4","1.4","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepmicro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepmicro/README.html