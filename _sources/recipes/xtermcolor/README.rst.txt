:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xtermcolor'
.. highlight: bash

xtermcolor
==========

.. conda:recipe:: xtermcolor
   :replaces_section_title:
   :noindex:

   Python library for terminal color support \(including 256\-color support

   :homepage: https://github.com/broadinstitute/xtermcolor
   :license: MIT
   :recipe: /`xtermcolor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtermcolor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtermcolor/meta.yaml>`_

   


.. conda:package:: xtermcolor

   |downloads_xtermcolor| |docker_xtermcolor|

   :versions:
      
      

      ``1.3-2``,  ``1.3-1``,  ``1.3-0``

      

   
   :depends python: 
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

      mamba install xtermcolor

   and update with::

      mamba update xtermcolor

  To create a new environment, run::

      mamba create --name myenvname xtermcolor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xtermcolor:<tag>

   (see `xtermcolor/tags`_ for valid values for ``<tag>``)


.. |downloads_xtermcolor| image:: https://img.shields.io/conda/dn/bioconda/xtermcolor.svg?style=flat
   :target: https://anaconda.org/bioconda/xtermcolor
   :alt:   (downloads)
.. |docker_xtermcolor| image:: https://quay.io/repository/biocontainers/xtermcolor/status
   :target: https://quay.io/repository/biocontainers/xtermcolor
.. _`xtermcolor/tags`: https://quay.io/repository/biocontainers/xtermcolor?tab=tags


.. raw:: html

    <script>
        var package = "xtermcolor";
        var versions = ["1.3","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xtermcolor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xtermcolor/README.html