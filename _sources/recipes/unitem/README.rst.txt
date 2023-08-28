:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unitem'
.. highlight: bash

unitem
======

.. conda:recipe:: unitem
   :replaces_section_title:
   :noindex:

   Ensemble binning strategies for combining the output of multiple binning methods.

   :homepage: https://github.com/dparks1134/UniteM
   :license: GPL3 / GPL-3.0-only
   :recipe: /`unitem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitem/meta.yaml>`_

   


.. conda:package:: unitem

   |downloads_unitem| |docker_unitem|

   :versions:
      
      

      ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``0.0.18-0``

      

   
   :depends maxbin2: ``>=2.2.7``
   :depends metabat2: ``>=2.15``
   :depends numpy: ``>=1.24``
   :depends python: ``>=3``
   :depends svgwrite: ``>=1.4.1``
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

      mamba install unitem

   and update with::

      mamba update unitem

  To create a new environment, run::

      mamba create --name myenvname unitem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unitem:<tag>

   (see `unitem/tags`_ for valid values for ``<tag>``)


.. |downloads_unitem| image:: https://img.shields.io/conda/dn/bioconda/unitem.svg?style=flat
   :target: https://anaconda.org/bioconda/unitem
   :alt:   (downloads)
.. |docker_unitem| image:: https://quay.io/repository/biocontainers/unitem/status
   :target: https://quay.io/repository/biocontainers/unitem
.. _`unitem/tags`: https://quay.io/repository/biocontainers/unitem?tab=tags


.. raw:: html

    <script>
        var package = "unitem";
        var versions = ["1.2.6","1.2.5","1.2.4","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unitem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unitem/README.html