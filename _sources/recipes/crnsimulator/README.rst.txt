:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crnsimulator'
.. highlight: bash

crnsimulator
============

.. conda:recipe:: crnsimulator
   :replaces_section_title:
   :noindex:

   Simulate chemical recation networks \(CRNs\) using ordinary differential equations \(ODEs\).

   :homepage: https://github.com/bad-ants-fleet/crnsimulator
   :license: MIT
   :recipe: /`crnsimulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crnsimulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crnsimulator/meta.yaml>`_

   


.. conda:package:: crnsimulator

   |downloads_crnsimulator| |docker_crnsimulator|

   :versions:
      
      

      ``0.9-0``,  ``0.5-0``

      

   
   :depends networkx: 
   :depends numpy: 
   :depends pyparsing: 
   :depends python: 
   :depends scipy: 
   :depends seaborn: 
   :depends sympy: 
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

      mamba install crnsimulator

   and update with::

      mamba update crnsimulator

  To create a new environment, run::

      mamba create --name myenvname crnsimulator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crnsimulator:<tag>

   (see `crnsimulator/tags`_ for valid values for ``<tag>``)


.. |downloads_crnsimulator| image:: https://img.shields.io/conda/dn/bioconda/crnsimulator.svg?style=flat
   :target: https://anaconda.org/bioconda/crnsimulator
   :alt:   (downloads)
.. |docker_crnsimulator| image:: https://quay.io/repository/biocontainers/crnsimulator/status
   :target: https://quay.io/repository/biocontainers/crnsimulator
.. _`crnsimulator/tags`: https://quay.io/repository/biocontainers/crnsimulator?tab=tags


.. raw:: html

    <script>
        var package = "crnsimulator";
        var versions = ["0.9","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crnsimulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crnsimulator/README.html