:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pango_aliasor'
.. highlight: bash

pango_aliasor
=============

.. conda:recipe:: pango_aliasor
   :replaces_section_title:
   :noindex:

   Pango lineage aliasing and dealiasing

   :homepage: https://github.com/corneliusroemer/pango_aliasor
   :license: MIT
   :recipe: /`pango_aliasor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pango_aliasor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pango_aliasor/meta.yaml>`_

   


.. conda:package:: pango_aliasor

   |downloads_pango_aliasor| |docker_pango_aliasor|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends python: ``>=3.7``
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

      mamba install pango_aliasor

   and update with::

      mamba update pango_aliasor

  To create a new environment, run::

      mamba create --name myenvname pango_aliasor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pango_aliasor:<tag>

   (see `pango_aliasor/tags`_ for valid values for ``<tag>``)


.. |downloads_pango_aliasor| image:: https://img.shields.io/conda/dn/bioconda/pango_aliasor.svg?style=flat
   :target: https://anaconda.org/bioconda/pango_aliasor
   :alt:   (downloads)
.. |docker_pango_aliasor| image:: https://quay.io/repository/biocontainers/pango_aliasor/status
   :target: https://quay.io/repository/biocontainers/pango_aliasor
.. _`pango_aliasor/tags`: https://quay.io/repository/biocontainers/pango_aliasor?tab=tags


.. raw:: html

    <script>
        var package = "pango_aliasor";
        var versions = ["0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pango_aliasor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pango_aliasor/README.html