:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anglerfish'
.. highlight: bash

anglerfish
==========

.. conda:recipe:: anglerfish
   :replaces_section_title:
   :noindex:

   Anglerfish\, a tool to demultiplex Illumina libraries from ONT data

   :homepage: https://github.com/remiolsen/anglerfish
   :license: MIT / MIT
   :recipe: /`anglerfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anglerfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anglerfish/meta.yaml>`_

   


.. conda:package:: anglerfish

   |downloads_anglerfish| |docker_anglerfish|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-0``

      

   
   :depends biopython: 
   :depends minimap2: 
   :depends numpy: 
   :depends python: ``3.9.*``
   :depends python-levenshtein: 
   :depends pyyaml: 
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

      mamba install anglerfish

   and update with::

      mamba update anglerfish

  To create a new environment, run::

      mamba create --name myenvname anglerfish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/anglerfish:<tag>

   (see `anglerfish/tags`_ for valid values for ``<tag>``)


.. |downloads_anglerfish| image:: https://img.shields.io/conda/dn/bioconda/anglerfish.svg?style=flat
   :target: https://anaconda.org/bioconda/anglerfish
   :alt:   (downloads)
.. |docker_anglerfish| image:: https://quay.io/repository/biocontainers/anglerfish/status
   :target: https://quay.io/repository/biocontainers/anglerfish
.. _`anglerfish/tags`: https://quay.io/repository/biocontainers/anglerfish?tab=tags


.. raw:: html

    <script>
        var package = "anglerfish";
        var versions = ["0.5.0","0.4.2","0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anglerfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anglerfish/README.html