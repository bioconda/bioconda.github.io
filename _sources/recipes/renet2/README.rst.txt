:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'renet2'
.. highlight: bash

renet2
======

.. conda:recipe:: renet2
   :replaces_section_title:
   :noindex:

   RENET2\: High\-Performance Full\-text Gene\-Disease Relation Extraction with Iterative Training Data Expansion

   :homepage: https://github.com/sujunhao/RENET2
   :license: BSD / BSD-3-Clause
   :recipe: /`renet2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/renet2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/renet2/meta.yaml>`_

   


.. conda:package:: renet2

   |downloads_renet2| |docker_renet2|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends cudatoolkit: ``10.0.*``
   :depends numpy: ``1.18.1.*``
   :depends pandas: ``1.0.1.*``
   :depends python: ``>=3.7``
   :depends pytorch: ``1.2.0``
   :depends ruby: 
   :depends scikit-learn: ``0.22.2.post1.*``
   :depends tqdm: ``4.42.1.*``
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

      mamba install renet2

   and update with::

      mamba update renet2

  To create a new environment, run::

      mamba create --name myenvname renet2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/renet2:<tag>

   (see `renet2/tags`_ for valid values for ``<tag>``)


.. |downloads_renet2| image:: https://img.shields.io/conda/dn/bioconda/renet2.svg?style=flat
   :target: https://anaconda.org/bioconda/renet2
   :alt:   (downloads)
.. |docker_renet2| image:: https://quay.io/repository/biocontainers/renet2/status
   :target: https://quay.io/repository/biocontainers/renet2
.. _`renet2/tags`: https://quay.io/repository/biocontainers/renet2?tab=tags


.. raw:: html

    <script>
        var package = "renet2";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/renet2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/renet2/README.html