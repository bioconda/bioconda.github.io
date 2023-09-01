:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rascaf'
.. highlight: bash

rascaf
======

.. conda:recipe:: rascaf
   :replaces_section_title:
   :noindex:

   Scaffolding with RNA\-seq read alignment

   :homepage: https://github.com/mourisl/Rascaf/commits/master
   :license: GPL2
   :recipe: /`rascaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rascaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rascaf/meta.yaml>`_

   


.. conda:package:: rascaf

   |downloads_rascaf| |docker_rascaf|

   :versions:
      
      

      ``20161129-6``,  ``20161129-5``,  ``20161129-4``,  ``20161129-3``,  ``20161129-2``,  ``20161129-1``,  ``20161129-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install rascaf

   and update with::

      mamba update rascaf

  To create a new environment, run::

      mamba create --name myenvname rascaf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rascaf:<tag>

   (see `rascaf/tags`_ for valid values for ``<tag>``)


.. |downloads_rascaf| image:: https://img.shields.io/conda/dn/bioconda/rascaf.svg?style=flat
   :target: https://anaconda.org/bioconda/rascaf
   :alt:   (downloads)
.. |docker_rascaf| image:: https://quay.io/repository/biocontainers/rascaf/status
   :target: https://quay.io/repository/biocontainers/rascaf
.. _`rascaf/tags`: https://quay.io/repository/biocontainers/rascaf?tab=tags


.. raw:: html

    <script>
        var package = "rascaf";
        var versions = ["20161129","20161129","20161129","20161129","20161129"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rascaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rascaf/README.html