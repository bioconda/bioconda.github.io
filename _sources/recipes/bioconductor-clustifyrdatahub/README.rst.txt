:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clustifyrdatahub'
.. highlight: bash

bioconductor-clustifyrdatahub
=============================

.. conda:recipe:: bioconductor-clustifyrdatahub
   :replaces_section_title:
   :noindex:

   External data sets for clustifyr in ExperimentHub

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/clustifyrdatahub.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-clustifyrdatahub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustifyrdatahub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustifyrdatahub/meta.yaml>`_

   References made from external single\-cell mRNA sequencing data sets\, stored as average gene expression matrices. For use with clustifyr \<https\:\/\/bioconductor.org\/packages\/clustifyr\> to assign cell type identities.


.. conda:package:: bioconductor-clustifyrdatahub

   |downloads_bioconductor-clustifyrdatahub| |docker_bioconductor-clustifyrdatahub|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-clustifyrdatahub

   and update with::

      mamba update bioconductor-clustifyrdatahub

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clustifyrdatahub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clustifyrdatahub:<tag>

   (see `bioconductor-clustifyrdatahub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clustifyrdatahub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clustifyrdatahub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clustifyrdatahub
   :alt:   (downloads)
.. |docker_bioconductor-clustifyrdatahub| image:: https://quay.io/repository/biocontainers/bioconductor-clustifyrdatahub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clustifyrdatahub
.. _`bioconductor-clustifyrdatahub/tags`: https://quay.io/repository/biocontainers/bioconductor-clustifyrdatahub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clustifyrdatahub";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clustifyrdatahub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clustifyrdatahub/README.html