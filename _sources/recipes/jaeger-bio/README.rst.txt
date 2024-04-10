:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jaeger-bio'
.. highlight: bash

jaeger-bio
==========

.. conda:recipe:: jaeger-bio
   :replaces_section_title:
   :noindex:

   A quick and precise pipeline for detecting phages in sequence assemblies.

   :homepage: https://github.com/Yasas1994/Jaeger
   :documentation: https://readthedocs.org/projects/jaeger-docs/
   
   :license: MIT / MIT
   :recipe: /`jaeger-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jaeger-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jaeger-bio/meta.yaml>`_
   :links: biotools: :biotools:`jaeger`

   


.. conda:package:: jaeger-bio

   |downloads_jaeger-bio| |docker_jaeger-bio|

   :versions:
      
      

      ``1.1.26-0``

      

   
   :depends biopython: ``>=1.78``
   :depends h5py: ``>=3.8``
   :depends kneed: ``>=0.8.5``
   :depends matplotlib-base: ``>=3.7``
   :depends numpy: ``>=1.24``
   :depends pandas: ``>=1.5``
   :depends parasail-python: ``>=1.3.4``
   :depends pip: 
   :depends psutil: ``>=5``
   :depends python: ``3.*``
   :depends ruptures: ``>=1.1.9``
   :depends scikit-learn: ``1.3.2``
   :depends seaborn: ``>=0.12.2``
   :depends tensorflow: ``>=2.15,<2.16``
   :depends tqdm: ``>=4.64.0``
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

      mamba install jaeger-bio

   and update with::

      mamba update jaeger-bio

  To create a new environment, run::

      mamba create --name myenvname jaeger-bio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jaeger-bio:<tag>

   (see `jaeger-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_jaeger-bio| image:: https://img.shields.io/conda/dn/bioconda/jaeger-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/jaeger-bio
   :alt:   (downloads)
.. |docker_jaeger-bio| image:: https://quay.io/repository/biocontainers/jaeger-bio/status
   :target: https://quay.io/repository/biocontainers/jaeger-bio
.. _`jaeger-bio/tags`: https://quay.io/repository/biocontainers/jaeger-bio?tab=tags


.. raw:: html

    <script>
        var package = "jaeger-bio";
        var versions = ["1.1.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jaeger-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jaeger-bio/README.html