:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gbdraw'
.. highlight: bash

gbdraw
======

.. conda:recipe:: gbdraw
   :replaces_section_title:
   :noindex:

   A genome diagram generator for bacterial\, archaeal\, and viral genomes.

   :homepage: https://github.com/satoshikawato/gbdraw
   :license: MIT / MIT
   :recipe: /`gbdraw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbdraw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbdraw/meta.yaml>`_

   For details\, see https\:\/\/github.com\/satoshikawato\/gbdraw


.. conda:package:: gbdraw

   |downloads_gbdraw| |docker_gbdraw|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends biopython: 
   :depends cairosvg: 
   :depends fonttools: 
   :depends pandas: 
   :depends python: ``>=3.10``
   :depends svgwrite: 
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

      mamba install gbdraw

   and update with::

      mamba update gbdraw

  To create a new environment, run::

      mamba create --name myenvname gbdraw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gbdraw:<tag>

   (see `gbdraw/tags`_ for valid values for ``<tag>``)


.. |downloads_gbdraw| image:: https://img.shields.io/conda/dn/bioconda/gbdraw.svg?style=flat
   :target: https://anaconda.org/bioconda/gbdraw
   :alt:   (downloads)
.. |docker_gbdraw| image:: https://quay.io/repository/biocontainers/gbdraw/status
   :target: https://quay.io/repository/biocontainers/gbdraw
.. _`gbdraw/tags`: https://quay.io/repository/biocontainers/gbdraw?tab=tags


.. raw:: html

    <script>
        var package = "gbdraw";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gbdraw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gbdraw/README.html