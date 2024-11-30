:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xmlbuilder'
.. highlight: bash

xmlbuilder
==========

.. conda:recipe:: xmlbuilder
   :replaces_section_title:
   :noindex:

   pythonic way to crate xml\/\(x\)html files

   :homepage: https://pypi.python.org/pypi/xmlbuilder/1.0
   :license: LGPL / LGPL v3
   :recipe: /`xmlbuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmlbuilder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmlbuilder/meta.yaml>`_

   


.. conda:package:: xmlbuilder

   |downloads_xmlbuilder| |docker_xmlbuilder|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install xmlbuilder

   and update with::

      mamba update xmlbuilder

  To create a new environment, run::

      mamba create --name myenvname xmlbuilder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xmlbuilder:<tag>

   (see `xmlbuilder/tags`_ for valid values for ``<tag>``)


.. |downloads_xmlbuilder| image:: https://img.shields.io/conda/dn/bioconda/xmlbuilder.svg?style=flat
   :target: https://anaconda.org/bioconda/xmlbuilder
   :alt:   (downloads)
.. |docker_xmlbuilder| image:: https://quay.io/repository/biocontainers/xmlbuilder/status
   :target: https://quay.io/repository/biocontainers/xmlbuilder
.. _`xmlbuilder/tags`: https://quay.io/repository/biocontainers/xmlbuilder?tab=tags


.. raw:: html

    <script>
        var package = "xmlbuilder";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xmlbuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xmlbuilder/README.html