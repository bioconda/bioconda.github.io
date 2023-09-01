:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-s4arrays'
.. highlight: bash

bioconductor-s4arrays
=====================

.. conda:recipe:: bioconductor-s4arrays
   :replaces_section_title:
   :noindex:

   Foundation of array\-like containers in Bioconductor

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/S4Arrays.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-s4arrays <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-s4arrays>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-s4arrays/meta.yaml>`_

   The S4Arrays package defines the Array virtual class to be extended by other S4 classes that wish to implement a container with an array\-like semantic. It also provides\: \(1\) low\-level functionality meant to help the developer of such container to implement basic operations like display\, subsetting\, or coercion of their array\-like objects to an ordinary matrix or array\, and \(2\) a framework that facilitates block processing of array\-like objects \(typically on\-disk objects\).


.. conda:package:: bioconductor-s4arrays

   |downloads_bioconductor-s4arrays| |docker_bioconductor-s4arrays|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-crayon: 
   :depends r-matrix: 
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

      mamba install bioconductor-s4arrays

   and update with::

      mamba update bioconductor-s4arrays

  To create a new environment, run::

      mamba create --name myenvname bioconductor-s4arrays

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-s4arrays:<tag>

   (see `bioconductor-s4arrays/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-s4arrays| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-s4arrays.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-s4arrays
   :alt:   (downloads)
.. |docker_bioconductor-s4arrays| image:: https://quay.io/repository/biocontainers/bioconductor-s4arrays/status
   :target: https://quay.io/repository/biocontainers/bioconductor-s4arrays
.. _`bioconductor-s4arrays/tags`: https://quay.io/repository/biocontainers/bioconductor-s4arrays?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-s4arrays";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-s4arrays/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-s4arrays/README.html