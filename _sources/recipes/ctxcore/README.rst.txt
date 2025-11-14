:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ctxcore'
.. highlight: bash

ctxcore
=======

.. conda:recipe:: ctxcore
   :replaces_section_title:
   :noindex:

   Core functions for pycisTarget and the SCENIC tool suite.

   :homepage: https://scenic.aertslab.org
   :documentation: https://ctxcore.readthedocs.io/en/latest
   
   :developer docs: https://github.com/aertslab/ctxcore
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ctxcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctxcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctxcore/meta.yaml>`_

   


.. conda:package:: ctxcore

   |downloads_ctxcore| |docker_ctxcore|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends attrs: 
   :depends cytoolz: 
   :depends frozendict: 
   :depends numba: ``>=0.51.2``
   :depends numpy: 
   :depends pandas: ``>=0.24``
   :depends pyarrow: ``>=8.0.0``
   :depends python: 
   :depends pyyaml: 
   :depends setuptools: 
   :depends tqdm: 
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

      mamba install ctxcore

   and update with::

      mamba update ctxcore

  To create a new environment, run::

      mamba create --name myenvname ctxcore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ctxcore:<tag>

   (see `ctxcore/tags`_ for valid values for ``<tag>``)


.. |downloads_ctxcore| image:: https://img.shields.io/conda/dn/bioconda/ctxcore.svg?style=flat
   :target: https://anaconda.org/bioconda/ctxcore
   :alt:   (downloads)
.. |docker_ctxcore| image:: https://quay.io/repository/biocontainers/ctxcore/status
   :target: https://quay.io/repository/biocontainers/ctxcore
.. _`ctxcore/tags`: https://quay.io/repository/biocontainers/ctxcore?tab=tags


.. raw:: html

    <script>
        var package = "ctxcore";
        var versions = ["0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ctxcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ctxcore/README.html