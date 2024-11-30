:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyexcelerator'
.. highlight: bash

pyexcelerator
=============

.. conda:recipe:: pyexcelerator
   :replaces_section_title:
   :noindex:

   generating Excel 97\+ files\; importing Excel 95\+ files\; Excel files dumper\; OLE2 files dumper\; xls2txt\, xls2csv\, xls2html

   :homepage: http://sourceforge.net/projects/pyexcelerator/
   :license: BSD / BSD License
   :recipe: /`pyexcelerator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyexcelerator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyexcelerator/meta.yaml>`_

   


.. conda:package:: pyexcelerator

   |downloads_pyexcelerator| |docker_pyexcelerator|

   :versions:
      
      

      ``0.6.4a-2``,  ``0.6.4a-0``

      

   
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

      mamba install pyexcelerator

   and update with::

      mamba update pyexcelerator

  To create a new environment, run::

      mamba create --name myenvname pyexcelerator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyexcelerator:<tag>

   (see `pyexcelerator/tags`_ for valid values for ``<tag>``)


.. |downloads_pyexcelerator| image:: https://img.shields.io/conda/dn/bioconda/pyexcelerator.svg?style=flat
   :target: https://anaconda.org/bioconda/pyexcelerator
   :alt:   (downloads)
.. |docker_pyexcelerator| image:: https://quay.io/repository/biocontainers/pyexcelerator/status
   :target: https://quay.io/repository/biocontainers/pyexcelerator
.. _`pyexcelerator/tags`: https://quay.io/repository/biocontainers/pyexcelerator?tab=tags


.. raw:: html

    <script>
        var package = "pyexcelerator";
        var versions = ["0.6.4a","0.6.4a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyexcelerator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyexcelerator/README.html