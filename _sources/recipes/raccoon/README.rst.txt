:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'raccoon'
.. highlight: bash

raccoon
=======

.. conda:recipe:: raccoon
   :replaces_section_title:
   :noindex:

   Raccoon \- Rigorous Alignment Curation\: Cleanup Of Outliers and Noise.

   :homepage: https://github.com/artic-network/raccoon
   :documentation: https://github.com/artic-network/raccoon/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`raccoon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raccoon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raccoon/meta.yaml>`_

   


.. conda:package:: raccoon

   |downloads_raccoon| |docker_raccoon|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends baltic: 
   :depends biopython: ``>=1.79``
   :depends jinja2: ``>=3.1.0``
   :depends matplotlib-base: ``>=3.3.1``
   :depends numpy: ``>=1.20.0``
   :depends pandas: ``>=1.3.0``
   :depends plotly: ``>=5.0.0``
   :depends python: ``>=3.10``
   :depends scipy: 
   :depends seaborn: 
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

      mamba install raccoon

   and update with::

      mamba update raccoon

  To create a new environment, run::

      mamba create --name myenvname raccoon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/raccoon:<tag>

   (see `raccoon/tags`_ for valid values for ``<tag>``)


.. |downloads_raccoon| image:: https://img.shields.io/conda/dn/bioconda/raccoon.svg?style=flat
   :target: https://anaconda.org/bioconda/raccoon
   :alt:   (downloads)
.. |docker_raccoon| image:: https://quay.io/repository/biocontainers/raccoon/status
   :target: https://quay.io/repository/biocontainers/raccoon
.. _`raccoon/tags`: https://quay.io/repository/biocontainers/raccoon?tab=tags


.. raw:: html

    <script>
        var package = "raccoon";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/raccoon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/raccoon/README.html