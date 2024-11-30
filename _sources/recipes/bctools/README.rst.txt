:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bctools'
.. highlight: bash

bctools
=======

.. conda:recipe:: bctools
   :replaces_section_title:
   :noindex:

   Tools for handling barcodes in NGS data.

   :homepage: https://github.com/dmaticzka/bctools
   :license: Apache 2.0
   :recipe: /`bctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bctools/meta.yaml>`_

   


.. conda:package:: bctools

   |downloads_bctools| |docker_bctools|

   :versions:
      
      

      ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends bedtools: 
   :depends biopython: 
   :depends datamash: 
   :depends future: 
   :depends perl: 
   :depends pybedtools: 
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

      mamba install bctools

   and update with::

      mamba update bctools

  To create a new environment, run::

      mamba create --name myenvname bctools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bctools:<tag>

   (see `bctools/tags`_ for valid values for ``<tag>``)


.. |downloads_bctools| image:: https://img.shields.io/conda/dn/bioconda/bctools.svg?style=flat
   :target: https://anaconda.org/bioconda/bctools
   :alt:   (downloads)
.. |docker_bctools| image:: https://quay.io/repository/biocontainers/bctools/status
   :target: https://quay.io/repository/biocontainers/bctools
.. _`bctools/tags`: https://quay.io/repository/biocontainers/bctools?tab=tags


.. raw:: html

    <script>
        var package = "bctools";
        var versions = ["0.2.2","0.2.2","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bctools/README.html