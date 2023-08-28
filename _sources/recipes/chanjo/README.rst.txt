:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chanjo'
.. highlight: bash

chanjo
======

.. conda:recipe:: chanjo
   :replaces_section_title:
   :noindex:

   Coverage analysis tool for clinical sequencing

   :homepage: http://www.chanjo.co/
   :license: MIT License
   :recipe: /`chanjo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chanjo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chanjo/meta.yaml>`_

   


.. conda:package:: chanjo

   |downloads_chanjo| |docker_chanjo|

   :versions:
      
      

      ``3.3.0-0``,  ``3.1.1-0``

      

   
   :depends click: 
   :depends path.py: 
   :depends python: ``2.7*``
   :depends pyyaml: 
   :depends sambamba: 
   :depends setuptools: 
   :depends setuptools: 
   :depends sqlalchemy: ``>=0.8.2``
   :depends toolz: 
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

      mamba install chanjo

   and update with::

      mamba update chanjo

  To create a new environment, run::

      mamba create --name myenvname chanjo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chanjo:<tag>

   (see `chanjo/tags`_ for valid values for ``<tag>``)


.. |downloads_chanjo| image:: https://img.shields.io/conda/dn/bioconda/chanjo.svg?style=flat
   :target: https://anaconda.org/bioconda/chanjo
   :alt:   (downloads)
.. |docker_chanjo| image:: https://quay.io/repository/biocontainers/chanjo/status
   :target: https://quay.io/repository/biocontainers/chanjo
.. _`chanjo/tags`: https://quay.io/repository/biocontainers/chanjo?tab=tags


.. raw:: html

    <script>
        var package = "chanjo";
        var versions = ["3.3.0","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chanjo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chanjo/README.html