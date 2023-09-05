:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pywfa'
.. highlight: bash

pywfa
=====

.. conda:recipe:: pywfa
   :replaces_section_title:
   :noindex:

   A python wrapper for wavefront alignment using WFA2\-lib

   :homepage: https://github.com/kcleal/pywfa
   :license: MIT
   :recipe: /`pywfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywfa/meta.yaml>`_

   


.. conda:package:: pywfa

   |downloads_pywfa| |docker_pywfa|

   :versions:
      
      

      ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-2``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
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

      mamba install pywfa

   and update with::

      mamba update pywfa

  To create a new environment, run::

      mamba create --name myenvname pywfa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pywfa:<tag>

   (see `pywfa/tags`_ for valid values for ``<tag>``)


.. |downloads_pywfa| image:: https://img.shields.io/conda/dn/bioconda/pywfa.svg?style=flat
   :target: https://anaconda.org/bioconda/pywfa
   :alt:   (downloads)
.. |docker_pywfa| image:: https://quay.io/repository/biocontainers/pywfa/status
   :target: https://quay.io/repository/biocontainers/pywfa
.. _`pywfa/tags`: https://quay.io/repository/biocontainers/pywfa?tab=tags


.. raw:: html

    <script>
        var package = "pywfa";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pywfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pywfa/README.html