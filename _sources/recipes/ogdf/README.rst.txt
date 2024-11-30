:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ogdf'
.. highlight: bash

ogdf
====

.. conda:recipe:: ogdf
   :replaces_section_title:
   :noindex:

   The Open Graph Drawing Framework is a self\-contained C\+\+ class library for the automatic layout of diagrams.

   :homepage: http://http://ogdf.net/doku.php
   :license: GPLv3
   :recipe: /`ogdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ogdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ogdf/meta.yaml>`_

   


.. conda:package:: ogdf

   |downloads_ogdf| |docker_ogdf|

   :versions:
      
      

      ``201207-6``,  ``201207-5``,  ``201207-4``,  ``201207-3``,  ``201207-2``,  ``201207-1``,  ``201207-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install ogdf

   and update with::

      mamba update ogdf

  To create a new environment, run::

      mamba create --name myenvname ogdf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ogdf:<tag>

   (see `ogdf/tags`_ for valid values for ``<tag>``)


.. |downloads_ogdf| image:: https://img.shields.io/conda/dn/bioconda/ogdf.svg?style=flat
   :target: https://anaconda.org/bioconda/ogdf
   :alt:   (downloads)
.. |docker_ogdf| image:: https://quay.io/repository/biocontainers/ogdf/status
   :target: https://quay.io/repository/biocontainers/ogdf
.. _`ogdf/tags`: https://quay.io/repository/biocontainers/ogdf?tab=tags


.. raw:: html

    <script>
        var package = "ogdf";
        var versions = ["201207","201207","201207","201207","201207"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ogdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ogdf/README.html