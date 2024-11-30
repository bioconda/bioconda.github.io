:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multitax'
.. highlight: bash

multitax
========

.. conda:recipe:: multitax
   :replaces_section_title:
   :noindex:

   Python package to obtain\, parse and explore biological taxonomies

   :homepage: https://github.com/pirovc/multitax
   :license: MIT / MIT License
   :recipe: /`multitax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multitax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multitax/meta.yaml>`_

   MultiTax is a Python package that provides a common and generalized set 
   of functions to download\, parse\, filter and explore multiple biological 
   taxonomies \(GTDB\, NCBI\, Silva\, Greengenes\, Open Tree taxonomy\) and 
   custom formatted taxonomies.



.. conda:package:: multitax

   |downloads_multitax| |docker_multitax|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends python: ``>=3.4``
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

      mamba install multitax

   and update with::

      mamba update multitax

  To create a new environment, run::

      mamba create --name myenvname multitax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/multitax:<tag>

   (see `multitax/tags`_ for valid values for ``<tag>``)


.. |downloads_multitax| image:: https://img.shields.io/conda/dn/bioconda/multitax.svg?style=flat
   :target: https://anaconda.org/bioconda/multitax
   :alt:   (downloads)
.. |docker_multitax| image:: https://quay.io/repository/biocontainers/multitax/status
   :target: https://quay.io/repository/biocontainers/multitax
.. _`multitax/tags`: https://quay.io/repository/biocontainers/multitax?tab=tags


.. raw:: html

    <script>
        var package = "multitax";
        var versions = ["1.3.1","1.3.0","1.2.1","1.2.0","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multitax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multitax/README.html