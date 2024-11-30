:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dmbiolib'
.. highlight: bash

dmbiolib
========

.. conda:recipe:: dmbiolib
   :replaces_section_title:
   :noindex:

   Library of Python functions for bioinformatics

   :homepage: https://github.com/damienmarsic/dmbiolib
   :documentation: https://dmbiolib.readthedocs.io/
   
   :license: GPL-3.0
   :recipe: /`dmbiolib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmbiolib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmbiolib/meta.yaml>`_

   


.. conda:package:: dmbiolib

   |downloads_dmbiolib| |docker_dmbiolib|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-1``,  ``0.3.8-0``,  ``0.3.7-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.6``
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

      mamba install dmbiolib

   and update with::

      mamba update dmbiolib

  To create a new environment, run::

      mamba create --name myenvname dmbiolib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dmbiolib:<tag>

   (see `dmbiolib/tags`_ for valid values for ``<tag>``)


.. |downloads_dmbiolib| image:: https://img.shields.io/conda/dn/bioconda/dmbiolib.svg?style=flat
   :target: https://anaconda.org/bioconda/dmbiolib
   :alt:   (downloads)
.. |docker_dmbiolib| image:: https://quay.io/repository/biocontainers/dmbiolib/status
   :target: https://quay.io/repository/biocontainers/dmbiolib
.. _`dmbiolib/tags`: https://quay.io/repository/biocontainers/dmbiolib?tab=tags


.. raw:: html

    <script>
        var package = "dmbiolib";
        var versions = ["0.4.3","0.4.2","0.4.1","0.4.0","0.3.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dmbiolib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dmbiolib/README.html