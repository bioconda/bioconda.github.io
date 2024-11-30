:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ms'
.. highlight: bash

ms
==

.. conda:recipe:: ms
   :replaces_section_title:
   :noindex:

   Generates random independent samples according to a simple Wright\-Fisher neutral model.

   :homepage: http://home.uchicago.edu/rhudson1/source/mksamples.html
   :license: Unknown
   :recipe: /`ms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms/meta.yaml>`_
   :links: biotools: :biotools:`ms`, doi: :doi:`10.1093/bioinformatics/18.2.337`

   


.. conda:package:: ms

   |downloads_ms| |docker_ms|

   :versions:
      
      

      ``2014_03_04-0``

      

   
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

      mamba install ms

   and update with::

      mamba update ms

  To create a new environment, run::

      mamba create --name myenvname ms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ms:<tag>

   (see `ms/tags`_ for valid values for ``<tag>``)


.. |downloads_ms| image:: https://img.shields.io/conda/dn/bioconda/ms.svg?style=flat
   :target: https://anaconda.org/bioconda/ms
   :alt:   (downloads)
.. |docker_ms| image:: https://quay.io/repository/biocontainers/ms/status
   :target: https://quay.io/repository/biocontainers/ms
.. _`ms/tags`: https://quay.io/repository/biocontainers/ms?tab=tags


.. raw:: html

    <script>
        var package = "ms";
        var versions = ["2014_03_04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms/README.html