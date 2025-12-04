:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'domainator'
.. highlight: bash

domainator
==========

.. conda:recipe:: domainator
   :replaces_section_title:
   :noindex:

   A flexible suite for domain\-based gene neighborhood and protein analysis.

   :homepage: https://github.com/nebiolabs/domainator
   :documentation: https://github.com/nebiolabs/domainator/README.md
   
   :license: MIT / MIT
   :recipe: /`domainator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domainator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domainator/meta.yaml>`_

   


.. conda:package:: domainator

   |downloads_domainator| |docker_domainator|

   :versions:
      
      

      ``0.8.0-0``

      

   
   :depends bashplotlib: ``>=0.6.5``
   :depends cd-hit: ``>=4.8.1,<5.0``
   :depends diamond: ``>=2.0.0,<3.0``
   :depends flask: ``>=2.3``
   :depends h5py: ``>=3.9.0``
   :depends hmmer: ``>=3.3.2,<4.0``
   :depends jsonargparse: ``>=4.18.0``
   :depends jsonschema: ``>=4.0``
   :depends pandas: ``>=2.1.0``
   :depends psutil: ``>=5.9.6``
   :depends pyhmmer: ``>=0.10.2``
   :depends pyrodigal: ``>=3.0.1``
   :depends python: ``>=3.10,<3.14``
   :depends requests: ``>=2.31.0``
   :depends scipy: ``>=1.11.2``
   :depends seaborn: ``>=0.13.0``
   :depends tqdm: ``>=4.65.0``
   :depends umap-learn: ``>=0.5.4``
   :depends usearch: ``>=12.0_beta,<13.0``
   :depends werkzeug: ``>=2.3``
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

      mamba install domainator

   and update with::

      mamba update domainator

  To create a new environment, run::

      mamba create --name myenvname domainator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/domainator:<tag>

   (see `domainator/tags`_ for valid values for ``<tag>``)


.. |downloads_domainator| image:: https://img.shields.io/conda/dn/bioconda/domainator.svg?style=flat
   :target: https://anaconda.org/bioconda/domainator
   :alt:   (downloads)
.. |docker_domainator| image:: https://quay.io/repository/biocontainers/domainator/status
   :target: https://quay.io/repository/biocontainers/domainator
.. _`domainator/tags`: https://quay.io/repository/biocontainers/domainator?tab=tags


.. raw:: html

    <script>
        var package = "domainator";
        var versions = ["0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/domainator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/domainator/README.html