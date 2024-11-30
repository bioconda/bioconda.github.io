:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcferr'
.. highlight: bash

vcferr
======

.. conda:recipe:: vcferr
   :replaces_section_title:
   :noindex:

   Probabilistic VCF genotype error simulation

   :homepage: https://github.com/signaturescience/vcferr
   :license: MIT
   :recipe: /`vcferr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcferr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcferr/meta.yaml>`_

   


.. conda:package:: vcferr

   |downloads_vcferr| |docker_vcferr|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends click: 
   :depends pysam: 
   :depends python: 
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

      mamba install vcferr

   and update with::

      mamba update vcferr

  To create a new environment, run::

      mamba create --name myenvname vcferr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcferr:<tag>

   (see `vcferr/tags`_ for valid values for ``<tag>``)


.. |downloads_vcferr| image:: https://img.shields.io/conda/dn/bioconda/vcferr.svg?style=flat
   :target: https://anaconda.org/bioconda/vcferr
   :alt:   (downloads)
.. |docker_vcferr| image:: https://quay.io/repository/biocontainers/vcferr/status
   :target: https://quay.io/repository/biocontainers/vcferr
.. _`vcferr/tags`: https://quay.io/repository/biocontainers/vcferr?tab=tags


.. raw:: html

    <script>
        var package = "vcferr";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcferr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcferr/README.html