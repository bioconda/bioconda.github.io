:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scte'
.. highlight: bash

scte
====

.. conda:recipe:: scte
   :replaces_section_title:
   :noindex:

   scTE builds genome indices for the fast alignment of reads to genes and TEs. 


   :homepage: https://github.com/JiekaiLab/scTE
   :license: MIT license
   :recipe: /`scte <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scte>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scte/meta.yaml>`_

   


.. conda:package:: scte

   |downloads_scte| |docker_scte|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends anndata: 
   :depends argparse: 
   :depends h5py: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scipy: 
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

      mamba install scte

   and update with::

      mamba update scte

  To create a new environment, run::

      mamba create --name myenvname scte

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scte:<tag>

   (see `scte/tags`_ for valid values for ``<tag>``)


.. |downloads_scte| image:: https://img.shields.io/conda/dn/bioconda/scte.svg?style=flat
   :target: https://anaconda.org/bioconda/scte
   :alt:   (downloads)
.. |docker_scte| image:: https://quay.io/repository/biocontainers/scte/status
   :target: https://quay.io/repository/biocontainers/scte
.. _`scte/tags`: https://quay.io/repository/biocontainers/scte?tab=tags


.. raw:: html

    <script>
        var package = "scte";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scte/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scte/README.html