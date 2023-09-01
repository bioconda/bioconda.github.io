:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tasmanian-mismatch'
.. highlight: bash

tasmanian-mismatch
==================

.. conda:recipe:: tasmanian-mismatch
   :replaces_section_title:
   :noindex:

   Tasmanian tool to analyze mismatches at read and position in high throughput sequencing data

   :homepage: https://github.com/nebiolabs/tasmanian-mismatch
   :license: GNU Affero General Public License
   :recipe: /`tasmanian-mismatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tasmanian-mismatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tasmanian-mismatch/meta.yaml>`_

   


.. conda:package:: tasmanian-mismatch

   |downloads_tasmanian-mismatch| |docker_tasmanian-mismatch|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.4-0``,  ``0.1.3-0``,  ``0.1.1-0``

      

   
   :depends matplotlib-base: ``3.1.1``
   :depends numpy: 
   :depends numpy: ``1.16.4``
   :depends pandas: ``0.25.1``
   :depends plotly: ``4.3.0``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``0.21.2``
   :depends scipy: ``1.2.1``
   :depends seaborn: ``0.9.0``
   :depends statsmodels: ``0.10.1``
   :depends termcolor: ``1.1.0``
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

      mamba install tasmanian-mismatch

   and update with::

      mamba update tasmanian-mismatch

  To create a new environment, run::

      mamba create --name myenvname tasmanian-mismatch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tasmanian-mismatch:<tag>

   (see `tasmanian-mismatch/tags`_ for valid values for ``<tag>``)


.. |downloads_tasmanian-mismatch| image:: https://img.shields.io/conda/dn/bioconda/tasmanian-mismatch.svg?style=flat
   :target: https://anaconda.org/bioconda/tasmanian-mismatch
   :alt:   (downloads)
.. |docker_tasmanian-mismatch| image:: https://quay.io/repository/biocontainers/tasmanian-mismatch/status
   :target: https://quay.io/repository/biocontainers/tasmanian-mismatch
.. _`tasmanian-mismatch/tags`: https://quay.io/repository/biocontainers/tasmanian-mismatch?tab=tags


.. raw:: html

    <script>
        var package = "tasmanian-mismatch";
        var versions = ["1.0.7","1.0.6","1.0.4","0.1.3","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tasmanian-mismatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tasmanian-mismatch/README.html