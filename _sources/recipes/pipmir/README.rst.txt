:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pipmir'
.. highlight: bash

pipmir
======

.. conda:recipe:: pipmir
   :replaces_section_title:
   :noindex:

   We developed the PIPmiR algorithm to identify novel plant miRNA.

   :homepage: https://ohlerlab.mdc-berlin.de/software/Pipeline_for_the_Identification_of_Plant_miRNAs_84
   :license: PIPmiR is provided for academic use only, if you wish to use it in another setting please contact Uwe Ohler.
   :recipe: /`pipmir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipmir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipmir/meta.yaml>`_
   :links: biotools: :biotools:`pipmir`, doi: :doi:`10.1101/gr.123547.111`

   


.. conda:package:: pipmir

   |downloads_pipmir| |docker_pipmir|

   :versions:
      
      

      ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``

      

   
   :depends openjdk: 
   :depends samtools: 
   :depends viennarna: ``>=2.6.4``
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

      mamba install pipmir

   and update with::

      mamba update pipmir

  To create a new environment, run::

      mamba create --name myenvname pipmir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pipmir:<tag>

   (see `pipmir/tags`_ for valid values for ``<tag>``)


.. |downloads_pipmir| image:: https://img.shields.io/conda/dn/bioconda/pipmir.svg?style=flat
   :target: https://anaconda.org/bioconda/pipmir
   :alt:   (downloads)
.. |docker_pipmir| image:: https://quay.io/repository/biocontainers/pipmir/status
   :target: https://quay.io/repository/biocontainers/pipmir
.. _`pipmir/tags`: https://quay.io/repository/biocontainers/pipmir?tab=tags


.. raw:: html

    <script>
        var package = "pipmir";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pipmir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pipmir/README.html