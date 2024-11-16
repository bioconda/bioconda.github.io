:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'argo'
.. highlight: bash

argo
====

.. conda:recipe:: argo
   :replaces_section_title:
   :noindex:

   Argo\: species\-resolved profiling of antibiotic resistance genes in complex metagenomes through long\-read overlapping

   :homepage: https://github.com/xinehc/argo
   :license: MIT / MIT
   :recipe: /`argo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argo/meta.yaml>`_

   


.. conda:package:: argo

   |downloads_argo| |docker_argo|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.1-0``

      

   
   :depends diamond: ``2.1.8``
   :depends melon: ``>=0.2.0``
   :depends python: ``>=3.7``
   :depends scikit-learn: 
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

      mamba install argo

   and update with::

      mamba update argo

  To create a new environment, run::

      mamba create --name myenvname argo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/argo:<tag>

   (see `argo/tags`_ for valid values for ``<tag>``)


.. |downloads_argo| image:: https://img.shields.io/conda/dn/bioconda/argo.svg?style=flat
   :target: https://anaconda.org/bioconda/argo
   :alt:   (downloads)
.. |docker_argo| image:: https://quay.io/repository/biocontainers/argo/status
   :target: https://quay.io/repository/biocontainers/argo
.. _`argo/tags`: https://quay.io/repository/biocontainers/argo?tab=tags


.. raw:: html

    <script>
        var package = "argo";
        var versions = ["0.1.3","0.1.2","0.1.1","0.1.0","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/argo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/argo/README.html