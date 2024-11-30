:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimns_vgp'
.. highlight: bash

trimns_vgp
==========

.. conda:recipe:: trimns_vgp
   :replaces_section_title:
   :noindex:

   TrimNs is used to trim and remove fake cut sites from bionano hybrid scaffold data in the VGP pipeline.

   :homepage: https://github.com/VGP/vgp-assembly
   :license: BSD-3
   :recipe: /`trimns_vgp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimns_vgp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimns_vgp/meta.yaml>`_

   


.. conda:package:: trimns_vgp

   |downloads_trimns_vgp| |docker_trimns_vgp|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends biopython: ``<1.77*``
   :depends python: ``<3.8*``
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

      mamba install trimns_vgp

   and update with::

      mamba update trimns_vgp

  To create a new environment, run::

      mamba create --name myenvname trimns_vgp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trimns_vgp:<tag>

   (see `trimns_vgp/tags`_ for valid values for ``<tag>``)


.. |downloads_trimns_vgp| image:: https://img.shields.io/conda/dn/bioconda/trimns_vgp.svg?style=flat
   :target: https://anaconda.org/bioconda/trimns_vgp
   :alt:   (downloads)
.. |docker_trimns_vgp| image:: https://quay.io/repository/biocontainers/trimns_vgp/status
   :target: https://quay.io/repository/biocontainers/trimns_vgp
.. _`trimns_vgp/tags`: https://quay.io/repository/biocontainers/trimns_vgp?tab=tags


.. raw:: html

    <script>
        var package = "trimns_vgp";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimns_vgp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimns_vgp/README.html