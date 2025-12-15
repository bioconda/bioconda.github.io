:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sglearn'
.. highlight: bash

sglearn
=======

.. conda:recipe:: sglearn
   :replaces_section_title:
   :noindex:

   Python package for featurizing sgRNAs for machine learning

   :homepage: https://github.com/gpp-rnd/sglearn
   :license: MIT
   :recipe: /`sglearn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sglearn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sglearn/meta.yaml>`_

   


.. conda:package:: sglearn

   |downloads_sglearn| |docker_sglearn|

   :versions:
      
      

      ``1.2.5-0``

      

   
   :depends biopython: ``>=1.77``
   :depends joblib: ``>=1.0.1``
   :depends pandas: ``>=1.1``
   :depends python: ``>=3.7``
   :depends seqfold: ``>=0.7.7``
   :depends tqdm: ``>=4.60.0``
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

      mamba install sglearn

   and update with::

      mamba update sglearn

  To create a new environment, run::

      mamba create --name myenvname sglearn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sglearn:<tag>

   (see `sglearn/tags`_ for valid values for ``<tag>``)


.. |downloads_sglearn| image:: https://img.shields.io/conda/dn/bioconda/sglearn.svg?style=flat
   :target: https://anaconda.org/bioconda/sglearn
   :alt:   (downloads)
.. |docker_sglearn| image:: https://quay.io/repository/biocontainers/sglearn/status
   :target: https://quay.io/repository/biocontainers/sglearn
.. _`sglearn/tags`: https://quay.io/repository/biocontainers/sglearn?tab=tags


.. raw:: html

    <script>
        var package = "sglearn";
        var versions = ["1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sglearn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sglearn/README.html