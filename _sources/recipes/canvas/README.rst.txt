:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'canvas'
.. highlight: bash

canvas
======

.. conda:recipe:: canvas
   :replaces_section_title:
   :noindex:

   Copy number variant \(CNV\) calling from DNA sequencing data

   :homepage: https://github.com/Illumina/canvas
   :license: GPLv3
   :recipe: /`canvas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canvas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canvas/meta.yaml>`_

   


.. conda:package:: canvas

   |downloads_canvas| |docker_canvas|

   :versions:
      
      

      ``1.35.1.1316-0``,  ``1.25.0-0``

      

   
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

      mamba install canvas

   and update with::

      mamba update canvas

  To create a new environment, run::

      mamba create --name myenvname canvas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/canvas:<tag>

   (see `canvas/tags`_ for valid values for ``<tag>``)


.. |downloads_canvas| image:: https://img.shields.io/conda/dn/bioconda/canvas.svg?style=flat
   :target: https://anaconda.org/bioconda/canvas
   :alt:   (downloads)
.. |docker_canvas| image:: https://quay.io/repository/biocontainers/canvas/status
   :target: https://quay.io/repository/biocontainers/canvas
.. _`canvas/tags`: https://quay.io/repository/biocontainers/canvas?tab=tags


.. raw:: html

    <script>
        var package = "canvas";
        var versions = ["1.35.1.1316","1.25.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/canvas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/canvas/README.html