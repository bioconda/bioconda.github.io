:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longcallr_nn'
.. highlight: bash

longcallr_nn
============

.. conda:recipe:: longcallr_nn
   :replaces_section_title:
   :noindex:

   longcallR\_nn is a variant caller specifically designed for long\-read RNA\-seq data utilizing a ResNet model.

   :homepage: https://github.com/huangnengCSU/longcallR-nn
   :license: MIT / MIT
   :recipe: /`longcallr_nn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longcallr_nn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longcallr_nn/meta.yaml>`_

   


.. conda:package:: longcallr_nn

   |downloads_longcallr_nn| |docker_longcallr_nn|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends numpy: ``>=1.21.0``
   :depends pysam: ``>=0.16``
   :depends python: ``>=3.9,<3.11``
   :depends pytorch: ``>=1.13``
   :depends pyyaml: ``>=5.3``
   :depends requests: 
   :depends tensorboardx: ``>=2.2``
   :depends torchmetrics: ``>=0.9``
   :depends torchvision: ``>=0.14``
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

      mamba install longcallr_nn

   and update with::

      mamba update longcallr_nn

  To create a new environment, run::

      mamba create --name myenvname longcallr_nn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longcallr_nn:<tag>

   (see `longcallr_nn/tags`_ for valid values for ``<tag>``)


.. |downloads_longcallr_nn| image:: https://img.shields.io/conda/dn/bioconda/longcallr_nn.svg?style=flat
   :target: https://anaconda.org/bioconda/longcallr_nn
   :alt:   (downloads)
.. |docker_longcallr_nn| image:: https://quay.io/repository/biocontainers/longcallr_nn/status
   :target: https://quay.io/repository/biocontainers/longcallr_nn
.. _`longcallr_nn/tags`: https://quay.io/repository/biocontainers/longcallr_nn?tab=tags


.. raw:: html

    <script>
        var package = "longcallr_nn";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longcallr_nn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longcallr_nn/README.html