:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio-variation'
.. highlight: bash

bcbio-variation
===============

.. conda:recipe:: bcbio-variation
   :replaces_section_title:
   :noindex:

   Toolkit to analyze genomic variation data\, built on the GATK with Clojure

   :homepage: https://github.com/chapmanb/bcbio.variation
   :license: MIT
   :recipe: /`bcbio-variation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-variation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-variation/meta.yaml>`_

   


.. conda:package:: bcbio-variation

   |downloads_bcbio-variation| |docker_bcbio-variation|

   :versions:
      
      

      ``0.2.6-4``,  ``0.2.6-3``,  ``0.2.6-2``,  ``0.2.6-1``,  ``0.2.6-0``

      

   
   :depends openjdk: 
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

      mamba install bcbio-variation

   and update with::

      mamba update bcbio-variation

  To create a new environment, run::

      mamba create --name myenvname bcbio-variation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bcbio-variation:<tag>

   (see `bcbio-variation/tags`_ for valid values for ``<tag>``)


.. |downloads_bcbio-variation| image:: https://img.shields.io/conda/dn/bioconda/bcbio-variation.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbio-variation
   :alt:   (downloads)
.. |docker_bcbio-variation| image:: https://quay.io/repository/biocontainers/bcbio-variation/status
   :target: https://quay.io/repository/biocontainers/bcbio-variation
.. _`bcbio-variation/tags`: https://quay.io/repository/biocontainers/bcbio-variation?tab=tags


.. raw:: html

    <script>
        var package = "bcbio-variation";
        var versions = ["0.2.6","0.2.6","0.2.6","0.2.6","0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-variation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-variation/README.html