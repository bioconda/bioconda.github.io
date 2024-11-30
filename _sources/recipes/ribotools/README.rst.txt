:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotools'
.. highlight: bash

ribotools
=========

.. conda:recipe:: ribotools
   :replaces_section_title:
   :noindex:

   Ribo\-seq analysis tools associated with the Rp\-Bp package and more

   :homepage: https://github.com/eboileau/ribotools
   :documentation: https://ribotools.readthedocs.io/en/latest/
   
   :license: MIT
   :recipe: /`ribotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotools/meta.yaml>`_

   


.. conda:package:: ribotools

   |downloads_ribotools| |docker_ribotools|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends bioconductor-apeglm: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-ihw: 
   :depends htseq: ``>=2.0.2``
   :depends python: ``>=3.7,<3.11``
   :depends r-ashr: 
   :depends r-base: ``>=4.2.3``
   :depends r-devtools: 
   :depends r-openxlsx: 
   :depends r-r.utils: 
   :depends r-tidyverse: 
   :depends r-yaml: 
   :depends rpbp: ``>=3.0.1``
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

      mamba install ribotools

   and update with::

      mamba update ribotools

  To create a new environment, run::

      mamba create --name myenvname ribotools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ribotools:<tag>

   (see `ribotools/tags`_ for valid values for ``<tag>``)


.. |downloads_ribotools| image:: https://img.shields.io/conda/dn/bioconda/ribotools.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotools
   :alt:   (downloads)
.. |docker_ribotools| image:: https://quay.io/repository/biocontainers/ribotools/status
   :target: https://quay.io/repository/biocontainers/ribotools
.. _`ribotools/tags`: https://quay.io/repository/biocontainers/ribotools?tab=tags


.. raw:: html

    <script>
        var package = "ribotools";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotools/README.html