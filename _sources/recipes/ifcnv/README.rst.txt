:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ifcnv'
.. highlight: bash

ifcnv
=====

.. conda:recipe:: ifcnv
   :replaces_section_title:
   :noindex:

   ifCNV\: a novel isolation\-forest\-based package to detect copy number variations from various NGS datasets.

   :homepage: https://github.com/SimCab-CHU/ifCNV
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`ifcnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ifcnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ifcnv/meta.yaml>`_

   


.. conda:package:: ifcnv

   |downloads_ifcnv| |docker_ifcnv|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends numpy: ``>=1.21``
   :depends pandas: ``>=1.3``
   :depends plotly: ``>=5.4``
   :depends pybedtools: ``>=0.8.2``
   :depends python: 
   :depends scikit-learn: ``>=1.0.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ifcnv

   and update with::

      mamba update ifcnv

  To create a new environment, run::

      mamba create --name myenvname ifcnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ifcnv:<tag>

   (see `ifcnv/tags`_ for valid values for ``<tag>``)


.. |downloads_ifcnv| image:: https://img.shields.io/conda/dn/bioconda/ifcnv.svg?style=flat
   :target: https://anaconda.org/bioconda/ifcnv
   :alt:   (downloads)
.. |docker_ifcnv| image:: https://quay.io/repository/biocontainers/ifcnv/status
   :target: https://quay.io/repository/biocontainers/ifcnv
.. _`ifcnv/tags`: https://quay.io/repository/biocontainers/ifcnv?tab=tags


.. raw:: html

    <script>
        var package = "ifcnv";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ifcnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ifcnv/README.html