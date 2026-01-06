:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dartunifrac-gpu'
.. highlight: bash

dartunifrac-gpu
===============

.. conda:recipe:: dartunifrac-gpu
   :replaces_section_title:
   :noindex:

   DartUniFrac is an ultra\-fast UniFrac algorithm that scales to millions of samples. It was designed based on optimal balanced parenthesis and Weighted MinHash sketching.

   :homepage: https://github.com/jianshu93/DartUniFrac
   :documentation: https://github.com/jianshu93/DartUniFrac/blob/v0.2.9/README.md
   
   :license: MIT / MIT
   :recipe: /`dartunifrac-gpu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dartunifrac-gpu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dartunifrac-gpu/meta.yaml>`_

   


.. conda:package:: dartunifrac-gpu

   |downloads_dartunifrac-gpu| |docker_dartunifrac-gpu|

   :versions:
      
      

      ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.6.0,<4.0a0``
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

      mamba install dartunifrac-gpu

   and update with::

      mamba update dartunifrac-gpu

  To create a new environment, run::

      mamba create --name myenvname dartunifrac-gpu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dartunifrac-gpu:<tag>

   (see `dartunifrac-gpu/tags`_ for valid values for ``<tag>``)


.. |downloads_dartunifrac-gpu| image:: https://img.shields.io/conda/dn/bioconda/dartunifrac-gpu.svg?style=flat
   :target: https://anaconda.org/bioconda/dartunifrac-gpu
   :alt:   (downloads)
.. |docker_dartunifrac-gpu| image:: https://quay.io/repository/biocontainers/dartunifrac-gpu/status
   :target: https://quay.io/repository/biocontainers/dartunifrac-gpu
.. _`dartunifrac-gpu/tags`: https://quay.io/repository/biocontainers/dartunifrac-gpu?tab=tags


.. raw:: html

    <script>
        var package = "dartunifrac-gpu";
        var versions = ["0.2.9","0.2.8","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dartunifrac-gpu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dartunifrac-gpu/README.html