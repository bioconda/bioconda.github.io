:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'is6110'
.. highlight: bash

is6110
======

.. conda:recipe:: is6110
   :replaces_section_title:
   :noindex:

   Tool to find IS6110 insertions in M. tuberculosis NGS data

   :homepage: https://github.com/jodyphelan/is6110
   :license: MIT
   :recipe: /`is6110 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/is6110>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/is6110/meta.yaml>`_

   


.. conda:package:: is6110

   |downloads_is6110| |docker_is6110|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends bwa: 
   :depends pysam: 
   :depends python: ``>=3.10``
   :depends samtools: ``>=1.12``
   :depends tqdm: 
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

      mamba install is6110

   and update with::

      mamba update is6110

  To create a new environment, run::

      mamba create --name myenvname is6110

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/is6110:<tag>

   (see `is6110/tags`_ for valid values for ``<tag>``)


.. |downloads_is6110| image:: https://img.shields.io/conda/dn/bioconda/is6110.svg?style=flat
   :target: https://anaconda.org/bioconda/is6110
   :alt:   (downloads)
.. |docker_is6110| image:: https://quay.io/repository/biocontainers/is6110/status
   :target: https://quay.io/repository/biocontainers/is6110
.. _`is6110/tags`: https://quay.io/repository/biocontainers/is6110?tab=tags


.. raw:: html

    <script>
        var package = "is6110";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/is6110/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/is6110/README.html