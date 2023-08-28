:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cage'
.. highlight: bash

cage
====

.. conda:recipe:: cage
   :replaces_section_title:
   :noindex:

   Changepoint Analysis for Efficient Variant Calling

   :homepage: https://github.com/adambloniarz/CAGe
   :license: Apache v2
   :recipe: /`cage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cage/meta.yaml>`_

   


.. conda:package:: cage

   |downloads_cage| |docker_cage|

   :versions:
      
      

      ``2016.05.13-6``,  ``2016.05.13-5``,  ``2016.05.13-4``,  ``2016.05.13-3``,  ``2016.05.13-2``,  ``2016.05.13-1``,  ``2016.05.13-0``,  ``2016.01.24-0``

      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libsqlite: ``>=3.41.2,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends python: 
   :depends sqlite: 
   :depends tclap: 
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

      mamba install cage

   and update with::

      mamba update cage

  To create a new environment, run::

      mamba create --name myenvname cage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cage:<tag>

   (see `cage/tags`_ for valid values for ``<tag>``)


.. |downloads_cage| image:: https://img.shields.io/conda/dn/bioconda/cage.svg?style=flat
   :target: https://anaconda.org/bioconda/cage
   :alt:   (downloads)
.. |docker_cage| image:: https://quay.io/repository/biocontainers/cage/status
   :target: https://quay.io/repository/biocontainers/cage
.. _`cage/tags`: https://quay.io/repository/biocontainers/cage?tab=tags


.. raw:: html

    <script>
        var package = "cage";
        var versions = ["2016.05.13","2016.05.13","2016.05.13","2016.05.13","2016.05.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cage/README.html