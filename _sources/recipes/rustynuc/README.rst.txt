:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rustynuc'
.. highlight: bash

rustynuc
========

.. conda:recipe:: rustynuc
   :replaces_section_title:
   :noindex:

   Quick analysis of pileups for likely 8\-oxoG locations

   :homepage: https://github.com/bjohnnyd/rustynuc
   :license: MIT / MIT
   :recipe: /`rustynuc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustynuc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustynuc/meta.yaml>`_

   


.. conda:package:: rustynuc

   |downloads_rustynuc| |docker_rustynuc|

   :versions:
      
      

      ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install rustynuc

   and update with::

      mamba update rustynuc

  To create a new environment, run::

      mamba create --name myenvname rustynuc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rustynuc:<tag>

   (see `rustynuc/tags`_ for valid values for ``<tag>``)


.. |downloads_rustynuc| image:: https://img.shields.io/conda/dn/bioconda/rustynuc.svg?style=flat
   :target: https://anaconda.org/bioconda/rustynuc
   :alt:   (downloads)
.. |docker_rustynuc| image:: https://quay.io/repository/biocontainers/rustynuc/status
   :target: https://quay.io/repository/biocontainers/rustynuc
.. _`rustynuc/tags`: https://quay.io/repository/biocontainers/rustynuc?tab=tags


.. raw:: html

    <script>
        var package = "rustynuc";
        var versions = ["0.3.1","0.3.1","0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rustynuc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rustynuc/README.html