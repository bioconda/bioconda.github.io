:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dropkick'
.. highlight: bash

dropkick
========

.. conda:recipe:: dropkick
   :replaces_section_title:
   :noindex:

   Automated scRNA\-seq filtering

   :homepage: https://github.com/KenLauLab/dropkick
   :license: MIT / MIT
   :recipe: /`dropkick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dropkick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dropkick/meta.yaml>`_

   


.. conda:package:: dropkick

   |downloads_dropkick| |docker_dropkick|

   :versions:
      
      

      ``1.2.8-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.3.0``
   :depends matplotlib-base: ``>=3.0.3``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scanpy: 
   :depends scikit-image: 
   :depends scikit-learn: ``>=0.18.0``
   :depends scipy: ``>=0.14.1``
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

      mamba install dropkick

   and update with::

      mamba update dropkick

  To create a new environment, run::

      mamba create --name myenvname dropkick

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dropkick:<tag>

   (see `dropkick/tags`_ for valid values for ``<tag>``)


.. |downloads_dropkick| image:: https://img.shields.io/conda/dn/bioconda/dropkick.svg?style=flat
   :target: https://anaconda.org/bioconda/dropkick
   :alt:   (downloads)
.. |docker_dropkick| image:: https://quay.io/repository/biocontainers/dropkick/status
   :target: https://quay.io/repository/biocontainers/dropkick
.. _`dropkick/tags`: https://quay.io/repository/biocontainers/dropkick?tab=tags


.. raw:: html

    <script>
        var package = "dropkick";
        var versions = ["1.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dropkick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dropkick/README.html