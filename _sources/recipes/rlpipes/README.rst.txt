:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rlpipes'
.. highlight: bash

rlpipes
=======

.. conda:recipe:: rlpipes
   :replaces_section_title:
   :noindex:

   A standardized R\-loop\-mapping pipeline

   :homepage: https://github.com/Bishop-Laboratory/RLPipes
   :license: MIT / MIT
   :recipe: /`rlpipes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rlpipes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rlpipes/meta.yaml>`_

   


.. conda:package:: rlpipes

   |downloads_rlpipes| |docker_rlpipes|

   :versions:
      
      

      ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.1-0``,  ``0.9.0-0``

      

   
   :depends click: 
   :depends graphviz: ``5.0.0``
   :depends pandas: ``1.2.0``
   :depends pyfastx: 
   :depends pygraphviz: ``1.9``
   :depends pysam: ``>=0.17.0``
   :depends pysradb: 
   :depends python: 
   :depends snakemake-minimal: ``>=5.20.1,<=6.4.0``
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

      mamba install rlpipes

   and update with::

      mamba update rlpipes

  To create a new environment, run::

      mamba create --name myenvname rlpipes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rlpipes:<tag>

   (see `rlpipes/tags`_ for valid values for ``<tag>``)


.. |downloads_rlpipes| image:: https://img.shields.io/conda/dn/bioconda/rlpipes.svg?style=flat
   :target: https://anaconda.org/bioconda/rlpipes
   :alt:   (downloads)
.. |docker_rlpipes| image:: https://quay.io/repository/biocontainers/rlpipes/status
   :target: https://quay.io/repository/biocontainers/rlpipes
.. _`rlpipes/tags`: https://quay.io/repository/biocontainers/rlpipes?tab=tags


.. raw:: html

    <script>
        var package = "rlpipes";
        var versions = ["0.9.4","0.9.3","0.9.1","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rlpipes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rlpipes/README.html