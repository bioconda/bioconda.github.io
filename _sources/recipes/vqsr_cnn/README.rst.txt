:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vqsr_cnn'
.. highlight: bash

vqsr_cnn
========

.. conda:recipe:: vqsr_cnn
   :replaces_section_title:
   :noindex:

   Variant quality score recalibration with Convolutional Neural Networks

   :homepage: https://broadinstitute.org/
   :license: MIT
   :recipe: /`vqsr_cnn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vqsr_cnn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vqsr_cnn/meta.yaml>`_

   


.. conda:package:: vqsr_cnn

   |downloads_vqsr_cnn| |docker_vqsr_cnn|

   :versions:
      
      

      ``0.0.194-0``,  ``0.0.132-1``,  ``0.0.132-0``

      

   
   :depends biopython: ``>=1.70``
   :depends gatktool: 
   :depends keras: ``>=2.0``
   :depends matplotlib: ``>=2.1.2``
   :depends numpy: ``>=1.13.1``
   :depends pysam: ``>=0.13``
   :depends python: 
   :depends pyvcf: ``>=0.6.8``
   :depends scikit-learn: ``>=0.19.1``
   :depends scipy: ``>=0.19.1``
   :depends tensorflow: 
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

      mamba install vqsr_cnn

   and update with::

      mamba update vqsr_cnn

  To create a new environment, run::

      mamba create --name myenvname vqsr_cnn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vqsr_cnn:<tag>

   (see `vqsr_cnn/tags`_ for valid values for ``<tag>``)


.. |downloads_vqsr_cnn| image:: https://img.shields.io/conda/dn/bioconda/vqsr_cnn.svg?style=flat
   :target: https://anaconda.org/bioconda/vqsr_cnn
   :alt:   (downloads)
.. |docker_vqsr_cnn| image:: https://quay.io/repository/biocontainers/vqsr_cnn/status
   :target: https://quay.io/repository/biocontainers/vqsr_cnn
.. _`vqsr_cnn/tags`: https://quay.io/repository/biocontainers/vqsr_cnn?tab=tags


.. raw:: html

    <script>
        var package = "vqsr_cnn";
        var versions = ["0.0.194","0.0.132","0.0.132"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vqsr_cnn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vqsr_cnn/README.html