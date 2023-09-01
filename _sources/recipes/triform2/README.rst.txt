:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'triform2'
.. highlight: bash

triform2
========

.. conda:recipe:: triform2
   :replaces_section_title:
   :noindex:

   Improved sensitivity\, specificity and control of false discovery rates in ChIP\-Seq peak finding.

   :homepage: http://github.com/endrebak/epic
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`triform2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/triform2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/triform2/meta.yaml>`_

   


.. conda:package:: triform2

   |downloads_triform2| |docker_triform2|

   :versions:
      
      

      ``0.0.5-1``,  ``0.0.5-0``

      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bx-python: 
   :depends joblib: 
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends r-base: ``>=3.4.1,<3.4.2.0a0``
   :depends rpy2: ``>=2.4.2``
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

      mamba install triform2

   and update with::

      mamba update triform2

  To create a new environment, run::

      mamba create --name myenvname triform2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/triform2:<tag>

   (see `triform2/tags`_ for valid values for ``<tag>``)


.. |downloads_triform2| image:: https://img.shields.io/conda/dn/bioconda/triform2.svg?style=flat
   :target: https://anaconda.org/bioconda/triform2
   :alt:   (downloads)
.. |docker_triform2| image:: https://quay.io/repository/biocontainers/triform2/status
   :target: https://quay.io/repository/biocontainers/triform2
.. _`triform2/tags`: https://quay.io/repository/biocontainers/triform2?tab=tags


.. raw:: html

    <script>
        var package = "triform2";
        var versions = ["0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/triform2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/triform2/README.html