:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'domino'
.. highlight: bash

domino
======

.. conda:recipe:: domino
   :replaces_section_title:
   :noindex:

   AMI algorithm with low rate of false calls

   :homepage: https://github.com/Shamir-Lab/DOMINO
   :license: MIT / MIT
   :recipe: /`domino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domino/meta.yaml>`_

   


.. conda:package:: domino

   |downloads_domino| |docker_domino|

   :versions:
      
      

      ``1.0.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends networkx: ``2.4.*``
   :depends numpy: ``1.18.1.*``
   :depends pandas: ``1.0.1.*``
   :depends pcst-fast: ``1.0.7.*``
   :depends python: ``>=3.6,<3.8``
   :depends python-louvain: ``0.14.*``
   :depends scipy: ``1.4.1.*``
   :depends statsmodels: ``0.11.0.*``
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

      mamba install domino

   and update with::

      mamba update domino

  To create a new environment, run::

      mamba create --name myenvname domino

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/domino:<tag>

   (see `domino/tags`_ for valid values for ``<tag>``)


.. |downloads_domino| image:: https://img.shields.io/conda/dn/bioconda/domino.svg?style=flat
   :target: https://anaconda.org/bioconda/domino
   :alt:   (downloads)
.. |docker_domino| image:: https://quay.io/repository/biocontainers/domino/status
   :target: https://quay.io/repository/biocontainers/domino
.. _`domino/tags`: https://quay.io/repository/biocontainers/domino?tab=tags


.. raw:: html

    <script>
        var package = "domino";
        var versions = ["1.0.0","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/domino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/domino/README.html