:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metasnek'
.. highlight: bash

metasnek
========

.. conda:recipe:: metasnek
   :replaces_section_title:
   :noindex:

   Misc functions for metagenomics pipelines

   :homepage: https://github.com/beardymcjohnface/metasnek
   :license: MIT
   :recipe: /`metasnek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasnek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasnek/meta.yaml>`_

   


.. conda:package:: metasnek

   |downloads_metasnek| |docker_metasnek|

   :versions:
      
      

      ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``

      

   
   :depends python: ``>=3.8``
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

      mamba install metasnek

   and update with::

      mamba update metasnek

  To create a new environment, run::

      mamba create --name myenvname metasnek

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metasnek:<tag>

   (see `metasnek/tags`_ for valid values for ``<tag>``)


.. |downloads_metasnek| image:: https://img.shields.io/conda/dn/bioconda/metasnek.svg?style=flat
   :target: https://anaconda.org/bioconda/metasnek
   :alt:   (downloads)
.. |docker_metasnek| image:: https://quay.io/repository/biocontainers/metasnek/status
   :target: https://quay.io/repository/biocontainers/metasnek
.. _`metasnek/tags`: https://quay.io/repository/biocontainers/metasnek?tab=tags


.. raw:: html

    <script>
        var package = "metasnek";
        var versions = ["0.0.7","0.0.6","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metasnek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metasnek/README.html