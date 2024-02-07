:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanomotif'
.. highlight: bash

nanomotif
=========

.. conda:recipe:: nanomotif
   :replaces_section_title:
   :noindex:

   Identifying methlyation motifs in nanopore data

   :homepage: https://pypi.org/project/nanomotif/
   :license: MIT / MIT
   :recipe: /`nanomotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomotif/meta.yaml>`_

   


.. conda:package:: nanomotif

   |downloads_nanomotif| |docker_nanomotif|

   :versions:
      
      

      ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.7-0``

      

   
   :depends networkx: ``3.1``
   :depends numpy: ``1.24.4``
   :depends pandas: ``2.0.2``
   :depends polars: ``>=0.19``
   :depends progressbar2: ``3.53.1``
   :depends python: 
   :depends requests: 
   :depends scipy: ``1.10.1``
   :depends seaborn: ``0.12.2``
   :depends wheel: 
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

      mamba install nanomotif

   and update with::

      mamba update nanomotif

  To create a new environment, run::

      mamba create --name myenvname nanomotif

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanomotif:<tag>

   (see `nanomotif/tags`_ for valid values for ``<tag>``)


.. |downloads_nanomotif| image:: https://img.shields.io/conda/dn/bioconda/nanomotif.svg?style=flat
   :target: https://anaconda.org/bioconda/nanomotif
   :alt:   (downloads)
.. |docker_nanomotif| image:: https://quay.io/repository/biocontainers/nanomotif/status
   :target: https://quay.io/repository/biocontainers/nanomotif
.. _`nanomotif/tags`: https://quay.io/repository/biocontainers/nanomotif?tab=tags


.. raw:: html

    <script>
        var package = "nanomotif";
        var versions = ["0.1.14","0.1.13","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanomotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanomotif/README.html