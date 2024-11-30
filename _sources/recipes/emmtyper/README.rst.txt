:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emmtyper'
.. highlight: bash

emmtyper
========

.. conda:recipe:: emmtyper
   :replaces_section_title:
   :noindex:

   Streptococcus pyogenes in silico EMM typer

   :homepage: https://github.com/MDUPHL/emmtyper
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`emmtyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emmtyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emmtyper/meta.yaml>`_

   


.. conda:package:: emmtyper

   |downloads_emmtyper| |docker_emmtyper|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends blast: ``>=2.6.0``
   :depends click: 
   :depends ispcr: 
   :depends numpy: ``>=1.15.0``
   :depends python: ``>=3``
   :depends python-dateutil: 
   :depends scipy: ``>=1.1.0``
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

      mamba install emmtyper

   and update with::

      mamba update emmtyper

  To create a new environment, run::

      mamba create --name myenvname emmtyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/emmtyper:<tag>

   (see `emmtyper/tags`_ for valid values for ``<tag>``)


.. |downloads_emmtyper| image:: https://img.shields.io/conda/dn/bioconda/emmtyper.svg?style=flat
   :target: https://anaconda.org/bioconda/emmtyper
   :alt:   (downloads)
.. |docker_emmtyper| image:: https://quay.io/repository/biocontainers/emmtyper/status
   :target: https://quay.io/repository/biocontainers/emmtyper
.. _`emmtyper/tags`: https://quay.io/repository/biocontainers/emmtyper?tab=tags


.. raw:: html

    <script>
        var package = "emmtyper";
        var versions = ["0.2.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emmtyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emmtyper/README.html