:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastquast'
.. highlight: bash

fastquast
=========

.. conda:recipe:: fastquast
   :replaces_section_title:
   :noindex:

   Fast and simple Quality Assessment Tool for Large Genomes

   :homepage: https://github.com/aglabx/fastQuast
   :documentation: https://github.com/aglabx/fastQuast/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`fastquast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastquast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastquast/meta.yaml>`_

   


.. conda:package:: fastquast

   |downloads_fastquast| |docker_fastquast|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends python: ``>=3.6``
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

      mamba install fastquast

   and update with::

      mamba update fastquast

  To create a new environment, run::

      mamba create --name myenvname fastquast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastquast:<tag>

   (see `fastquast/tags`_ for valid values for ``<tag>``)


.. |downloads_fastquast| image:: https://img.shields.io/conda/dn/bioconda/fastquast.svg?style=flat
   :target: https://anaconda.org/bioconda/fastquast
   :alt:   (downloads)
.. |docker_fastquast| image:: https://quay.io/repository/biocontainers/fastquast/status
   :target: https://quay.io/repository/biocontainers/fastquast
.. _`fastquast/tags`: https://quay.io/repository/biocontainers/fastquast?tab=tags


.. raw:: html

    <script>
        var package = "fastquast";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastquast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastquast/README.html