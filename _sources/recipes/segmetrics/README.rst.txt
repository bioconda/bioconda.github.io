:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segmetrics'
.. highlight: bash

segmetrics
==========

.. conda:recipe:: segmetrics
   :replaces_section_title:
   :noindex:

   A Python package implementing image segmentation and object detection performance measures\, for biomedical image analysis and beyond.

   :homepage: https://github.com/BMCV/segmetrics.py
   :documentation: https://segmetrics.readthedocs.io
   
   :license: MIT
   :recipe: /`segmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segmetrics/meta.yaml>`_

   


.. conda:package:: segmetrics

   |downloads_segmetrics| |docker_segmetrics|

   :versions:
      
      

      ``1.4-0``,  ``1.3-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``,  ``0.11.3-0``

      

   
   :depends dill: 
   :depends numpy: ``>=1.18``
   :depends python: ``>=3.6,<3.11``
   :depends scikit-image: ``>=0.18``
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install segmetrics

   and update with::

      mamba update segmetrics

  To create a new environment, run::

      mamba create --name myenvname segmetrics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/segmetrics:<tag>

   (see `segmetrics/tags`_ for valid values for ``<tag>``)


.. |downloads_segmetrics| image:: https://img.shields.io/conda/dn/bioconda/segmetrics.svg?style=flat
   :target: https://anaconda.org/bioconda/segmetrics
   :alt:   (downloads)
.. |docker_segmetrics| image:: https://quay.io/repository/biocontainers/segmetrics/status
   :target: https://quay.io/repository/biocontainers/segmetrics
.. _`segmetrics/tags`: https://quay.io/repository/biocontainers/segmetrics?tab=tags


.. raw:: html

    <script>
        var package = "segmetrics";
        var versions = ["1.4","1.3","1.2.3","1.2.2","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segmetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segmetrics/README.html