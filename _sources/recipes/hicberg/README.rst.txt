:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hicberg'
.. highlight: bash

hicberg
=======

.. conda:recipe:: hicberg
   :replaces_section_title:
   :noindex:

   Statistical profiling based tool for contact data \(Hi\-C\, ChIA\-PET\, Capture\-C\, etc.\) and genomics data reconstruction

   :homepage: https://github.com/sebgra/hicberg
   :license: MIT / MIT
   :recipe: /`hicberg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicberg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicberg/meta.yaml>`_

   


.. conda:package:: hicberg

   |downloads_hicberg| |docker_hicberg|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioframe: 
   :depends biopython: 
   :depends click: 
   :depends cooler: 
   :depends funcy: 
   :depends hicstuff: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends statsmodels: 
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

      mamba install hicberg

   and update with::

      mamba update hicberg

  To create a new environment, run::

      mamba create --name myenvname hicberg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hicberg:<tag>

   (see `hicberg/tags`_ for valid values for ``<tag>``)


.. |downloads_hicberg| image:: https://img.shields.io/conda/dn/bioconda/hicberg.svg?style=flat
   :target: https://anaconda.org/bioconda/hicberg
   :alt:   (downloads)
.. |docker_hicberg| image:: https://quay.io/repository/biocontainers/hicberg/status
   :target: https://quay.io/repository/biocontainers/hicberg
.. _`hicberg/tags`: https://quay.io/repository/biocontainers/hicberg?tab=tags


.. raw:: html

    <script>
        var package = "hicberg";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicberg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicberg/README.html