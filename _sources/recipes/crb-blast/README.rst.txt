:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crb-blast'
.. highlight: bash

crb-blast
=========

.. conda:recipe:: crb-blast
   :replaces_section_title:
   :noindex:

   Conditional Reciprocal Best BLAST \- high confidence ortholog assignment.

   :homepage: https://github.com/cboursnell/crb-blast
   :license: MIT
   :recipe: /`crb-blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crb-blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crb-blast/meta.yaml>`_

   


.. conda:package:: crb-blast

   |downloads_crb-blast| |docker_crb-blast|

   :versions:
      
      

      ``0.6.9-0``,  ``0.6.6-2``,  ``0.6.6-1``,  ``0.6.6-0``

      

   
   :depends blast: 
   :depends ruby: ``>=2.4.4``
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

      mamba install crb-blast

   and update with::

      mamba update crb-blast

  To create a new environment, run::

      mamba create --name myenvname crb-blast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crb-blast:<tag>

   (see `crb-blast/tags`_ for valid values for ``<tag>``)


.. |downloads_crb-blast| image:: https://img.shields.io/conda/dn/bioconda/crb-blast.svg?style=flat
   :target: https://anaconda.org/bioconda/crb-blast
   :alt:   (downloads)
.. |docker_crb-blast| image:: https://quay.io/repository/biocontainers/crb-blast/status
   :target: https://quay.io/repository/biocontainers/crb-blast
.. _`crb-blast/tags`: https://quay.io/repository/biocontainers/crb-blast?tab=tags


.. raw:: html

    <script>
        var package = "crb-blast";
        var versions = ["0.6.9","0.6.6","0.6.6","0.6.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crb-blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crb-blast/README.html