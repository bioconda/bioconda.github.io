:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcontact3'
.. highlight: bash

vcontact3
=========

.. conda:recipe:: vcontact3
   :replaces_section_title:
   :noindex:

   Viral Contig Automatic Clustering and Taxonomy

   :homepage: https://bitbucket.org/MAVERICLab/vcontact3
   :documentation: https://bitbucket.org/MAVERICLab/vcontact3/src/master/README.md
   
   :license: GPL / GPLv3
   :recipe: /`vcontact3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcontact3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcontact3/meta.yaml>`_

   


.. conda:package:: vcontact3

   |downloads_vcontact3| |docker_vcontact3|

   :versions:
      
      

      ``3.1.6-0``,  ``3.1.4-1``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.0.5-0``,  ``3.0.3-0``,  ``3.0.0.b74-0``,  ``3.0.0.b65-0``,  ``3.0.0.b38-0``

      

   
   :depends biopython: ``>=1.81``
   :depends dill: ``>=0.3.6``
   :depends ete3: ``>=3.1.3``
   :depends fastcluster: ``>=1.2.6,<1.3.0``
   :depends jinja2: ``>=3.1.6``
   :depends joblib: ``>=1.2.0``
   :depends markupsafe: ``>=2.0.1``
   :depends matplotlib-base: ``>=3.7.1``
   :depends mmseqs2: ``>=15.6f452``
   :depends networkit: ``<=11.0``
   :depends numpy: ``>=1.23.5,<2.0.0``
   :depends pandas: ``>=2.1.1``
   :depends pip: 
   :depends psutil: ``>=5.9.5``
   :depends pyarrow: ``>=14.0.1``
   :depends pyrodigal: ``>=2.3.0``
   :depends pyrodigal-gv: ``>=0.3.1``
   :depends pytables: ``>=3.8.0``
   :depends python: ``>=3.10,<3.12``
   :depends scikit-bio: ``>=0.5.8``
   :depends scikit-learn: ``>=1.5.0``
   :depends scipy: ``>=1.10.1``
   :depends seaborn: ``>=0.12.1``
   :depends swifter: ``>=1.3.4``
   :depends tqdm: ``>=4.65.0``
   :depends upsetplot: ``>=0.7.0``
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

      mamba install vcontact3

   and update with::

      mamba update vcontact3

  To create a new environment, run::

      mamba create --name myenvname vcontact3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcontact3:<tag>

   (see `vcontact3/tags`_ for valid values for ``<tag>``)


.. |downloads_vcontact3| image:: https://img.shields.io/conda/dn/bioconda/vcontact3.svg?style=flat
   :target: https://anaconda.org/bioconda/vcontact3
   :alt:   (downloads)
.. |docker_vcontact3| image:: https://quay.io/repository/biocontainers/vcontact3/status
   :target: https://quay.io/repository/biocontainers/vcontact3
.. _`vcontact3/tags`: https://quay.io/repository/biocontainers/vcontact3?tab=tags


.. raw:: html

    <script>
        var package = "vcontact3";
        var versions = ["3.1.6","3.1.4","3.1.4","3.1.3","3.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcontact3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcontact3/README.html