:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isonform'
.. highlight: bash

isonform
========

.. conda:recipe:: isonform
   :replaces_section_title:
   :noindex:

   De novo construction of isoforms from long\-read data

   :homepage: https://github.com/aljpetri/isONform
   :license: GPL-3.0
   :recipe: /`isonform <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isonform>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isonform/meta.yaml>`_

   


.. conda:package:: isonform

   |downloads_isonform| |docker_isonform|

   :versions:
      
      

      ``0.3.4-0``

      

   
   :depends edlib: ``>=1.1.2``
   :depends networkx: ``>=2.7.1``
   :depends parasail-python: ``>=1.3.3``
   :depends python: 
   :depends recordclass: ``>=0.17.2``
   :depends spoa: 
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

      mamba install isonform

   and update with::

      mamba update isonform

  To create a new environment, run::

      mamba create --name myenvname isonform

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isonform:<tag>

   (see `isonform/tags`_ for valid values for ``<tag>``)


.. |downloads_isonform| image:: https://img.shields.io/conda/dn/bioconda/isonform.svg?style=flat
   :target: https://anaconda.org/bioconda/isonform
   :alt:   (downloads)
.. |docker_isonform| image:: https://quay.io/repository/biocontainers/isonform/status
   :target: https://quay.io/repository/biocontainers/isonform
.. _`isonform/tags`: https://quay.io/repository/biocontainers/isonform?tab=tags


.. raw:: html

    <script>
        var package = "isonform";
        var versions = ["0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isonform/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isonform/README.html