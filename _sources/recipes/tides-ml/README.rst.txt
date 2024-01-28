:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tides-ml'
.. highlight: bash

tides-ml
========

.. conda:recipe:: tides-ml
   :replaces_section_title:
   :noindex:

   Tool for ORF\-calling and ORF\-classification using ML approaches

   :homepage: https://github.com/xxmalcala/TIdeS
   :license: MIT
   :recipe: /`tides-ml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tides-ml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tides-ml/meta.yaml>`_

   


.. conda:package:: tides-ml

   |downloads_tides-ml| |docker_tides-ml|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``

      

   
   :depends barrnap: ``>=0.9``
   :depends biopython: ``>=1.79``
   :depends cd-hit: ``>=4.8.1``
   :depends diamond: ``>=2.1.3``
   :depends ete3: ``>=3.1.2``
   :depends kraken2: ``>=2.0.0``
   :depends optuna: ``>=3.0``
   :depends pandas: ``>=2.0``
   :depends python: ``>=3.8``
   :depends scikit-learn: ``>=1.3.0``
   :depends seaborn: ``>=0.12.2``
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

      mamba install tides-ml

   and update with::

      mamba update tides-ml

  To create a new environment, run::

      mamba create --name myenvname tides-ml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tides-ml:<tag>

   (see `tides-ml/tags`_ for valid values for ``<tag>``)


.. |downloads_tides-ml| image:: https://img.shields.io/conda/dn/bioconda/tides-ml.svg?style=flat
   :target: https://anaconda.org/bioconda/tides-ml
   :alt:   (downloads)
.. |docker_tides-ml| image:: https://quay.io/repository/biocontainers/tides-ml/status
   :target: https://quay.io/repository/biocontainers/tides-ml
.. _`tides-ml/tags`: https://quay.io/repository/biocontainers/tides-ml?tab=tags


.. raw:: html

    <script>
        var package = "tides-ml";
        var versions = ["1.1.4","1.1.3","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tides-ml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tides-ml/README.html