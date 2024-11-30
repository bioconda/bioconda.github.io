:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msaboot'
.. highlight: bash

msaboot
=======

.. conda:recipe:: msaboot
   :replaces_section_title:
   :noindex:

   Generate bootstrapping replicates for multiple sequence alignment data.

   :homepage: https://github.com/phac-nml/msaboot
   :license: Apache 2.0
   :recipe: /`msaboot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msaboot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msaboot/meta.yaml>`_

   


.. conda:package:: msaboot

   |downloads_msaboot| |docker_msaboot|

   :versions:
      
      

      ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.0-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends python: 
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

      mamba install msaboot

   and update with::

      mamba update msaboot

  To create a new environment, run::

      mamba create --name myenvname msaboot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msaboot:<tag>

   (see `msaboot/tags`_ for valid values for ``<tag>``)


.. |downloads_msaboot| image:: https://img.shields.io/conda/dn/bioconda/msaboot.svg?style=flat
   :target: https://anaconda.org/bioconda/msaboot
   :alt:   (downloads)
.. |docker_msaboot| image:: https://quay.io/repository/biocontainers/msaboot/status
   :target: https://quay.io/repository/biocontainers/msaboot
.. _`msaboot/tags`: https://quay.io/repository/biocontainers/msaboot?tab=tags


.. raw:: html

    <script>
        var package = "msaboot";
        var versions = ["0.1.2","0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msaboot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msaboot/README.html