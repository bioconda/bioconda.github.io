:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sainsc'
.. highlight: bash

sainsc
======

.. conda:recipe:: sainsc
   :replaces_section_title:
   :noindex:

   Segmentation\-free Analysis of In Situ Capture data.

   :homepage: https://github.com/HiDiHlabs/sainsc
   :documentation: https://sainsc.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`sainsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sainsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sainsc/meta.yaml>`_

   


.. conda:package:: sainsc

   |downloads_sainsc| |docker_sainsc|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends anndata: ``>=0.9``
   :depends matplotlib-base: 
   :depends matplotlib-scalebar: 
   :depends numba: ``>=0.44``
   :depends numpy: ``>=1.21``
   :depends pandas: 
   :depends polars: ``>=1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-image: ``>=0.18``
   :depends scipy: ``>=1.9``
   :depends seaborn-base: ``>=0.11``
   :depends typing-extensions: ``>=4``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sainsc

   and update with::

      mamba update sainsc

  To create a new environment, run::

      mamba create --name myenvname sainsc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sainsc:<tag>

   (see `sainsc/tags`_ for valid values for ``<tag>``)


.. |downloads_sainsc| image:: https://img.shields.io/conda/dn/bioconda/sainsc.svg?style=flat
   :target: https://anaconda.org/bioconda/sainsc
   :alt:   (downloads)
.. |docker_sainsc| image:: https://quay.io/repository/biocontainers/sainsc/status
   :target: https://quay.io/repository/biocontainers/sainsc
.. _`sainsc/tags`: https://quay.io/repository/biocontainers/sainsc?tab=tags


.. raw:: html

    <script>
        var package = "sainsc";
        var versions = ["0.3.1","0.3.0","0.2.1","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sainsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sainsc/README.html