:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tiptoft'
.. highlight: bash

tiptoft
=======

.. conda:recipe:: tiptoft
   :replaces_section_title:
   :noindex:

   Predict plasmids from uncorrected long read data.

   :homepage: https://github.com/andrewjpage/tiptoft
   :license: GPL3 / GPL3
   :recipe: /`tiptoft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiptoft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiptoft/meta.yaml>`_

   


.. conda:package:: tiptoft

   |downloads_tiptoft| |docker_tiptoft|

   :versions:
      
      

      ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-0``,  ``0.1.4-0``

      

   
   :depends biopython: ``>=1.68``
   :depends cython: 
   :depends pyfastaq: ``>=3.12.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: 
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

      mamba install tiptoft

   and update with::

      mamba update tiptoft

  To create a new environment, run::

      mamba create --name myenvname tiptoft

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tiptoft:<tag>

   (see `tiptoft/tags`_ for valid values for ``<tag>``)


.. |downloads_tiptoft| image:: https://img.shields.io/conda/dn/bioconda/tiptoft.svg?style=flat
   :target: https://anaconda.org/bioconda/tiptoft
   :alt:   (downloads)
.. |docker_tiptoft| image:: https://quay.io/repository/biocontainers/tiptoft/status
   :target: https://quay.io/repository/biocontainers/tiptoft
.. _`tiptoft/tags`: https://quay.io/repository/biocontainers/tiptoft?tab=tags


.. raw:: html

    <script>
        var package = "tiptoft";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tiptoft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tiptoft/README.html