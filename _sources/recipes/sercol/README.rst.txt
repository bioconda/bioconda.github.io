:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sercol'
.. highlight: bash

sercol
======

.. conda:recipe:: sercol
   :replaces_section_title:
   :noindex:

   Rich collection class with grouping and filtering helpers

   :homepage: https://github.com/openvax/sercol
   :license: APACHE / Apache-2.0
   :recipe: /`sercol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sercol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sercol/meta.yaml>`_

   


.. conda:package:: sercol

   |downloads_sercol| |docker_sercol|

   :versions:
      
      

      ``1.0.0-0``,  ``0.1.4-0``

      

   
   :depends pandas: 
   :depends python: 
   :depends serializable: 
   :depends simplejson: 
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

      mamba install sercol

   and update with::

      mamba update sercol

  To create a new environment, run::

      mamba create --name myenvname sercol

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sercol:<tag>

   (see `sercol/tags`_ for valid values for ``<tag>``)


.. |downloads_sercol| image:: https://img.shields.io/conda/dn/bioconda/sercol.svg?style=flat
   :target: https://anaconda.org/bioconda/sercol
   :alt:   (downloads)
.. |docker_sercol| image:: https://quay.io/repository/biocontainers/sercol/status
   :target: https://quay.io/repository/biocontainers/sercol
.. _`sercol/tags`: https://quay.io/repository/biocontainers/sercol?tab=tags


.. raw:: html

    <script>
        var package = "sercol";
        var versions = ["1.0.0","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sercol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sercol/README.html