:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iva'
.. highlight: bash

iva
===

.. conda:recipe:: iva
   :replaces_section_title:
   :noindex:

   Iterative Virus Assembler

   :homepage: https://github.com/sanger-pathogens/iva
   :license: GPL / GPLv3
   :recipe: /`iva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iva/meta.yaml>`_

   


.. conda:package:: iva

   |downloads_iva| |docker_iva|

   :versions:
      
      

      ``1.0.11-0``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``

      

   
   :depends kmc: 
   :depends mummer: 
   :depends networkx: ``>=1.7``
   :depends packaging: 
   :depends pyfastaq: ``>=3.10.0``
   :depends pysam: ``>=0.8.1``
   :depends python: ``>=3``
   :depends samtools: 
   :depends smalt: 
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

      mamba install iva

   and update with::

      mamba update iva

  To create a new environment, run::

      mamba create --name myenvname iva

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/iva:<tag>

   (see `iva/tags`_ for valid values for ``<tag>``)


.. |downloads_iva| image:: https://img.shields.io/conda/dn/bioconda/iva.svg?style=flat
   :target: https://anaconda.org/bioconda/iva
   :alt:   (downloads)
.. |docker_iva| image:: https://quay.io/repository/biocontainers/iva/status
   :target: https://quay.io/repository/biocontainers/iva
.. _`iva/tags`: https://quay.io/repository/biocontainers/iva?tab=tags


.. raw:: html

    <script>
        var package = "iva";
        var versions = ["1.0.11","1.0.9","1.0.9","1.0.9","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iva/README.html