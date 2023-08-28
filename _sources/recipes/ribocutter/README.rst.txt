:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribocutter'
.. highlight: bash

ribocutter
==========

.. conda:recipe:: ribocutter
   :replaces_section_title:
   :noindex:

   Design oligos to produce sgRNAs for abundant sequences in a fastq file

   :homepage: https://github.com/Delayed-Gitification/ribocutter.git
   :license: MIT / MIT
   :recipe: /`ribocutter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribocutter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribocutter/meta.yaml>`_

   


.. conda:package:: ribocutter

   |downloads_ribocutter| |docker_ribocutter|

   :versions:
      
      

      ``0.1.1-0``,  ``0.0.4-0``,  ``0.0.1-0``

      

   
   :depends dnaio: 
   :depends pandas: 
   :depends python: 
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

      mamba install ribocutter

   and update with::

      mamba update ribocutter

  To create a new environment, run::

      mamba create --name myenvname ribocutter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ribocutter:<tag>

   (see `ribocutter/tags`_ for valid values for ``<tag>``)


.. |downloads_ribocutter| image:: https://img.shields.io/conda/dn/bioconda/ribocutter.svg?style=flat
   :target: https://anaconda.org/bioconda/ribocutter
   :alt:   (downloads)
.. |docker_ribocutter| image:: https://quay.io/repository/biocontainers/ribocutter/status
   :target: https://quay.io/repository/biocontainers/ribocutter
.. _`ribocutter/tags`: https://quay.io/repository/biocontainers/ribocutter?tab=tags


.. raw:: html

    <script>
        var package = "ribocutter";
        var versions = ["0.1.1","0.0.4","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribocutter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribocutter/README.html