:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'negative_training_sampler'
.. highlight: bash

negative_training_sampler
=========================

.. conda:recipe:: negative_training_sampler
   :replaces_section_title:
   :noindex:

   Generates negative samples with the same GC distribution as the positive samples per chromosome.

   :homepage: https://github.com/kircherlab/negative_training_sampler
   :license: MIT
   :recipe: /`negative_training_sampler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/negative_training_sampler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/negative_training_sampler/meta.yaml>`_

   


.. conda:package:: negative_training_sampler

   |downloads_negative_training_sampler| |docker_negative_training_sampler|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends bedtools: 
   :depends click: 
   :depends dask: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.6``
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

      mamba install negative_training_sampler

   and update with::

      mamba update negative_training_sampler

  To create a new environment, run::

      mamba create --name myenvname negative_training_sampler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/negative_training_sampler:<tag>

   (see `negative_training_sampler/tags`_ for valid values for ``<tag>``)


.. |downloads_negative_training_sampler| image:: https://img.shields.io/conda/dn/bioconda/negative_training_sampler.svg?style=flat
   :target: https://anaconda.org/bioconda/negative_training_sampler
   :alt:   (downloads)
.. |docker_negative_training_sampler| image:: https://quay.io/repository/biocontainers/negative_training_sampler/status
   :target: https://quay.io/repository/biocontainers/negative_training_sampler
.. _`negative_training_sampler/tags`: https://quay.io/repository/biocontainers/negative_training_sampler?tab=tags


.. raw:: html

    <script>
        var package = "negative_training_sampler";
        var versions = ["0.3.1","0.3.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/negative_training_sampler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/negative_training_sampler/README.html