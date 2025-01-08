:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusion-inspector'
.. highlight: bash

fusion-inspector
================

.. conda:recipe:: fusion-inspector
   :replaces_section_title:
   :noindex:

   FusionInspector is a component of the Trinity Cancer Transcriptome Analysis Toolkit \(CTAT\). FusionInspector assists in fusion transcript discovery by performing a supervised analysis of fusion predictions\, attempting to recover and re\-score evidence for such predictions. \- https\:\/\/github.com\/FusionInspector\/FusionInspector\/wiki

   :homepage: https://github.com/FusionInspector/FusionInspector
   :license: BSD-3-Clause
   :recipe: /`fusion-inspector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-inspector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusion-inspector/meta.yaml>`_

   


.. conda:package:: fusion-inspector

   |downloads_fusion-inspector| |docker_fusion-inspector|

   :versions:
      
      

      ``2.10.0-0``,  ``2.8.0-0``,  ``2.2.1-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends bzip2: 
   :depends gmap: ``>=2017.11.15``
   :depends htslib: 
   :depends perl: 
   :depends perl-db-file: 
   :depends perl-set-intervaltree: 
   :depends perl-uri: 
   :depends python: ``>=3``
   :depends requests: ``>=2.19.1``
   :depends samtools: ``>=1.3``
   :depends star: ``>=2.6.1b``
   :depends trinity: ``>=2.15.1``
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

      mamba install fusion-inspector

   and update with::

      mamba update fusion-inspector

  To create a new environment, run::

      mamba create --name myenvname fusion-inspector

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fusion-inspector:<tag>

   (see `fusion-inspector/tags`_ for valid values for ``<tag>``)


.. |downloads_fusion-inspector| image:: https://img.shields.io/conda/dn/bioconda/fusion-inspector.svg?style=flat
   :target: https://anaconda.org/bioconda/fusion-inspector
   :alt:   (downloads)
.. |docker_fusion-inspector| image:: https://quay.io/repository/biocontainers/fusion-inspector/status
   :target: https://quay.io/repository/biocontainers/fusion-inspector
.. _`fusion-inspector/tags`: https://quay.io/repository/biocontainers/fusion-inspector?tab=tags


.. raw:: html

    <script>
        var package = "fusion-inspector";
        var versions = ["2.10.0","2.8.0","2.2.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusion-inspector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusion-inspector/README.html