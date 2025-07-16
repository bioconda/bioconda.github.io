:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unetcoreograph'
.. highlight: bash

unetcoreograph
==============

.. conda:recipe:: unetcoreograph
   :replaces_section_title:
   :noindex:

   UNetCoreograph \- Automated segmentation of nuclei in 3D imaging data.

   :homepage: https://github.com/HMS-IDAC/UNetCoreograph
   :license: MIT / MIT
   :recipe: /`unetcoreograph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unetcoreograph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unetcoreograph/meta.yaml>`_

   UNetCoreograph is a Python tool for segmenting and analyzing nuclei in tissue images using a U\-Net based model.



.. conda:package:: unetcoreograph

   |downloads_unetcoreograph| |docker_unetcoreograph|

   :versions:
      
      

      ``2.4.4-0``,  ``2.4.3-0``

      

   
   :depends h5py: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends scikit-image: 
   :depends scipy: 
   :depends tifffile: 
   :depends tqdm: 
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

      mamba install unetcoreograph

   and update with::

      mamba update unetcoreograph

  To create a new environment, run::

      mamba create --name myenvname unetcoreograph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unetcoreograph:<tag>

   (see `unetcoreograph/tags`_ for valid values for ``<tag>``)


.. |downloads_unetcoreograph| image:: https://img.shields.io/conda/dn/bioconda/unetcoreograph.svg?style=flat
   :target: https://anaconda.org/bioconda/unetcoreograph
   :alt:   (downloads)
.. |docker_unetcoreograph| image:: https://quay.io/repository/biocontainers/unetcoreograph/status
   :target: https://quay.io/repository/biocontainers/unetcoreograph
.. _`unetcoreograph/tags`: https://quay.io/repository/biocontainers/unetcoreograph?tab=tags


.. raw:: html

    <script>
        var package = "unetcoreograph";
        var versions = ["2.4.4","2.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unetcoreograph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unetcoreograph/README.html