:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shigapass'
.. highlight: bash

shigapass
=========

.. conda:recipe:: shigapass
   :replaces_section_title:
   :noindex:

   ShigaPass\: An in silico tool to predict Shigella serotypes

   :homepage: https://github.com/imanyass/ShigaPass/
   :license: GPL3
   :recipe: /`shigapass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigapass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigapass/meta.yaml>`_

   


.. conda:package:: shigapass

   |downloads_shigapass| |docker_shigapass|

   :versions:
      
      

      ``1.5.0-0``

      

   
   :depends blast: 
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

      mamba install shigapass

   and update with::

      mamba update shigapass

  To create a new environment, run::

      mamba create --name myenvname shigapass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shigapass:<tag>

   (see `shigapass/tags`_ for valid values for ``<tag>``)


.. |downloads_shigapass| image:: https://img.shields.io/conda/dn/bioconda/shigapass.svg?style=flat
   :target: https://anaconda.org/bioconda/shigapass
   :alt:   (downloads)
.. |docker_shigapass| image:: https://quay.io/repository/biocontainers/shigapass/status
   :target: https://quay.io/repository/biocontainers/shigapass
.. _`shigapass/tags`: https://quay.io/repository/biocontainers/shigapass?tab=tags


.. raw:: html

    <script>
        var package = "shigapass";
        var versions = ["1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shigapass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shigapass/README.html