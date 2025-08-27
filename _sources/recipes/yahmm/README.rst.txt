:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yahmm'
.. highlight: bash

yahmm
=====

.. conda:recipe:: yahmm
   :replaces_section_title:
   :noindex:

   YAHMM is a HMM package for Python\, implemented in Cython for speed.

   :homepage: http://pypi.python.org/pypi/yahmm/
   :license: MIT
   :recipe: /`yahmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yahmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yahmm/meta.yaml>`_

   


.. conda:package:: yahmm

   |downloads_yahmm| |docker_yahmm|

   :versions:
      
      

      ``1.1.3-9``,  ``1.1.3-8``,  ``1.1.3-7``,  ``1.1.3-6``,  ``1.1.3-5``,  ``1.1.3-4``,  ``1.1.3-3``,  ``1.1.3-1``,  ``1.1.3-0``

      

   
   :depends cython: ``>=0.20.1``
   :depends matplotlib-base: ``>=1.3.1``
   :depends networkx: ``>=1.8.1``
   :depends numpy: ``>=1.24.3,<2.0a0``
   :depends numpy: ``>=1.8.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: ``>=0.13.3``
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

      mamba install yahmm

   and update with::

      mamba update yahmm

  To create a new environment, run::

      mamba create --name myenvname yahmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yahmm:<tag>

   (see `yahmm/tags`_ for valid values for ``<tag>``)


.. |downloads_yahmm| image:: https://img.shields.io/conda/dn/bioconda/yahmm.svg?style=flat
   :target: https://anaconda.org/bioconda/yahmm
   :alt:   (downloads)
.. |docker_yahmm| image:: https://quay.io/repository/biocontainers/yahmm/status
   :target: https://quay.io/repository/biocontainers/yahmm
.. _`yahmm/tags`: https://quay.io/repository/biocontainers/yahmm?tab=tags


.. raw:: html

    <script>
        var package = "yahmm";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yahmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yahmm/README.html