:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'patchify'
.. highlight: bash

patchify
========

.. conda:recipe:: patchify
   :replaces_section_title:
   :noindex:

   A library that helps you split image into small\, overlappable patches\, and merge patches back into the original image.

   :homepage: https://github.com/dovahcrow/patchify.py
   :license: MIT
   :recipe: /`patchify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/patchify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/patchify/meta.yaml>`_

   


.. conda:package:: patchify

   |downloads_patchify| |docker_patchify|

   :versions:
      
      

      ``0.2.3-0``

      

   
   :depends numpy: ``>=1.0.0,<2.0.0``
   :depends python: ``>=3.7.0,<4.0.0``
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

      mamba install patchify

   and update with::

      mamba update patchify

  To create a new environment, run::

      mamba create --name myenvname patchify

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/patchify:<tag>

   (see `patchify/tags`_ for valid values for ``<tag>``)


.. |downloads_patchify| image:: https://img.shields.io/conda/dn/bioconda/patchify.svg?style=flat
   :target: https://anaconda.org/bioconda/patchify
   :alt:   (downloads)
.. |docker_patchify| image:: https://quay.io/repository/biocontainers/patchify/status
   :target: https://quay.io/repository/biocontainers/patchify
.. _`patchify/tags`: https://quay.io/repository/biocontainers/patchify?tab=tags


.. raw:: html

    <script>
        var package = "patchify";
        var versions = ["0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/patchify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/patchify/README.html