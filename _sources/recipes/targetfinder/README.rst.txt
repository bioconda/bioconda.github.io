:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'targetfinder'
.. highlight: bash

targetfinder
============

.. conda:recipe:: targetfinder
   :replaces_section_title:
   :noindex:

   Plant small RNA target prediction tool

   :homepage: https://github.com/carringtonlab/TargetFinder
   :license: MIT
   :recipe: /`targetfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targetfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targetfinder/meta.yaml>`_

   


.. conda:package:: targetfinder

   |downloads_targetfinder| |docker_targetfinder|

   :versions:
      
      

      ``1.7-4``,  ``1.7-3``,  ``1.7-2``,  ``1.7-1``,  ``1.7-0``

      

   
   :depends fasta3: 
   :depends perl: 
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

      mamba install targetfinder

   and update with::

      mamba update targetfinder

  To create a new environment, run::

      mamba create --name myenvname targetfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/targetfinder:<tag>

   (see `targetfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_targetfinder| image:: https://img.shields.io/conda/dn/bioconda/targetfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/targetfinder
   :alt:   (downloads)
.. |docker_targetfinder| image:: https://quay.io/repository/biocontainers/targetfinder/status
   :target: https://quay.io/repository/biocontainers/targetfinder
.. _`targetfinder/tags`: https://quay.io/repository/biocontainers/targetfinder?tab=tags


.. raw:: html

    <script>
        var package = "targetfinder";
        var versions = ["1.7","1.7","1.7","1.7","1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/targetfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/targetfinder/README.html