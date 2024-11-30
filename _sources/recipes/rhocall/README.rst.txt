:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rhocall'
.. highlight: bash

rhocall
=======

.. conda:recipe:: rhocall
   :replaces_section_title:
   :noindex:

   Call regions of homozygosity and make tentative UPD calls.

   :homepage: https://github.com/dnil/rhocall
   :developer docs: https://github.com/dnil
   :license: GPL / GPLv3
   :recipe: /`rhocall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhocall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhocall/meta.yaml>`_

   


.. conda:package:: rhocall

   |downloads_rhocall| |docker_rhocall|

   :versions:
      
      

      ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``

      

   
   :depends click: 
   :depends cyvcf2: 
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends tk: 
   :depends xorg-libx11: 
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

      mamba install rhocall

   and update with::

      mamba update rhocall

  To create a new environment, run::

      mamba create --name myenvname rhocall

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rhocall:<tag>

   (see `rhocall/tags`_ for valid values for ``<tag>``)


.. |downloads_rhocall| image:: https://img.shields.io/conda/dn/bioconda/rhocall.svg?style=flat
   :target: https://anaconda.org/bioconda/rhocall
   :alt:   (downloads)
.. |docker_rhocall| image:: https://quay.io/repository/biocontainers/rhocall/status
   :target: https://quay.io/repository/biocontainers/rhocall
.. _`rhocall/tags`: https://quay.io/repository/biocontainers/rhocall?tab=tags


.. raw:: html

    <script>
        var package = "rhocall";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rhocall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rhocall/README.html