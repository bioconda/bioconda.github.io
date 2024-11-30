:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chip-r'
.. highlight: bash

chip-r
======

.. conda:recipe:: chip-r
   :replaces_section_title:
   :noindex:

   ChIP\-R is a method for assessing the reproducibility of replicated ChIP\-seq or ATAC\-seq experiments.

   :homepage: https://github.com/rhysnewell/ChIP-R
   :license: GPL3
   :recipe: /`chip-r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chip-r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chip-r/meta.yaml>`_

   


.. conda:package:: chip-r

   |downloads_chip-r| |docker_chip-r|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends numpy: 
   :depends python: 
   :depends scipy: 
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

      mamba install chip-r

   and update with::

      mamba update chip-r

  To create a new environment, run::

      mamba create --name myenvname chip-r

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chip-r:<tag>

   (see `chip-r/tags`_ for valid values for ``<tag>``)


.. |downloads_chip-r| image:: https://img.shields.io/conda/dn/bioconda/chip-r.svg?style=flat
   :target: https://anaconda.org/bioconda/chip-r
   :alt:   (downloads)
.. |docker_chip-r| image:: https://quay.io/repository/biocontainers/chip-r/status
   :target: https://quay.io/repository/biocontainers/chip-r
.. _`chip-r/tags`: https://quay.io/repository/biocontainers/chip-r?tab=tags


.. raw:: html

    <script>
        var package = "chip-r";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chip-r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chip-r/README.html