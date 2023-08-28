:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vartrix'
.. highlight: bash

vartrix
=======

.. conda:recipe:: vartrix
   :replaces_section_title:
   :noindex:

   VarTrix is a software tool for extracting single cell variant information
   from 10x Genomics single cell data.

   :homepage: https://github.com/10XGenomics/vartrix
   :license: MIT
   :recipe: /`vartrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vartrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vartrix/meta.yaml>`_

   


.. conda:package:: vartrix

   |downloads_vartrix| |docker_vartrix|

   :versions:
      
      

      ``1.1.22-3``,  ``1.1.22-2``,  ``1.1.22-1``,  ``1.1.22-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install vartrix

   and update with::

      mamba update vartrix

  To create a new environment, run::

      mamba create --name myenvname vartrix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vartrix:<tag>

   (see `vartrix/tags`_ for valid values for ``<tag>``)


.. |downloads_vartrix| image:: https://img.shields.io/conda/dn/bioconda/vartrix.svg?style=flat
   :target: https://anaconda.org/bioconda/vartrix
   :alt:   (downloads)
.. |docker_vartrix| image:: https://quay.io/repository/biocontainers/vartrix/status
   :target: https://quay.io/repository/biocontainers/vartrix
.. _`vartrix/tags`: https://quay.io/repository/biocontainers/vartrix?tab=tags


.. raw:: html

    <script>
        var package = "vartrix";
        var versions = ["1.1.22","1.1.22","1.1.22","1.1.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vartrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vartrix/README.html