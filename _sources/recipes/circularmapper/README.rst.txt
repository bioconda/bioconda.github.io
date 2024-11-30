:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circularmapper'
.. highlight: bash

circularmapper
==============

.. conda:recipe:: circularmapper
   :replaces_section_title:
   :noindex:

    A method to improve mappings on circular genomes\, using the BWA mapper.

   :homepage: https://github.com/apeltzer/CircularMapper
   :license: GPLv3
   :recipe: /`circularmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circularmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circularmapper/meta.yaml>`_

   


.. conda:package:: circularmapper

   |downloads_circularmapper| |docker_circularmapper|

   :versions:
      
      

      ``1.93.5-3``,  ``1.93.5-2``,  ``1.93.5-1``,  ``1.93.5-0``,  ``1.93.4-1``,  ``1.93.4-0``

      

   
   :depends openjdk: 
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

      mamba install circularmapper

   and update with::

      mamba update circularmapper

  To create a new environment, run::

      mamba create --name myenvname circularmapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/circularmapper:<tag>

   (see `circularmapper/tags`_ for valid values for ``<tag>``)


.. |downloads_circularmapper| image:: https://img.shields.io/conda/dn/bioconda/circularmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/circularmapper
   :alt:   (downloads)
.. |docker_circularmapper| image:: https://quay.io/repository/biocontainers/circularmapper/status
   :target: https://quay.io/repository/biocontainers/circularmapper
.. _`circularmapper/tags`: https://quay.io/repository/biocontainers/circularmapper?tab=tags


.. raw:: html

    <script>
        var package = "circularmapper";
        var versions = ["1.93.5","1.93.5","1.93.5","1.93.5","1.93.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circularmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circularmapper/README.html