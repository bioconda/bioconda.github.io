:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysnptools'
.. highlight: bash

pysnptools
==========

.. conda:recipe:: pysnptools
   :replaces_section_title:
   :noindex:

   Python library for reading and manipulating genetic data

   :homepage: http://research.microsoft.com/en-us/um/redmond/projects/mscompbio/
   :license: Apache 2.0
   :recipe: /`pysnptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysnptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysnptools/meta.yaml>`_

   


.. conda:package:: pysnptools

   |downloads_pysnptools| |docker_pysnptools|

   :versions:
      
      

      ``0.3.13-6``,  ``0.3.13-5``,  ``0.3.13-4``,  ``0.3.13-3``,  ``0.3.13-2``,  ``0.3.13-0``,  ``0.3.9-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends numpy: ``>=1.9.2``
   :depends pandas: ``>=0.16.2``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scipy: ``>=0.15.1``
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

      mamba install pysnptools

   and update with::

      mamba update pysnptools

  To create a new environment, run::

      mamba create --name myenvname pysnptools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pysnptools:<tag>

   (see `pysnptools/tags`_ for valid values for ``<tag>``)


.. |downloads_pysnptools| image:: https://img.shields.io/conda/dn/bioconda/pysnptools.svg?style=flat
   :target: https://anaconda.org/bioconda/pysnptools
   :alt:   (downloads)
.. |docker_pysnptools| image:: https://quay.io/repository/biocontainers/pysnptools/status
   :target: https://quay.io/repository/biocontainers/pysnptools
.. _`pysnptools/tags`: https://quay.io/repository/biocontainers/pysnptools?tab=tags


.. raw:: html

    <script>
        var package = "pysnptools";
        var versions = ["0.3.13","0.3.13","0.3.13","0.3.13","0.3.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysnptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysnptools/README.html