:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sidr'
.. highlight: bash

sidr
====

.. conda:recipe:: sidr
   :replaces_section_title:
   :noindex:

   Sequence Idenification using Decision tRees\; a tool to classify DNA reads using machine learning models.

   :homepage: https://github.com/damurdock/SIDR
   :license: MIT / MIT
   :recipe: /`sidr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sidr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sidr/meta.yaml>`_

   


.. conda:package:: sidr

   |downloads_sidr| |docker_sidr|

   :versions:
      
      

      ``0.0.2a2-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: ``>=0.8.1``
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install sidr

   and update with::

      mamba update sidr

  To create a new environment, run::

      mamba create --name myenvname sidr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sidr:<tag>

   (see `sidr/tags`_ for valid values for ``<tag>``)


.. |downloads_sidr| image:: https://img.shields.io/conda/dn/bioconda/sidr.svg?style=flat
   :target: https://anaconda.org/bioconda/sidr
   :alt:   (downloads)
.. |docker_sidr| image:: https://quay.io/repository/biocontainers/sidr/status
   :target: https://quay.io/repository/biocontainers/sidr
.. _`sidr/tags`: https://quay.io/repository/biocontainers/sidr?tab=tags


.. raw:: html

    <script>
        var package = "sidr";
        var versions = ["0.0.2a2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sidr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sidr/README.html