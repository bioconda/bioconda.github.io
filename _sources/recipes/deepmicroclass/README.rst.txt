:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepmicroclass'
.. highlight: bash

deepmicroclass
==============

.. conda:recipe:: deepmicroclass
   :replaces_section_title:
   :noindex:

   DeepMicroClass\, a deep learning based contig prediction tool \(CPU version\)

   :homepage: https://github.com/chengsly/DeepMicroClass
   :license: BSD-2-Clause
   :recipe: /`deepmicroclass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmicroclass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmicroclass/meta.yaml>`_

   


.. conda:package:: deepmicroclass

   |downloads_deepmicroclass| |docker_deepmicroclass|

   :versions:
      
      

      ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends biopython: 
   :depends ete3: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends pytorch: 
   :depends pytorch-lightning: 
   :depends scikit-learn: 
   :depends tensorboard: 
   :depends torchmetrics: 
   :depends tqdm: 
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

      mamba install deepmicroclass

   and update with::

      mamba update deepmicroclass

  To create a new environment, run::

      mamba create --name myenvname deepmicroclass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepmicroclass:<tag>

   (see `deepmicroclass/tags`_ for valid values for ``<tag>``)


.. |downloads_deepmicroclass| image:: https://img.shields.io/conda/dn/bioconda/deepmicroclass.svg?style=flat
   :target: https://anaconda.org/bioconda/deepmicroclass
   :alt:   (downloads)
.. |docker_deepmicroclass| image:: https://quay.io/repository/biocontainers/deepmicroclass/status
   :target: https://quay.io/repository/biocontainers/deepmicroclass
.. _`deepmicroclass/tags`: https://quay.io/repository/biocontainers/deepmicroclass?tab=tags


.. raw:: html

    <script>
        var package = "deepmicroclass";
        var versions = ["1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepmicroclass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepmicroclass/README.html