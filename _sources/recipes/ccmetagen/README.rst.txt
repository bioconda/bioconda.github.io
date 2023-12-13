:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccmetagen'
.. highlight: bash

ccmetagen
=========

.. conda:recipe:: ccmetagen
   :replaces_section_title:
   :noindex:

   CCMetagen\: comprehensive and accurate identification of eukaryotes and prokaryotes in metagenomic data.

   :homepage: https://github.com/vrmarcelino/CCMetagen
   :license: GPL3 / GPL3
   :recipe: /`ccmetagen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccmetagen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccmetagen/meta.yaml>`_

   


.. conda:package:: ccmetagen

   |downloads_ccmetagen| |docker_ccmetagen|

   :versions:
      
      

      ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.5-0``

      

   
   :depends ete3: 
   :depends kma: ``>=1.3``
   :depends krona: 
   :depends pandas: 
   :depends python: 
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

      mamba install ccmetagen

   and update with::

      mamba update ccmetagen

  To create a new environment, run::

      mamba create --name myenvname ccmetagen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ccmetagen:<tag>

   (see `ccmetagen/tags`_ for valid values for ``<tag>``)


.. |downloads_ccmetagen| image:: https://img.shields.io/conda/dn/bioconda/ccmetagen.svg?style=flat
   :target: https://anaconda.org/bioconda/ccmetagen
   :alt:   (downloads)
.. |docker_ccmetagen| image:: https://quay.io/repository/biocontainers/ccmetagen/status
   :target: https://quay.io/repository/biocontainers/ccmetagen
.. _`ccmetagen/tags`: https://quay.io/repository/biocontainers/ccmetagen?tab=tags


.. raw:: html

    <script>
        var package = "ccmetagen";
        var versions = ["1.4.2","1.4.1","1.4.0","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccmetagen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccmetagen/README.html