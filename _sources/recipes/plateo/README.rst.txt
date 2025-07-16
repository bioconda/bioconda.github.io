:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plateo'
.. highlight: bash

plateo
======

.. conda:recipe:: plateo
   :replaces_section_title:
   :noindex:

   Read\/write microplate and picklist data for lab automation

   :homepage: https://github.com/Edinburgh-Genome-Foundry/Plateo
   :documentation: https://github.com/Edinburgh-Genome-Foundry/Plateo/blob/v0.3.1/README.rst
   
   :license: MIT / MIT
   :recipe: /`plateo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plateo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plateo/meta.yaml>`_

   


.. conda:package:: plateo

   |downloads_plateo| |docker_plateo|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends flametree: 
   :depends fuzzywuzzy: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pdf-reports: 
   :depends python: ``>=3.9``
   :depends sequenticon: 
   :depends tqdm: 
   :depends xlrd: 
   :depends xlwt: 
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

      mamba install plateo

   and update with::

      mamba update plateo

  To create a new environment, run::

      mamba create --name myenvname plateo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plateo:<tag>

   (see `plateo/tags`_ for valid values for ``<tag>``)


.. |downloads_plateo| image:: https://img.shields.io/conda/dn/bioconda/plateo.svg?style=flat
   :target: https://anaconda.org/bioconda/plateo
   :alt:   (downloads)
.. |docker_plateo| image:: https://quay.io/repository/biocontainers/plateo/status
   :target: https://quay.io/repository/biocontainers/plateo
.. _`plateo/tags`: https://quay.io/repository/biocontainers/plateo?tab=tags


.. raw:: html

    <script>
        var package = "plateo";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plateo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plateo/README.html