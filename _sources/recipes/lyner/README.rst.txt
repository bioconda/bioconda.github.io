:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lyner'
.. highlight: bash

lyner
=====

.. conda:recipe:: lyner
   :replaces_section_title:
   :noindex:

   A chaining toolbox for working with dataframes

   :homepage: https://github.com/tedil/lyner
   :license: OTHER / MIT
   :recipe: /`lyner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lyner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lyner/meta.yaml>`_

   


.. conda:package:: lyner

   |downloads_lyner| |docker_lyner|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.2-0``

      

   
   :depends click: ``>=7.0``
   :depends click-aliases: ``>=1.0``
   :depends joblib: ``>=0.14``
   :depends keras: ``>=2.3``
   :depends mlxtend: ``>=0.17``
   :depends natsort: ``>=6.2``
   :depends networkx: ``>=2.4``
   :depends numba: ``>=0.46``
   :depends numpy: ``>=1.17``
   :depends pandas: ``>=0.25``
   :depends plotly: ``>=4.3``
   :depends psutil: ``>=5.6``
   :depends pybedtools: ``>=0.8``
   :depends pymc3: ``>=3.7``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.21``
   :depends scipy: ``>=1.3``
   :depends tensorflow: ``>=2.0``
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

      mamba install lyner

   and update with::

      mamba update lyner

  To create a new environment, run::

      mamba create --name myenvname lyner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lyner:<tag>

   (see `lyner/tags`_ for valid values for ``<tag>``)


.. |downloads_lyner| image:: https://img.shields.io/conda/dn/bioconda/lyner.svg?style=flat
   :target: https://anaconda.org/bioconda/lyner
   :alt:   (downloads)
.. |docker_lyner| image:: https://quay.io/repository/biocontainers/lyner/status
   :target: https://quay.io/repository/biocontainers/lyner
.. _`lyner/tags`: https://quay.io/repository/biocontainers/lyner?tab=tags


.. raw:: html

    <script>
        var package = "lyner";
        var versions = ["0.4.3","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lyner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lyner/README.html