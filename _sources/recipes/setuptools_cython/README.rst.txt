:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'setuptools_cython'
.. highlight: bash

setuptools_cython
=================

.. conda:recipe:: setuptools_cython
   :replaces_section_title:
   :noindex:

   Cython setuptools integration

   :homepage: http://pypi.python.org/pypi/setuptools_cython/
   :license: http://www.gnu.org/licenses/gpl-2.0.html
   :recipe: /`setuptools_cython <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/setuptools_cython>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/setuptools_cython/meta.yaml>`_

   


.. conda:package:: setuptools_cython

   |downloads_setuptools_cython| |docker_setuptools_cython|

   :versions:
      
      

      ``0.2.1-4``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends cython: 
   :depends python: 
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install setuptools_cython

   and update with::

      mamba update setuptools_cython

  To create a new environment, run::

      mamba create --name myenvname setuptools_cython

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/setuptools_cython:<tag>

   (see `setuptools_cython/tags`_ for valid values for ``<tag>``)


.. |downloads_setuptools_cython| image:: https://img.shields.io/conda/dn/bioconda/setuptools_cython.svg?style=flat
   :target: https://anaconda.org/bioconda/setuptools_cython
   :alt:   (downloads)
.. |docker_setuptools_cython| image:: https://quay.io/repository/biocontainers/setuptools_cython/status
   :target: https://quay.io/repository/biocontainers/setuptools_cython
.. _`setuptools_cython/tags`: https://quay.io/repository/biocontainers/setuptools_cython?tab=tags


.. raw:: html

    <script>
        var package = "setuptools_cython";
        var versions = ["0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/setuptools_cython/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/setuptools_cython/README.html