:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iclipro'
.. highlight: bash

iclipro
=======

.. conda:recipe:: iclipro
   :replaces_section_title:
   :noindex:

   iCLIPro is a Python package that can be used to control for systematic misassignments in iCLIP data.

   :homepage: http://www.biolab.si/iCLIPro/doc/
   :license: GPLv3
   :recipe: /`iclipro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iclipro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iclipro/meta.yaml>`_

   


.. conda:package:: iclipro

   |downloads_iclipro| |docker_iclipro|

   :versions:
      
      

      ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends matplotlib: 
   :depends pysam: 
   :depends python: ``<3``
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

      mamba install iclipro

   and update with::

      mamba update iclipro

  To create a new environment, run::

      mamba create --name myenvname iclipro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/iclipro:<tag>

   (see `iclipro/tags`_ for valid values for ``<tag>``)


.. |downloads_iclipro| image:: https://img.shields.io/conda/dn/bioconda/iclipro.svg?style=flat
   :target: https://anaconda.org/bioconda/iclipro
   :alt:   (downloads)
.. |docker_iclipro| image:: https://quay.io/repository/biocontainers/iclipro/status
   :target: https://quay.io/repository/biocontainers/iclipro
.. _`iclipro/tags`: https://quay.io/repository/biocontainers/iclipro?tab=tags


.. raw:: html

    <script>
        var package = "iclipro";
        var versions = ["0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iclipro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iclipro/README.html