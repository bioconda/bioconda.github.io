:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mofapy2'
.. highlight: bash

mofapy2
=======

.. conda:recipe:: mofapy2
   :replaces_section_title:
   :noindex:

   Multi\-Omics Factor Analysis

   :homepage: https://github.com/bioFAM/mofapy2
   :license: LGPL / LGPL 3.0
   :recipe: /`mofapy2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mofapy2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mofapy2/meta.yaml>`_

   


.. conda:package:: mofapy2

   |downloads_mofapy2| |docker_mofapy2|

   :versions:
      
      

      ``0.7.2-0``,  ``0.7.1-0``

      

   
   :depends anndata: 
   :depends h5py: 
   :depends numpy: 
   :depends pandas: 
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

      mamba install mofapy2

   and update with::

      mamba update mofapy2

  To create a new environment, run::

      mamba create --name myenvname mofapy2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mofapy2:<tag>

   (see `mofapy2/tags`_ for valid values for ``<tag>``)


.. |downloads_mofapy2| image:: https://img.shields.io/conda/dn/bioconda/mofapy2.svg?style=flat
   :target: https://anaconda.org/bioconda/mofapy2
   :alt:   (downloads)
.. |docker_mofapy2| image:: https://quay.io/repository/biocontainers/mofapy2/status
   :target: https://quay.io/repository/biocontainers/mofapy2
.. _`mofapy2/tags`: https://quay.io/repository/biocontainers/mofapy2?tab=tags


.. raw:: html

    <script>
        var package = "mofapy2";
        var versions = ["0.7.2","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mofapy2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mofapy2/README.html