:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isa-rwval'
.. highlight: bash

isa-rwval
=========

.. conda:recipe:: isa-rwval
   :replaces_section_title:
   :noindex:

   ISA metadata tracking tools

   :homepage: https://github.com/ISA-tools/isa-rwval
   :license: CPAL
   :recipe: /`isa-rwval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isa-rwval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isa-rwval/meta.yaml>`_

   


.. conda:package:: isa-rwval

   |downloads_isa-rwval| |docker_isa-rwval|

   :versions:
      
      

      ``0.10.9-0``

      

   
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.5``
   :depends six: 
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

      mamba install isa-rwval

   and update with::

      mamba update isa-rwval

  To create a new environment, run::

      mamba create --name myenvname isa-rwval

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isa-rwval:<tag>

   (see `isa-rwval/tags`_ for valid values for ``<tag>``)


.. |downloads_isa-rwval| image:: https://img.shields.io/conda/dn/bioconda/isa-rwval.svg?style=flat
   :target: https://anaconda.org/bioconda/isa-rwval
   :alt:   (downloads)
.. |docker_isa-rwval| image:: https://quay.io/repository/biocontainers/isa-rwval/status
   :target: https://quay.io/repository/biocontainers/isa-rwval
.. _`isa-rwval/tags`: https://quay.io/repository/biocontainers/isa-rwval?tab=tags


.. raw:: html

    <script>
        var package = "isa-rwval";
        var versions = ["0.10.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isa-rwval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isa-rwval/README.html