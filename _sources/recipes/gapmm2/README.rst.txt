:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gapmm2'
.. highlight: bash

gapmm2
======

.. conda:recipe:: gapmm2
   :replaces_section_title:
   :noindex:

   gapmm2\: gapped alignment using minimap2

   :homepage: https://github.com/nextgenusfs/gapmm2
   :license: BSD / BSD-2-Clause
   :recipe: /`gapmm2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapmm2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapmm2/meta.yaml>`_

   


.. conda:package:: gapmm2

   |downloads_gapmm2| |docker_gapmm2|

   :versions:
      
      

      ``23.11.3-0``,  ``0.2.0-0``

      

   
   :depends mappy: 
   :depends natsort: 
   :depends python: ``>=3.6``
   :depends python-edlib: 
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

      mamba install gapmm2

   and update with::

      mamba update gapmm2

  To create a new environment, run::

      mamba create --name myenvname gapmm2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gapmm2:<tag>

   (see `gapmm2/tags`_ for valid values for ``<tag>``)


.. |downloads_gapmm2| image:: https://img.shields.io/conda/dn/bioconda/gapmm2.svg?style=flat
   :target: https://anaconda.org/bioconda/gapmm2
   :alt:   (downloads)
.. |docker_gapmm2| image:: https://quay.io/repository/biocontainers/gapmm2/status
   :target: https://quay.io/repository/biocontainers/gapmm2
.. _`gapmm2/tags`: https://quay.io/repository/biocontainers/gapmm2?tab=tags


.. raw:: html

    <script>
        var package = "gapmm2";
        var versions = ["23.11.3","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gapmm2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gapmm2/README.html