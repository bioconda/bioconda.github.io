:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'echidna'
.. highlight: bash

echidna
=======

.. conda:recipe:: echidna
   :replaces_section_title:
   :noindex:

   Mapping genotype to phenotype through joint probabilistic modeling of single\-cell gene expression and chromosomal copy number variation.

   :homepage: https://github.com/azizilab/echidna
   :license: MIT
   :recipe: /`echidna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/echidna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/echidna/meta.yaml>`_
   :links: biotools: :biotools:`echidna`

   


.. conda:package:: echidna

   |downloads_echidna| |docker_echidna|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends graphviz: 
   :depends hmmlearn: 
   :depends leidenalg: 
   :depends pandas: 
   :depends pyro-ppl: ``>=1.9.1``
   :depends python: ``>=3.10``
   :depends requests: 
   :depends scanpy: ``>=1.10``
   :depends scikit-learn: 
   :depends seaborn: 
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

      mamba install echidna

   and update with::

      mamba update echidna

  To create a new environment, run::

      mamba create --name myenvname echidna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/echidna:<tag>

   (see `echidna/tags`_ for valid values for ``<tag>``)


.. |downloads_echidna| image:: https://img.shields.io/conda/dn/bioconda/echidna.svg?style=flat
   :target: https://anaconda.org/bioconda/echidna
   :alt:   (downloads)
.. |docker_echidna| image:: https://quay.io/repository/biocontainers/echidna/status
   :target: https://quay.io/repository/biocontainers/echidna
.. _`echidna/tags`: https://quay.io/repository/biocontainers/echidna?tab=tags


.. raw:: html

    <script>
        var package = "echidna";
        var versions = ["1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/echidna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/echidna/README.html