:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isospecpy'
.. highlight: bash

isospecpy
=========

.. conda:recipe:: isospecpy
   :replaces_section_title:
   :noindex:

   Python interface to IsoSpec\+\+ isotopic envelope calculator library

   :homepage: http://matteolacki.github.io/IsoSpec/
   :license: BSD-3-Clause
   :recipe: /`isospecpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isospecpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isospecpy/meta.yaml>`_

   


.. conda:package:: isospecpy

   |downloads_isospecpy| |docker_isospecpy|

   :versions:
      
      

      ``2.2.2-0``,  ``2.2.1-0``

      

   
   :depends cffi: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install isospecpy

   and update with::

      mamba update isospecpy

  To create a new environment, run::

      mamba create --name myenvname isospecpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isospecpy:<tag>

   (see `isospecpy/tags`_ for valid values for ``<tag>``)


.. |downloads_isospecpy| image:: https://img.shields.io/conda/dn/bioconda/isospecpy.svg?style=flat
   :target: https://anaconda.org/bioconda/isospecpy
   :alt:   (downloads)
.. |docker_isospecpy| image:: https://quay.io/repository/biocontainers/isospecpy/status
   :target: https://quay.io/repository/biocontainers/isospecpy
.. _`isospecpy/tags`: https://quay.io/repository/biocontainers/isospecpy?tab=tags


.. raw:: html

    <script>
        var package = "isospecpy";
        var versions = ["2.2.2","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isospecpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isospecpy/README.html