:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gatktool'
.. highlight: bash

gatktool
========

.. conda:recipe:: gatktool
   :replaces_section_title:
   :noindex:

   Functions and classes used to extend a GATK tool with Python

   :homepage: https://broadinstitute.org/
   :license: MIT
   :recipe: /`gatktool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatktool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatktool/meta.yaml>`_

   


.. conda:package:: gatktool

   |downloads_gatktool| |docker_gatktool|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends python: 
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

      mamba install gatktool

   and update with::

      mamba update gatktool

  To create a new environment, run::

      mamba create --name myenvname gatktool

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gatktool:<tag>

   (see `gatktool/tags`_ for valid values for ``<tag>``)


.. |downloads_gatktool| image:: https://img.shields.io/conda/dn/bioconda/gatktool.svg?style=flat
   :target: https://anaconda.org/bioconda/gatktool
   :alt:   (downloads)
.. |docker_gatktool| image:: https://quay.io/repository/biocontainers/gatktool/status
   :target: https://quay.io/repository/biocontainers/gatktool
.. _`gatktool/tags`: https://quay.io/repository/biocontainers/gatktool?tab=tags


.. raw:: html

    <script>
        var package = "gatktool";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatktool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatktool/README.html