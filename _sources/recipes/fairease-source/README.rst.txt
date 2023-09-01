:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fairease-source'
.. highlight: bash

fairease-source
===============

.. conda:recipe:: fairease-source
   :replaces_section_title:
   :noindex:

   SOURCE\: Sea Observations Utility for Reprocessing\, Calibration and Evaluation

   :homepage: https://github.com/fair-ease/Source
   :license: CC / CC-BY-NC-4.0
   :recipe: /`fairease-source <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fairease-source>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fairease-source/meta.yaml>`_

   


.. conda:package:: fairease-source

   |downloads_fairease-source| |docker_fairease-source|

   :versions:
      
      

      ``1.4.1-0``

      

   
   :depends netcdf4: 
   :depends numpy: 
   :depends pandas: 
   :depends pykml: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seawater: 
   :depends unidecode: 
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

      mamba install fairease-source

   and update with::

      mamba update fairease-source

  To create a new environment, run::

      mamba create --name myenvname fairease-source

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fairease-source:<tag>

   (see `fairease-source/tags`_ for valid values for ``<tag>``)


.. |downloads_fairease-source| image:: https://img.shields.io/conda/dn/bioconda/fairease-source.svg?style=flat
   :target: https://anaconda.org/bioconda/fairease-source
   :alt:   (downloads)
.. |docker_fairease-source| image:: https://quay.io/repository/biocontainers/fairease-source/status
   :target: https://quay.io/repository/biocontainers/fairease-source
.. _`fairease-source/tags`: https://quay.io/repository/biocontainers/fairease-source?tab=tags


.. raw:: html

    <script>
        var package = "fairease-source";
        var versions = ["1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fairease-source/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fairease-source/README.html