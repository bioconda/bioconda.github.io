:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectrassembler'
.. highlight: bash

spectrassembler
===============

.. conda:recipe:: spectrassembler
   :replaces_section_title:
   :noindex:

   Tool \(experimental\) to compute layout from overlaps with spectral algorithm

   :homepage: https://github.com/antrec/spectrassembler
   :license: MIT
   :recipe: /`spectrassembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrassembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrassembler/meta.yaml>`_

   


.. conda:package:: spectrassembler

   |downloads_spectrassembler| |docker_spectrassembler|

   :versions:
      
      

      ``0.0.1a1-4``,  ``0.0.1a1-3``,  ``0.0.1a1-2``,  ``0.0.1a1-1``,  ``0.0.1a1-0``

      

   
   :depends biopython: 
   :depends bwa: 
   :depends minimap: 
   :depends numpy: 
   :depends poa: 
   :depends python: ``<3``
   :depends scipy: 
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

      mamba install spectrassembler

   and update with::

      mamba update spectrassembler

  To create a new environment, run::

      mamba create --name myenvname spectrassembler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spectrassembler:<tag>

   (see `spectrassembler/tags`_ for valid values for ``<tag>``)


.. |downloads_spectrassembler| image:: https://img.shields.io/conda/dn/bioconda/spectrassembler.svg?style=flat
   :target: https://anaconda.org/bioconda/spectrassembler
   :alt:   (downloads)
.. |docker_spectrassembler| image:: https://quay.io/repository/biocontainers/spectrassembler/status
   :target: https://quay.io/repository/biocontainers/spectrassembler
.. _`spectrassembler/tags`: https://quay.io/repository/biocontainers/spectrassembler?tab=tags


.. raw:: html

    <script>
        var package = "spectrassembler";
        var versions = ["0.0.1a1","0.0.1a1","0.0.1a1","0.0.1a1","0.0.1a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectrassembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectrassembler/README.html