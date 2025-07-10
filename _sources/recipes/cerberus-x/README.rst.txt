:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cerberus-x'
.. highlight: bash

cerberus-x
==========

.. conda:recipe:: cerberus-x
   :replaces_section_title:
   :noindex:

   Versatile Functional Ontology Assignments via Hidden Markov Model \(HMM\) searching with environmental focus of shotgun \'omics data.

   :homepage: https://github.com/raw-lab/cerberus
   :documentation: https://github.com/raw-lab/cerberus/blob/v1.5.0/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cerberus-x <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cerberus-x>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cerberus-x/meta.yaml>`_

   


.. conda:package:: cerberus-x

   |downloads_cerberus-x| |docker_cerberus-x|

   :versions:
      
      

      ``1.5.0-0``

      

   
   :depends configargparse: 
   :depends dominate: 
   :depends flash2: 
   :depends hydrampp: 
   :depends importlib-resources: 
   :depends metaomestats: 
   :depends pandas: 
   :depends plotly: 
   :depends psutil: 
   :depends pyhmmer: 
   :depends pyrodigal: 
   :depends pyrodigal-gv: 
   :depends python: ``>=3.8``
   :depends python-kaleido: 
   :depends scikit-learn: 
   :depends setuptools: ``<70.0.0``
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

      mamba install cerberus-x

   and update with::

      mamba update cerberus-x

  To create a new environment, run::

      mamba create --name myenvname cerberus-x

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cerberus-x:<tag>

   (see `cerberus-x/tags`_ for valid values for ``<tag>``)


.. |downloads_cerberus-x| image:: https://img.shields.io/conda/dn/bioconda/cerberus-x.svg?style=flat
   :target: https://anaconda.org/bioconda/cerberus-x
   :alt:   (downloads)
.. |docker_cerberus-x| image:: https://quay.io/repository/biocontainers/cerberus-x/status
   :target: https://quay.io/repository/biocontainers/cerberus-x
.. _`cerberus-x/tags`: https://quay.io/repository/biocontainers/cerberus-x?tab=tags


.. raw:: html

    <script>
        var package = "cerberus-x";
        var versions = ["1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cerberus-x/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cerberus-x/README.html