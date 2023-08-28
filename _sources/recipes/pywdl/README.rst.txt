:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pywdl'
.. highlight: bash

pywdl
=====

.. conda:recipe:: pywdl
   :replaces_section_title:
   :noindex:

   A Python implementation of a WDL parser and language bindings.

   :homepage: https://github.com/broadinstitute/pywdl
   :license: Apache v2.0
   :recipe: /`pywdl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywdl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywdl/meta.yaml>`_

   


.. conda:package:: pywdl

   |downloads_pywdl| |docker_pywdl|

   :versions:
      
      

      ``1.0.22-3``,  ``1.0.22-2``,  ``1.0.22-1``,  ``1.0.22-0``

      

   
   :depends pytest: 
   :depends python: 
   :depends xtermcolor: 
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

      mamba install pywdl

   and update with::

      mamba update pywdl

  To create a new environment, run::

      mamba create --name myenvname pywdl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pywdl:<tag>

   (see `pywdl/tags`_ for valid values for ``<tag>``)


.. |downloads_pywdl| image:: https://img.shields.io/conda/dn/bioconda/pywdl.svg?style=flat
   :target: https://anaconda.org/bioconda/pywdl
   :alt:   (downloads)
.. |docker_pywdl| image:: https://quay.io/repository/biocontainers/pywdl/status
   :target: https://quay.io/repository/biocontainers/pywdl
.. _`pywdl/tags`: https://quay.io/repository/biocontainers/pywdl?tab=tags


.. raw:: html

    <script>
        var package = "pywdl";
        var versions = ["1.0.22","1.0.22","1.0.22","1.0.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pywdl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pywdl/README.html