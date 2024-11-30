:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbox-scan'
.. highlight: bash

tbox-scan
=========

.. conda:recipe:: tbox-scan
   :replaces_section_title:
   :noindex:

   tbox\-scan is for detecting and classifying T\-boxes in DNA sequences.

   :homepage: https://tbdb.io/
   :license: MIT
   :recipe: /`tbox-scan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbox-scan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbox-scan/meta.yaml>`_

   


.. conda:package:: tbox-scan

   |downloads_tbox-scan| |docker_tbox-scan|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends biopython: 
   :depends infernal: ``1.1.2.*``
   :depends pandas: 
   :depends perl: 
   :depends python: 
   :depends viennarna: 
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

      mamba install tbox-scan

   and update with::

      mamba update tbox-scan

  To create a new environment, run::

      mamba create --name myenvname tbox-scan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tbox-scan:<tag>

   (see `tbox-scan/tags`_ for valid values for ``<tag>``)


.. |downloads_tbox-scan| image:: https://img.shields.io/conda/dn/bioconda/tbox-scan.svg?style=flat
   :target: https://anaconda.org/bioconda/tbox-scan
   :alt:   (downloads)
.. |docker_tbox-scan| image:: https://quay.io/repository/biocontainers/tbox-scan/status
   :target: https://quay.io/repository/biocontainers/tbox-scan
.. _`tbox-scan/tags`: https://quay.io/repository/biocontainers/tbox-scan?tab=tags


.. raw:: html

    <script>
        var package = "tbox-scan";
        var versions = ["1.0.2","1.0.2","1.0.1","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbox-scan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbox-scan/README.html