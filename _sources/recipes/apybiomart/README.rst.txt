:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'apybiomart'
.. highlight: bash

apybiomart
==========

.. conda:recipe:: apybiomart
   :replaces_section_title:
   :noindex:

   Async pythonic interface to Biomart.

   :homepage: https://github.com/robertopreste/apybiomart
   :license: MIT
   :recipe: /`apybiomart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apybiomart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apybiomart/meta.yaml>`_

   


.. conda:package:: apybiomart

   |downloads_apybiomart| |docker_apybiomart|

   :versions:
      
      

      ``0.5.3-0``

      

   
   :depends aiohttp: 
   :depends pandas: 
   :depends python: ``>=3.4``
   :depends requests: 
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

      mamba install apybiomart

   and update with::

      mamba update apybiomart

  To create a new environment, run::

      mamba create --name myenvname apybiomart

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/apybiomart:<tag>

   (see `apybiomart/tags`_ for valid values for ``<tag>``)


.. |downloads_apybiomart| image:: https://img.shields.io/conda/dn/bioconda/apybiomart.svg?style=flat
   :target: https://anaconda.org/bioconda/apybiomart
   :alt:   (downloads)
.. |docker_apybiomart| image:: https://quay.io/repository/biocontainers/apybiomart/status
   :target: https://quay.io/repository/biocontainers/apybiomart
.. _`apybiomart/tags`: https://quay.io/repository/biocontainers/apybiomart?tab=tags


.. raw:: html

    <script>
        var package = "apybiomart";
        var versions = ["0.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/apybiomart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/apybiomart/README.html