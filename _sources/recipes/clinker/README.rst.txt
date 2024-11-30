:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clinker'
.. highlight: bash

clinker
=======

.. conda:recipe:: clinker
   :replaces_section_title:
   :noindex:

   Clinker is a bioinformatics pipeline that generates a superTranscriptome from popular fusion finder outputs \(JAFFA\, tophatFusion\, SOAP\, deFUSE\, Pizzly\, etc\)\, that can be then be either viewed in genome viewers such as IGV or through the included plotting feature developed with GViz.

   :homepage: https://github.com/Oshlack/Clinker
   :license: MIT
   :recipe: /`clinker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinker/meta.yaml>`_

   


.. conda:package:: clinker

   |downloads_clinker| |docker_clinker|

   :versions:
      
      

      ``1.33-0``,  ``1.32-2``,  ``1.32-1``,  ``1.32-0``

      

   
   :depends bioconductor-biomart: 
   :depends bioconductor-gviz: 
   :depends bpipe: 
   :depends python: ``2.7.*``
   :depends samtools: 
   :depends star: ``>=2.5.3a``
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

      mamba install clinker

   and update with::

      mamba update clinker

  To create a new environment, run::

      mamba create --name myenvname clinker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clinker:<tag>

   (see `clinker/tags`_ for valid values for ``<tag>``)


.. |downloads_clinker| image:: https://img.shields.io/conda/dn/bioconda/clinker.svg?style=flat
   :target: https://anaconda.org/bioconda/clinker
   :alt:   (downloads)
.. |docker_clinker| image:: https://quay.io/repository/biocontainers/clinker/status
   :target: https://quay.io/repository/biocontainers/clinker
.. _`clinker/tags`: https://quay.io/repository/biocontainers/clinker?tab=tags


.. raw:: html

    <script>
        var package = "clinker";
        var versions = ["1.33","1.32","1.32","1.32"];
    </script>





Notes
-----
Wrapper script provided to indicate clinker is a bpipe pipeline\, provide example command from wiki\, and also a passthrough option.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clinker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clinker/README.html