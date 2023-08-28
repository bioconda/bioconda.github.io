:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ashleys-qc'
.. highlight: bash

ashleys-qc
==========

.. conda:recipe:: ashleys-qc
   :replaces_section_title:
   :noindex:

   Automated Selection of High quality Libraries for the Extensive analYsis of Strandseq data \(ASHLEYS\).

   :homepage: https://github.com/friendsofstrandseq/ashleys-qc
   :license: MIT / MIT License
   :recipe: /`ashleys-qc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ashleys-qc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ashleys-qc/meta.yaml>`_

   


.. conda:package:: ashleys-qc

   |downloads_ashleys-qc| |docker_ashleys-qc|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends matplotlib-base: 
   :depends pandas: 
   :depends pip: 
   :depends pysam: 
   :depends pytest: 
   :depends python: 
   :depends scikit-learn: 
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

      mamba install ashleys-qc

   and update with::

      mamba update ashleys-qc

  To create a new environment, run::

      mamba create --name myenvname ashleys-qc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ashleys-qc:<tag>

   (see `ashleys-qc/tags`_ for valid values for ``<tag>``)


.. |downloads_ashleys-qc| image:: https://img.shields.io/conda/dn/bioconda/ashleys-qc.svg?style=flat
   :target: https://anaconda.org/bioconda/ashleys-qc
   :alt:   (downloads)
.. |docker_ashleys-qc| image:: https://quay.io/repository/biocontainers/ashleys-qc/status
   :target: https://quay.io/repository/biocontainers/ashleys-qc
.. _`ashleys-qc/tags`: https://quay.io/repository/biocontainers/ashleys-qc?tab=tags


.. raw:: html

    <script>
        var package = "ashleys-qc";
        var versions = ["0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ashleys-qc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ashleys-qc/README.html