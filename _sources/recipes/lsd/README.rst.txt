:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lsd'
.. highlight: bash

lsd
===

.. conda:recipe:: lsd
   :replaces_section_title:
   :noindex:

   The LAPPS Grid Services DSL \(LSD\). Used to invoke LAPPS web services from the command line.

   :homepage: http://github.com/lappsgrid-incubator/org.anc.lapps.dsl
   :license: Apache v2.0
   :recipe: /`lsd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lsd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lsd/meta.yaml>`_

   


.. conda:package:: lsd

   |downloads_lsd| |docker_lsd|

   :versions:
      
      

      ``2.2.3-3``,  ``2.2.3-2``,  ``2.2.3-1``,  ``2.2.3-0``

      

   
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

      mamba install lsd

   and update with::

      mamba update lsd

  To create a new environment, run::

      mamba create --name myenvname lsd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lsd:<tag>

   (see `lsd/tags`_ for valid values for ``<tag>``)


.. |downloads_lsd| image:: https://img.shields.io/conda/dn/bioconda/lsd.svg?style=flat
   :target: https://anaconda.org/bioconda/lsd
   :alt:   (downloads)
.. |docker_lsd| image:: https://quay.io/repository/biocontainers/lsd/status
   :target: https://quay.io/repository/biocontainers/lsd
.. _`lsd/tags`: https://quay.io/repository/biocontainers/lsd?tab=tags


.. raw:: html

    <script>
        var package = "lsd";
        var versions = ["2.2.3","2.2.3","2.2.3","2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lsd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lsd/README.html