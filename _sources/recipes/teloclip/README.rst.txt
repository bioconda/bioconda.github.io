:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'teloclip'
.. highlight: bash

teloclip
========

.. conda:recipe:: teloclip
   :replaces_section_title:
   :noindex:

   A tool for the recovery of unassembled telomeres from soft\-clipped read alignments.

   :homepage: https://github.com/Adamtaranto/teloclip
   :documentation: https://github.com/Adamtaranto/teloclip/blob/0.3.2/README.md
   
   :license: MIT / MIT
   :recipe: /`teloclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/teloclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/teloclip/meta.yaml>`_

   


.. conda:package:: teloclip

   |downloads_teloclip| |docker_teloclip|

   :versions:
      
      

      ``0.3.2-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends pyfaidx: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends rich: 
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

      mamba install teloclip

   and update with::

      mamba update teloclip

  To create a new environment, run::

      mamba create --name myenvname teloclip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/teloclip:<tag>

   (see `teloclip/tags`_ for valid values for ``<tag>``)


.. |downloads_teloclip| image:: https://img.shields.io/conda/dn/bioconda/teloclip.svg?style=flat
   :target: https://anaconda.org/bioconda/teloclip
   :alt:   (downloads)
.. |docker_teloclip| image:: https://quay.io/repository/biocontainers/teloclip/status
   :target: https://quay.io/repository/biocontainers/teloclip
.. _`teloclip/tags`: https://quay.io/repository/biocontainers/teloclip?tab=tags


.. raw:: html

    <script>
        var package = "teloclip";
        var versions = ["0.3.2","0.2.0","0.1.1","0.1.0","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/teloclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/teloclip/README.html