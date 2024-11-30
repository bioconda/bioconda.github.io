:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlpy'
.. highlight: bash

mlpy
====

.. conda:recipe:: mlpy
   :replaces_section_title:
   :noindex:

   mlpy is a Python module for Machine Learning built on top of NumPy\/SciPy and the GNU Scientific Libraries.

   :homepage: http://mlpy.sourceforge.net/index.html
   :documentation: http://mlpy.sourceforge.net/docs
   
   :developer docs: http://hg.code.sf.net/p/mlpy/code/
   :license: GPL3
   :recipe: /`mlpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlpy/meta.yaml>`_

   


.. conda:package:: mlpy

   |downloads_mlpy| |docker_mlpy|

   :versions:
      
      

      ``3.5.0-3``,  ``3.5.0-2``,  ``3.5.0-1``,  ``3.5.0-0``

      

   
   :depends gsl: ``>=1.11``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends numpy: ``>=1.3.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scipy: ``>=0.7.0``
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

      mamba install mlpy

   and update with::

      mamba update mlpy

  To create a new environment, run::

      mamba create --name myenvname mlpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mlpy:<tag>

   (see `mlpy/tags`_ for valid values for ``<tag>``)


.. |downloads_mlpy| image:: https://img.shields.io/conda/dn/bioconda/mlpy.svg?style=flat
   :target: https://anaconda.org/bioconda/mlpy
   :alt:   (downloads)
.. |docker_mlpy| image:: https://quay.io/repository/biocontainers/mlpy/status
   :target: https://quay.io/repository/biocontainers/mlpy
.. _`mlpy/tags`: https://quay.io/repository/biocontainers/mlpy?tab=tags


.. raw:: html

    <script>
        var package = "mlpy";
        var versions = ["3.5.0","3.5.0","3.5.0","3.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlpy/README.html