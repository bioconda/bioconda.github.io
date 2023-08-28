:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methphaser'
.. highlight: bash

methphaser
==========

.. conda:recipe:: methphaser
   :replaces_section_title:
   :noindex:

   MethPhaser\: methylation\-based haplotype phasing of human genomes

   :homepage: https://github.com/treangenlab/methphaser
   :license: MIT License
   :recipe: /`methphaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methphaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methphaser/meta.yaml>`_

   


.. conda:package:: methphaser

   |downloads_methphaser| |docker_methphaser|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends matplotlib-base: 
   :depends pandas: 
   :depends pysam: 
   :depends scipy: 
   :depends seaborn: 
   :depends tqdm: 
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

      mamba install methphaser

   and update with::

      mamba update methphaser

  To create a new environment, run::

      mamba create --name myenvname methphaser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/methphaser:<tag>

   (see `methphaser/tags`_ for valid values for ``<tag>``)


.. |downloads_methphaser| image:: https://img.shields.io/conda/dn/bioconda/methphaser.svg?style=flat
   :target: https://anaconda.org/bioconda/methphaser
   :alt:   (downloads)
.. |docker_methphaser| image:: https://quay.io/repository/biocontainers/methphaser/status
   :target: https://quay.io/repository/biocontainers/methphaser
.. _`methphaser/tags`: https://quay.io/repository/biocontainers/methphaser?tab=tags


.. raw:: html

    <script>
        var package = "methphaser";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methphaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methphaser/README.html