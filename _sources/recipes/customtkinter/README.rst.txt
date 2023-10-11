:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'customtkinter'
.. highlight: bash

customtkinter
=============

.. conda:recipe:: customtkinter
   :replaces_section_title:
   :noindex:

   Create modern looking GUIs with Python

   :homepage: https://customtkinter.tomschimansky.com
   :license: MIT
   :recipe: /`customtkinter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/customtkinter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/customtkinter/meta.yaml>`_

   


.. conda:package:: customtkinter

   |downloads_customtkinter| |docker_customtkinter|

   :versions:
      
      

      ``5.2.0-0``

      

   
   :depends darkdetect: 
   :depends python: 
   :depends xorg-libx11: 
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

      mamba install customtkinter

   and update with::

      mamba update customtkinter

  To create a new environment, run::

      mamba create --name myenvname customtkinter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/customtkinter:<tag>

   (see `customtkinter/tags`_ for valid values for ``<tag>``)


.. |downloads_customtkinter| image:: https://img.shields.io/conda/dn/bioconda/customtkinter.svg?style=flat
   :target: https://anaconda.org/bioconda/customtkinter
   :alt:   (downloads)
.. |docker_customtkinter| image:: https://quay.io/repository/biocontainers/customtkinter/status
   :target: https://quay.io/repository/biocontainers/customtkinter
.. _`customtkinter/tags`: https://quay.io/repository/biocontainers/customtkinter?tab=tags


.. raw:: html

    <script>
        var package = "customtkinter";
        var versions = ["5.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/customtkinter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/customtkinter/README.html