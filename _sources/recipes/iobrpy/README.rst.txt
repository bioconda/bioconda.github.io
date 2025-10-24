:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iobrpy'
.. highlight: bash

iobrpy
======

.. conda:recipe:: iobrpy
   :replaces_section_title:
   :noindex:

   Immuno\-Oncology Biological Research using Python \(IOBRpy\)

   :homepage: https://github.com/IOBR/IOBRpy
   :license: MIT
   :recipe: /`iobrpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iobrpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iobrpy/meta.yaml>`_

   


.. conda:package:: iobrpy

   |downloads_iobrpy| |docker_iobrpy|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends fastp: 
   :depends gseapy: ``>=1.0.6``
   :depends gzip: 
   :depends joblib: ``>=1.3``
   :depends matplotlib-base: ``>=3.7``
   :depends multiqc: ``1.31``
   :depends numpy: ``>=1.22``
   :depends pandas: ``>=1.5``
   :depends python: ``>=3.9``
   :depends regex: ``>=2024.5``
   :depends salmon: 
   :depends scikit-learn: ``>=1.2``
   :depends scipy: ``>=1.9``
   :depends star: 
   :depends statsmodels: ``>=0.13``
   :depends tiktoken: ``>=0.11,<0.13``
   :depends tqdm: ``>=4.66``
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

      mamba install iobrpy

   and update with::

      mamba update iobrpy

  To create a new environment, run::

      mamba create --name myenvname iobrpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/iobrpy:<tag>

   (see `iobrpy/tags`_ for valid values for ``<tag>``)


.. |downloads_iobrpy| image:: https://img.shields.io/conda/dn/bioconda/iobrpy.svg?style=flat
   :target: https://anaconda.org/bioconda/iobrpy
   :alt:   (downloads)
.. |docker_iobrpy| image:: https://quay.io/repository/biocontainers/iobrpy/status
   :target: https://quay.io/repository/biocontainers/iobrpy
.. _`iobrpy/tags`: https://quay.io/repository/biocontainers/iobrpy?tab=tags


.. raw:: html

    <script>
        var package = "iobrpy";
        var versions = ["0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iobrpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iobrpy/README.html