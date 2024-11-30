:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gepard'
.. highlight: bash

gepard
======

.. conda:recipe:: gepard
   :replaces_section_title:
   :noindex:

   Genome Pair Rapid Dotter \(gepard\).

   :homepage: https://cube.univie.ac.at/gepard
   :developer docs: https://github.com/univieCUBE/gepard
   :license: MIT
   :recipe: /`gepard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gepard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gepard/meta.yaml>`_

   


.. conda:package:: gepard

   |downloads_gepard| |docker_gepard|

   :versions:
      
      

      ``2.1.0-1``,  ``2.1.0-0``,  ``1.40.0-1``,  ``1.40.0-0``

      

   
   :depends openjdk: 
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

      mamba install gepard

   and update with::

      mamba update gepard

  To create a new environment, run::

      mamba create --name myenvname gepard

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gepard:<tag>

   (see `gepard/tags`_ for valid values for ``<tag>``)


.. |downloads_gepard| image:: https://img.shields.io/conda/dn/bioconda/gepard.svg?style=flat
   :target: https://anaconda.org/bioconda/gepard
   :alt:   (downloads)
.. |docker_gepard| image:: https://quay.io/repository/biocontainers/gepard/status
   :target: https://quay.io/repository/biocontainers/gepard
.. _`gepard/tags`: https://quay.io/repository/biocontainers/gepard?tab=tags


.. raw:: html

    <script>
        var package = "gepard";
        var versions = ["2.1.0","2.1.0","1.40.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gepard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gepard/README.html