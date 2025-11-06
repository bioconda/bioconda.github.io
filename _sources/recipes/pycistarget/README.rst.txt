:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycistarget'
.. highlight: bash

pycistarget
===========

.. conda:recipe:: pycistarget
   :replaces_section_title:
   :noindex:

   pycistarget is a python module to perform motif enrichment analysis in sets of regions with different tools and identify high confidence TF cistromes.

   :homepage: https://github.com/aertslab/pycistarget
   :license: OTHER
   :recipe: /`pycistarget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycistarget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycistarget/meta.yaml>`_

   


.. conda:package:: pycistarget

   |downloads_pycistarget| |docker_pycistarget|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends ctxcore: ``>=0.2.0,<0.3.0``
   :depends h5py: ``>=3.10.0,<4.0.0``
   :depends ipython: ``>=8.0.0``
   :depends numpy: ``<2.0.0``
   :depends pandas: ``>=1.5.0,<2.0.0``
   :depends pyranges: ``>=0.0.111,<0.1.0``
   :depends python: ``>=3.9,<3.12``
   :depends scikit-learn: ``>=1.3.2,<2.0.0``
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

      mamba install pycistarget

   and update with::

      mamba update pycistarget

  To create a new environment, run::

      mamba create --name myenvname pycistarget

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pycistarget:<tag>

   (see `pycistarget/tags`_ for valid values for ``<tag>``)


.. |downloads_pycistarget| image:: https://img.shields.io/conda/dn/bioconda/pycistarget.svg?style=flat
   :target: https://anaconda.org/bioconda/pycistarget
   :alt:   (downloads)
.. |docker_pycistarget| image:: https://quay.io/repository/biocontainers/pycistarget/status
   :target: https://quay.io/repository/biocontainers/pycistarget
.. _`pycistarget/tags`: https://quay.io/repository/biocontainers/pycistarget?tab=tags


.. raw:: html

    <script>
        var package = "pycistarget";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycistarget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycistarget/README.html