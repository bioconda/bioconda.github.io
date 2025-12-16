:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panchip'
.. highlight: bash

panchip
=======

.. conda:recipe:: panchip
   :replaces_section_title:
   :noindex:

   Pan\-ChIP\-seq Analysis of Peak Sets

   :homepage: https://github.com/hanjunlee21/PanChIP
   :license: MIT
   :recipe: /`panchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panchip/meta.yaml>`_

   


.. conda:package:: panchip

   |downloads_panchip| |docker_panchip|

   :versions:
      
      

      ``3.0.14-0``

      

   
   :depends bash: 
   :depends coreutils: 
   :depends gawk: 
   :depends pandas: 
   :depends python: ``>=3.12,<3.13.0a0``
   :depends scipy: 
   :depends sed: 
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

      mamba install panchip

   and update with::

      mamba update panchip

  To create a new environment, run::

      mamba create --name myenvname panchip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panchip:<tag>

   (see `panchip/tags`_ for valid values for ``<tag>``)


.. |downloads_panchip| image:: https://img.shields.io/conda/dn/bioconda/panchip.svg?style=flat
   :target: https://anaconda.org/bioconda/panchip
   :alt:   (downloads)
.. |docker_panchip| image:: https://quay.io/repository/biocontainers/panchip/status
   :target: https://quay.io/repository/biocontainers/panchip
.. _`panchip/tags`: https://quay.io/repository/biocontainers/panchip?tab=tags


.. raw:: html

    <script>
        var package = "panchip";
        var versions = ["3.0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panchip/README.html