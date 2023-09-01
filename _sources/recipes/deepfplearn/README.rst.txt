:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepfplearn'
.. highlight: bash

deepfplearn
===========

.. conda:recipe:: deepfplearn
   :replaces_section_title:
   :noindex:

   Link molecular structures of chemicals \(in form of topological fingerprints\) with multiple targets.

   :homepage: https://github.com/yigbt/deepFPlearn
   :license: GPL
   :recipe: /`deepfplearn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepfplearn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepfplearn/meta.yaml>`_

   


.. conda:package:: deepfplearn

   |downloads_deepfplearn| |docker_deepfplearn|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends jsonpickle: ``2.1.*``
   :depends keras: ``2.9.*``
   :depends matplotlib-base: ``3.5.*``
   :depends numpy: ``1.22.*``
   :depends pandas: ``1.4.*``
   :depends python: 
   :depends rdkit: ``2022.03.*``
   :depends scikit-learn: ``1.0.*``
   :depends tensorflow-base: 
   :depends wandb: ``0.12.*``
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

      mamba install deepfplearn

   and update with::

      mamba update deepfplearn

  To create a new environment, run::

      mamba create --name myenvname deepfplearn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepfplearn:<tag>

   (see `deepfplearn/tags`_ for valid values for ``<tag>``)


.. |downloads_deepfplearn| image:: https://img.shields.io/conda/dn/bioconda/deepfplearn.svg?style=flat
   :target: https://anaconda.org/bioconda/deepfplearn
   :alt:   (downloads)
.. |docker_deepfplearn| image:: https://quay.io/repository/biocontainers/deepfplearn/status
   :target: https://quay.io/repository/biocontainers/deepfplearn
.. _`deepfplearn/tags`: https://quay.io/repository/biocontainers/deepfplearn?tab=tags


.. raw:: html

    <script>
        var package = "deepfplearn";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepfplearn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepfplearn/README.html