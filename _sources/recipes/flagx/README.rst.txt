:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flagx'
.. highlight: bash

flagx
=====

.. conda:recipe:: flagx
   :replaces_section_title:
   :noindex:

   FLAG\-X\: FLow cytometry Automated Gating toolboX

   :homepage: https://github.com/bionetslab/FLAG-X
   :license: GPL-3.0-only
   :recipe: /`flagx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flagx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flagx/meta.yaml>`_

   


.. conda:package:: flagx

   |downloads_flagx| |docker_flagx|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends click: 
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.10,<3.14``
   :depends pytometry: 
   :depends pyyaml: 
   :depends scanpy: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends somoclu: 
   :depends typing_extensions: 
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

      mamba install flagx

   and update with::

      mamba update flagx

  To create a new environment, run::

      mamba create --name myenvname flagx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flagx:<tag>

   (see `flagx/tags`_ for valid values for ``<tag>``)


.. |downloads_flagx| image:: https://img.shields.io/conda/dn/bioconda/flagx.svg?style=flat
   :target: https://anaconda.org/bioconda/flagx
   :alt:   (downloads)
.. |docker_flagx| image:: https://quay.io/repository/biocontainers/flagx/status
   :target: https://quay.io/repository/biocontainers/flagx
.. _`flagx/tags`: https://quay.io/repository/biocontainers/flagx?tab=tags


.. raw:: html

    <script>
        var package = "flagx";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flagx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flagx/README.html