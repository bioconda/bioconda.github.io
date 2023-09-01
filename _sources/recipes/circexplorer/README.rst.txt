:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circexplorer'
.. highlight: bash

circexplorer
============

.. conda:recipe:: circexplorer
   :replaces_section_title:
   :noindex:

   A combined strategy to identify circular RNAs \(circRNAs and ciRNAs\)

   :homepage: https://github.com/YangLab/CIRCexplorer
   :license: MIT
   :recipe: /`circexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circexplorer/meta.yaml>`_

   


.. conda:package:: circexplorer

   |downloads_circexplorer| |docker_circexplorer|

   :versions:
      
      

      ``1.1.10-4``,  ``1.1.10-3``,  ``1.1.10-2``,  ``1.1.10-0``,  ``1.1.9-0``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends docopt: 
   :depends pysam: ``>=0.8.4``
   :depends python: ``<3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install circexplorer

   and update with::

      mamba update circexplorer

  To create a new environment, run::

      mamba create --name myenvname circexplorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/circexplorer:<tag>

   (see `circexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_circexplorer| image:: https://img.shields.io/conda/dn/bioconda/circexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/circexplorer
   :alt:   (downloads)
.. |docker_circexplorer| image:: https://quay.io/repository/biocontainers/circexplorer/status
   :target: https://quay.io/repository/biocontainers/circexplorer
.. _`circexplorer/tags`: https://quay.io/repository/biocontainers/circexplorer?tab=tags


.. raw:: html

    <script>
        var package = "circexplorer";
        var versions = ["1.1.10","1.1.10","1.1.10","1.1.10","1.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circexplorer/README.html