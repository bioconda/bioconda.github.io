:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'w4mclstrpeakpics'
.. highlight: bash

w4mclstrpeakpics
================

.. conda:recipe:: w4mclstrpeakpics
   :replaces_section_title:
   :noindex:

   Visualize W4M sample\-cluster peaks \- Produce a figure to assess the similarities and differences among peaks in a cluster of samples using XCMS\-preprocessed data files as input. MIT Licence allows redistribution.

   :homepage: https://github.com/HegemanLab/w4mclstrpeakpics
   :license: MIT
   :recipe: /`w4mclstrpeakpics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/w4mclstrpeakpics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/w4mclstrpeakpics/meta.yaml>`_

   


.. conda:package:: w4mclstrpeakpics

   |downloads_w4mclstrpeakpics| |docker_w4mclstrpeakpics|

   :versions:
      
      

      ``0.98.1-1``,  ``0.98.1-0``

      

   
   :depends r-base: ``>=3.4.1,<3.4.2.0a0``
   :depends r-batch: 
   :depends r-reshape2: 
   :depends r-sqldf: 
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

      mamba install w4mclstrpeakpics

   and update with::

      mamba update w4mclstrpeakpics

  To create a new environment, run::

      mamba create --name myenvname w4mclstrpeakpics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/w4mclstrpeakpics:<tag>

   (see `w4mclstrpeakpics/tags`_ for valid values for ``<tag>``)


.. |downloads_w4mclstrpeakpics| image:: https://img.shields.io/conda/dn/bioconda/w4mclstrpeakpics.svg?style=flat
   :target: https://anaconda.org/bioconda/w4mclstrpeakpics
   :alt:   (downloads)
.. |docker_w4mclstrpeakpics| image:: https://quay.io/repository/biocontainers/w4mclstrpeakpics/status
   :target: https://quay.io/repository/biocontainers/w4mclstrpeakpics
.. _`w4mclstrpeakpics/tags`: https://quay.io/repository/biocontainers/w4mclstrpeakpics?tab=tags


.. raw:: html

    <script>
        var package = "w4mclstrpeakpics";
        var versions = ["0.98.1","0.98.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/w4mclstrpeakpics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/w4mclstrpeakpics/README.html