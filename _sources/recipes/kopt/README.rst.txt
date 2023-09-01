:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kopt'
.. highlight: bash

kopt
====

.. conda:recipe:: kopt
   :replaces_section_title:
   :noindex:

   Keras\-hyperopt \(kopt\)\; Hyper\-parameter tuning for Keras using hyperopt.

   :homepage: https://github.com/avsecz/keras-hyperopt
   :license: MIT / MIT
   :recipe: /`kopt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kopt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kopt/meta.yaml>`_

   


.. conda:package:: kopt

   |downloads_kopt| |docker_kopt|

   :versions:
      
      

      ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends future: 
   :depends hyperopt: 
   :depends keras: ``>=2.0.4``
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends pyyaml: 
   :depends scikit-learn: ``>=0.18``
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

      mamba install kopt

   and update with::

      mamba update kopt

  To create a new environment, run::

      mamba create --name myenvname kopt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kopt:<tag>

   (see `kopt/tags`_ for valid values for ``<tag>``)


.. |downloads_kopt| image:: https://img.shields.io/conda/dn/bioconda/kopt.svg?style=flat
   :target: https://anaconda.org/bioconda/kopt
   :alt:   (downloads)
.. |docker_kopt| image:: https://quay.io/repository/biocontainers/kopt/status
   :target: https://quay.io/repository/biocontainers/kopt
.. _`kopt/tags`: https://quay.io/repository/biocontainers/kopt?tab=tags


.. raw:: html

    <script>
        var package = "kopt";
        var versions = ["0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kopt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kopt/README.html