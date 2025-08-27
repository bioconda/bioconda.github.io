:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'edd'
.. highlight: bash

edd
===

.. conda:recipe:: edd
   :replaces_section_title:
   :noindex:

   Enriched domain detector for ChIP\-seq data

   :homepage: http://github.com/CollasLab/edd
   :license: MIT / MIT
   :recipe: /`edd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edd/meta.yaml>`_

   


.. conda:package:: edd

   |downloads_edd| |docker_edd|

   :versions:
      
      

      ``1.1.19-4``,  ``1.1.19-3``,  ``1.1.19-2``,  ``1.1.19-1``,  ``1.1.19-0``,  ``1.1.18-1``,  ``1.1.18-0``

      

   
   :depends logbook: 
   :depends numpy: 
   :depends pandas: 
   :depends patsy: 
   :depends pybedtools: 
   :depends pysam: ``0.10.0.*``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python-dateutil: 
   :depends python_abi: ``2.7.* *_cp27m``
   :depends scipy: 
   :depends setuptools: 
   :depends statsmodels: 
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

      mamba install edd

   and update with::

      mamba update edd

  To create a new environment, run::

      mamba create --name myenvname edd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/edd:<tag>

   (see `edd/tags`_ for valid values for ``<tag>``)


.. |downloads_edd| image:: https://img.shields.io/conda/dn/bioconda/edd.svg?style=flat
   :target: https://anaconda.org/bioconda/edd
   :alt:   (downloads)
.. |docker_edd| image:: https://quay.io/repository/biocontainers/edd/status
   :target: https://quay.io/repository/biocontainers/edd
.. _`edd/tags`: https://quay.io/repository/biocontainers/edd?tab=tags


.. raw:: html

    <script>
        var package = "edd";
        var versions = ["1.1.19","1.1.19","1.1.19","1.1.19","1.1.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/edd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/edd/README.html