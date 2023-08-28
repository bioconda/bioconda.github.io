:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepmedic'
.. highlight: bash

deepmedic
=========

.. conda:recipe:: deepmedic
   :replaces_section_title:
   :noindex:

   Efficient Multi\-Scale 3D Convolutional Neural Network for Brain Lesion Segmentation.

   :homepage: https://github.com/Kamnitsask/deepmedic
   :license: BSD
   :recipe: /`deepmedic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmedic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmedic/meta.yaml>`_

   


.. conda:package:: deepmedic

   |downloads_deepmedic| |docker_deepmedic|

   :versions:
      
      

      ``0.6.1-1``,  ``0.6.1-0``,  ``0.6-0``,  ``0.5.4-0``

      

   
   :depends nibabel: 
   :depends numpy: 
   :depends pp: 
   :depends python: ``<3``
   :depends scipy: 
   :depends six: 
   :depends theano: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install deepmedic

   and update with::

      mamba update deepmedic

  To create a new environment, run::

      mamba create --name myenvname deepmedic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepmedic:<tag>

   (see `deepmedic/tags`_ for valid values for ``<tag>``)


.. |downloads_deepmedic| image:: https://img.shields.io/conda/dn/bioconda/deepmedic.svg?style=flat
   :target: https://anaconda.org/bioconda/deepmedic
   :alt:   (downloads)
.. |docker_deepmedic| image:: https://quay.io/repository/biocontainers/deepmedic/status
   :target: https://quay.io/repository/biocontainers/deepmedic
.. _`deepmedic/tags`: https://quay.io/repository/biocontainers/deepmedic?tab=tags


.. raw:: html

    <script>
        var package = "deepmedic";
        var versions = ["0.6.1","0.6.1","0.6","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepmedic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepmedic/README.html