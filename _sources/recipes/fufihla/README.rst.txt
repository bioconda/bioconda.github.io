:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fufihla'
.. highlight: bash

fufihla
=======

.. conda:recipe:: fufihla
   :replaces_section_title:
   :noindex:

   HLA typing pipeline for long reads \(FuFiHLA\) with a location\-aware CLI.

   :homepage: https://github.com/jingqing-hu/FuFiHLA
   :license: MIT
   :recipe: /`fufihla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fufihla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fufihla/meta.yaml>`_

   


.. conda:package:: fufihla

   |downloads_fufihla| |docker_fufihla|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends bcftools: 
   :depends htslib: 
   :depends longcalld: 
   :depends minimap2: 
   :depends python: 
   :depends samtools: 
   :depends seqtk: 
   :depends unzip: 
   :depends wget: 
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

      mamba install fufihla

   and update with::

      mamba update fufihla

  To create a new environment, run::

      mamba create --name myenvname fufihla

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fufihla:<tag>

   (see `fufihla/tags`_ for valid values for ``<tag>``)


.. |downloads_fufihla| image:: https://img.shields.io/conda/dn/bioconda/fufihla.svg?style=flat
   :target: https://anaconda.org/bioconda/fufihla
   :alt:   (downloads)
.. |docker_fufihla| image:: https://quay.io/repository/biocontainers/fufihla/status
   :target: https://quay.io/repository/biocontainers/fufihla
.. _`fufihla/tags`: https://quay.io/repository/biocontainers/fufihla?tab=tags


.. raw:: html

    <script>
        var package = "fufihla";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fufihla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fufihla/README.html