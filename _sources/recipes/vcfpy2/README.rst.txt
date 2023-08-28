:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfpy2'
.. highlight: bash

vcfpy2
======

.. conda:recipe:: vcfpy2
   :replaces_section_title:
   :noindex:

   Python 3 VCF library\, based on vcfpy.

   :homepage: https://github.com/robertopreste/vcfpy2
   :license: MIT / MIT
   :recipe: /`vcfpy2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfpy2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfpy2/meta.yaml>`_

   


.. conda:package:: vcfpy2

   |downloads_vcfpy2| |docker_vcfpy2|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends pysam: ``>=0.19.0``
   :depends python: ``>=3.6``
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

      mamba install vcfpy2

   and update with::

      mamba update vcfpy2

  To create a new environment, run::

      mamba create --name myenvname vcfpy2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcfpy2:<tag>

   (see `vcfpy2/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfpy2| image:: https://img.shields.io/conda/dn/bioconda/vcfpy2.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfpy2
   :alt:   (downloads)
.. |docker_vcfpy2| image:: https://quay.io/repository/biocontainers/vcfpy2/status
   :target: https://quay.io/repository/biocontainers/vcfpy2
.. _`vcfpy2/tags`: https://quay.io/repository/biocontainers/vcfpy2?tab=tags


.. raw:: html

    <script>
        var package = "vcfpy2";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfpy2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfpy2/README.html