:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sarscov2formatter'
.. highlight: bash

sarscov2formatter
=================

.. conda:recipe:: sarscov2formatter
   :replaces_section_title:
   :noindex:

   Formatter for Galaxy SARS\-CoV2 Selection Analysis Workflow

   :homepage: https://github.com/nickeener/sarscov2formatter
   :documentation: https://github.com/nickeener/sarscov2formatter/README.md
   
   :license: OTHER / AFL-3.0
   :recipe: /`sarscov2formatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sarscov2formatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sarscov2formatter/meta.yaml>`_

   


.. conda:package:: sarscov2formatter

   |downloads_sarscov2formatter| |docker_sarscov2formatter|

   :versions:
      
      

      ``1.0-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``

      

   
   :depends biopython: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends requests: 
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

      mamba install sarscov2formatter

   and update with::

      mamba update sarscov2formatter

  To create a new environment, run::

      mamba create --name myenvname sarscov2formatter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sarscov2formatter:<tag>

   (see `sarscov2formatter/tags`_ for valid values for ``<tag>``)


.. |downloads_sarscov2formatter| image:: https://img.shields.io/conda/dn/bioconda/sarscov2formatter.svg?style=flat
   :target: https://anaconda.org/bioconda/sarscov2formatter
   :alt:   (downloads)
.. |docker_sarscov2formatter| image:: https://quay.io/repository/biocontainers/sarscov2formatter/status
   :target: https://quay.io/repository/biocontainers/sarscov2formatter
.. _`sarscov2formatter/tags`: https://quay.io/repository/biocontainers/sarscov2formatter?tab=tags


.. raw:: html

    <script>
        var package = "sarscov2formatter";
        var versions = ["1.0","0.5.4","0.5.4","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sarscov2formatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sarscov2formatter/README.html