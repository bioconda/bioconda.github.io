:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'forwardgenomics'
.. highlight: bash

forwardgenomics
===============

.. conda:recipe:: forwardgenomics
   :replaces_section_title:
   :noindex:

   Forward Genomics is a framework to associate phenotypic differences between species to differences in their genomes


   :homepage: https://github.com/hillerlab/ForwardGenomics
   :license: MIT license
   :recipe: /`forwardgenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forwardgenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forwardgenomics/meta.yaml>`_

   


.. conda:package:: forwardgenomics

   |downloads_forwardgenomics| |docker_forwardgenomics|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends perl: 
   :depends phast: 
   :depends r-base: 
   :depends r-caper: 
   :depends r-isotone: 
   :depends r-phangorn: 
   :depends r-weights: 
   :depends r-xtermstyle: 
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

      mamba install forwardgenomics

   and update with::

      mamba update forwardgenomics

  To create a new environment, run::

      mamba create --name myenvname forwardgenomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/forwardgenomics:<tag>

   (see `forwardgenomics/tags`_ for valid values for ``<tag>``)


.. |downloads_forwardgenomics| image:: https://img.shields.io/conda/dn/bioconda/forwardgenomics.svg?style=flat
   :target: https://anaconda.org/bioconda/forwardgenomics
   :alt:   (downloads)
.. |docker_forwardgenomics| image:: https://quay.io/repository/biocontainers/forwardgenomics/status
   :target: https://quay.io/repository/biocontainers/forwardgenomics
.. _`forwardgenomics/tags`: https://quay.io/repository/biocontainers/forwardgenomics?tab=tags


.. raw:: html

    <script>
        var package = "forwardgenomics";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/forwardgenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/forwardgenomics/README.html