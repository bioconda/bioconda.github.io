:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbitax2lin'
.. highlight: bash

ncbitax2lin
===========

.. conda:recipe:: ncbitax2lin
   :replaces_section_title:
   :noindex:

   NCBItax2lin

   :homepage: https://github.com/zyxue/ncbitax2lin
   :license: MIT / MIT
   :recipe: /`ncbitax2lin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbitax2lin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbitax2lin/meta.yaml>`_

   A tool that converts NCBI taxonomy dump into lineages



.. conda:package:: ncbitax2lin

   |downloads_ncbitax2lin| |docker_ncbitax2lin|

   :versions:
      
      

      ``2.3.2-0``

      

   
   :depends fire: ``>=0.3.1,<0.4.0``
   :depends pandas: ``>=1.0.3,<2.0.0``
   :depends python: ``>=3.7,<=3.9``
   :depends typing-extensions: ``>=3.7.4,<4.0.0``
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

      mamba install ncbitax2lin

   and update with::

      mamba update ncbitax2lin

  To create a new environment, run::

      mamba create --name myenvname ncbitax2lin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncbitax2lin:<tag>

   (see `ncbitax2lin/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbitax2lin| image:: https://img.shields.io/conda/dn/bioconda/ncbitax2lin.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbitax2lin
   :alt:   (downloads)
.. |docker_ncbitax2lin| image:: https://quay.io/repository/biocontainers/ncbitax2lin/status
   :target: https://quay.io/repository/biocontainers/ncbitax2lin
.. _`ncbitax2lin/tags`: https://quay.io/repository/biocontainers/ncbitax2lin?tab=tags


.. raw:: html

    <script>
        var package = "ncbitax2lin";
        var versions = ["2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbitax2lin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbitax2lin/README.html