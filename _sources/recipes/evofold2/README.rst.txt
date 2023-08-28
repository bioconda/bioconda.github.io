:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'evofold2'
.. highlight: bash

evofold2
========

.. conda:recipe:: evofold2
   :replaces_section_title:
   :noindex:

   Identifies functional RNA\-structure in multiple sequence alignments.

   :homepage: https://github.com/jakob-skou-pedersen/phy
   :license: GPL
   :recipe: /`evofold2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evofold2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evofold2/meta.yaml>`_

   


.. conda:package:: evofold2

   |downloads_evofold2| |docker_evofold2|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``

      

   
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install evofold2

   and update with::

      mamba update evofold2

  To create a new environment, run::

      mamba create --name myenvname evofold2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/evofold2:<tag>

   (see `evofold2/tags`_ for valid values for ``<tag>``)


.. |downloads_evofold2| image:: https://img.shields.io/conda/dn/bioconda/evofold2.svg?style=flat
   :target: https://anaconda.org/bioconda/evofold2
   :alt:   (downloads)
.. |docker_evofold2| image:: https://quay.io/repository/biocontainers/evofold2/status
   :target: https://quay.io/repository/biocontainers/evofold2
.. _`evofold2/tags`: https://quay.io/repository/biocontainers/evofold2?tab=tags


.. raw:: html

    <script>
        var package = "evofold2";
        var versions = ["0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/evofold2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/evofold2/README.html