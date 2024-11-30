:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybiomart'
.. highlight: bash

pybiomart
=========

.. conda:recipe:: pybiomart
   :replaces_section_title:
   :noindex:

   A simple pythonic interface to biomart.

   :homepage: https://github.com/jrderuiter/pybiomart
   :documentation: https://jrderuiter.github.io/pybiomart/
   
   :license: MIT / MIT
   :recipe: /`pybiomart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybiomart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybiomart/meta.yaml>`_

   


.. conda:package:: pybiomart

   |downloads_pybiomart| |docker_pybiomart|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends future: 
   :depends pandas: 
   :depends python: 
   :depends requests: 
   :depends requests_cache: 
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

      mamba install pybiomart

   and update with::

      mamba update pybiomart

  To create a new environment, run::

      mamba create --name myenvname pybiomart

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybiomart:<tag>

   (see `pybiomart/tags`_ for valid values for ``<tag>``)


.. |downloads_pybiomart| image:: https://img.shields.io/conda/dn/bioconda/pybiomart.svg?style=flat
   :target: https://anaconda.org/bioconda/pybiomart
   :alt:   (downloads)
.. |docker_pybiomart| image:: https://quay.io/repository/biocontainers/pybiomart/status
   :target: https://quay.io/repository/biocontainers/pybiomart
.. _`pybiomart/tags`: https://quay.io/repository/biocontainers/pybiomart?tab=tags


.. raw:: html

    <script>
        var package = "pybiomart";
        var versions = ["0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybiomart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybiomart/README.html