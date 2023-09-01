:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neatms'
.. highlight: bash

neatms
======

.. conda:recipe:: neatms
   :replaces_section_title:
   :noindex:

   NeatMS is an open source python package for untargeted LCMS deep learning peak curation

   :homepage: https://github.com/bihealth/NeatMS
   :documentation: https://neatms.readthedocs.io/
   
   :license: MIT / MIT License
   :recipe: /`neatms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neatms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neatms/meta.yaml>`_

   


.. conda:package:: neatms

   |downloads_neatms| |docker_neatms|

   :versions:
      
      

      ``0.7-0``,  ``0.6-0``,  ``0.1-0``

      

   
   :depends h5py: 
   :depends keras: 
   :depends numpy: 
   :depends pandas: 
   :depends pillow: 
   :depends pymzml: 
   :depends python: ``>=3.6``
   :depends scikit-learn: 
   :depends tensorflow: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install neatms

   and update with::

      mamba update neatms

  To create a new environment, run::

      mamba create --name myenvname neatms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/neatms:<tag>

   (see `neatms/tags`_ for valid values for ``<tag>``)


.. |downloads_neatms| image:: https://img.shields.io/conda/dn/bioconda/neatms.svg?style=flat
   :target: https://anaconda.org/bioconda/neatms
   :alt:   (downloads)
.. |docker_neatms| image:: https://quay.io/repository/biocontainers/neatms/status
   :target: https://quay.io/repository/biocontainers/neatms
.. _`neatms/tags`: https://quay.io/repository/biocontainers/neatms?tab=tags


.. raw:: html

    <script>
        var package = "neatms";
        var versions = ["0.7","0.6","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neatms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neatms/README.html