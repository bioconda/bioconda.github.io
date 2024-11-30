:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hybkit'
.. highlight: bash

hybkit
======

.. conda:recipe:: hybkit
   :replaces_section_title:
   :noindex:

   Hybkit toolkit and Python3 API chimeric genomic data analysis from proximity ligation methods.

   :homepage: https://github.com/RenneLab/hybkit
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`hybkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybkit/meta.yaml>`_

   


.. conda:package:: hybkit

   |downloads_hybkit| |docker_hybkit|

   :versions:
      
      

      ``0.3.6-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.0-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends python: ``>=3.8``
   :depends typing_extensions: 
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

      mamba install hybkit

   and update with::

      mamba update hybkit

  To create a new environment, run::

      mamba create --name myenvname hybkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hybkit:<tag>

   (see `hybkit/tags`_ for valid values for ``<tag>``)


.. |downloads_hybkit| image:: https://img.shields.io/conda/dn/bioconda/hybkit.svg?style=flat
   :target: https://anaconda.org/bioconda/hybkit
   :alt:   (downloads)
.. |docker_hybkit| image:: https://quay.io/repository/biocontainers/hybkit/status
   :target: https://quay.io/repository/biocontainers/hybkit
.. _`hybkit/tags`: https://quay.io/repository/biocontainers/hybkit?tab=tags


.. raw:: html

    <script>
        var package = "hybkit";
        var versions = ["0.3.6","0.3.4","0.3.3","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hybkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hybkit/README.html