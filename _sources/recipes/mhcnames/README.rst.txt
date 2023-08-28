:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhcnames'
.. highlight: bash

mhcnames
========

.. conda:recipe:: mhcnames
   :replaces_section_title:
   :noindex:

   Python library for MHC nomenclature parsing

   :homepage: https://github.com/hammerlab/mhcnames
   :license: Apache License Version 2.0
   :recipe: /`mhcnames <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcnames>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcnames/meta.yaml>`_

   


.. conda:package:: mhcnames

   |downloads_mhcnames| |docker_mhcnames|

   :versions:
      
      

      ``0.4.8-1``,  ``0.4.8-0``

      

   
   :depends python: 
   :depends six: ``>=1.9.0``
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

      mamba install mhcnames

   and update with::

      mamba update mhcnames

  To create a new environment, run::

      mamba create --name myenvname mhcnames

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mhcnames:<tag>

   (see `mhcnames/tags`_ for valid values for ``<tag>``)


.. |downloads_mhcnames| image:: https://img.shields.io/conda/dn/bioconda/mhcnames.svg?style=flat
   :target: https://anaconda.org/bioconda/mhcnames
   :alt:   (downloads)
.. |docker_mhcnames| image:: https://quay.io/repository/biocontainers/mhcnames/status
   :target: https://quay.io/repository/biocontainers/mhcnames
.. _`mhcnames/tags`: https://quay.io/repository/biocontainers/mhcnames?tab=tags


.. raw:: html

    <script>
        var package = "mhcnames";
        var versions = ["0.4.8","0.4.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhcnames/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhcnames/README.html