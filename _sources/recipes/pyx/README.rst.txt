:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyx'
.. highlight: bash

pyx
===

.. conda:recipe:: pyx
   :replaces_section_title:
   :noindex:

   Python package for the generation of PostScript\, PDF\, and SVG files

   :homepage: http://pyx.sourceforge.net/
   :license: GNU General Public License (GPL)
   :recipe: /`pyx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyx/meta.yaml>`_

   


.. conda:package:: pyx

   |downloads_pyx| |docker_pyx|

   :versions:
      
      

      ``0.14.1-1``,  ``0.14.1-0``,  ``0.12.1-1``,  ``0.12.1-0``

      

   
   :depends python: ``>=3.6,<3.7.0a0``
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

      mamba install pyx

   and update with::

      mamba update pyx

  To create a new environment, run::

      mamba create --name myenvname pyx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyx:<tag>

   (see `pyx/tags`_ for valid values for ``<tag>``)


.. |downloads_pyx| image:: https://img.shields.io/conda/dn/bioconda/pyx.svg?style=flat
   :target: https://anaconda.org/bioconda/pyx
   :alt:   (downloads)
.. |docker_pyx| image:: https://quay.io/repository/biocontainers/pyx/status
   :target: https://quay.io/repository/biocontainers/pyx
.. _`pyx/tags`: https://quay.io/repository/biocontainers/pyx?tab=tags


.. raw:: html

    <script>
        var package = "pyx";
        var versions = ["0.14.1","0.14.1","0.12.1","0.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyx/README.html