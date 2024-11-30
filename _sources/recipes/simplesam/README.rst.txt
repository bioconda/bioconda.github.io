:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simplesam'
.. highlight: bash

simplesam
=========

.. conda:recipe:: simplesam
   :replaces_section_title:
   :noindex:

   Simple pure Python SAM parser and objects for working with SAM records

   :homepage: http://mattshirley.com
   :documentation: http://simplesam.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/mdshw5/simplesam
   :license: MIT
   :recipe: /`simplesam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simplesam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simplesam/meta.yaml>`_

   


.. conda:package:: simplesam

   |downloads_simplesam| |docker_simplesam|

   :versions:
      
      

      ``0.1.4.1-0``,  ``0.1.4.0-0``,  ``0.1.3.2-0``,  ``0.1.3.1-1``,  ``0.1.3.1-0``

      

   
   :depends python: 
   :depends setuptools: 
   :depends six: 
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

      mamba install simplesam

   and update with::

      mamba update simplesam

  To create a new environment, run::

      mamba create --name myenvname simplesam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/simplesam:<tag>

   (see `simplesam/tags`_ for valid values for ``<tag>``)


.. |downloads_simplesam| image:: https://img.shields.io/conda/dn/bioconda/simplesam.svg?style=flat
   :target: https://anaconda.org/bioconda/simplesam
   :alt:   (downloads)
.. |docker_simplesam| image:: https://quay.io/repository/biocontainers/simplesam/status
   :target: https://quay.io/repository/biocontainers/simplesam
.. _`simplesam/tags`: https://quay.io/repository/biocontainers/simplesam?tab=tags


.. raw:: html

    <script>
        var package = "simplesam";
        var versions = ["0.1.4.1","0.1.4.0","0.1.3.2","0.1.3.1","0.1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simplesam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simplesam/README.html