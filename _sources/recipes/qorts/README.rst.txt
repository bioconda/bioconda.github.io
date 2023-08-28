:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qorts'
.. highlight: bash

qorts
=====

.. conda:recipe:: qorts
   :replaces_section_title:
   :noindex:

   QoRTs toolkit for analysis\, quality control\, and data management of RNA\-Seq
   datasets.


   :homepage: http://hartleys.github.io/QoRTs/
   :license: Public Domain
   :recipe: /`qorts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qorts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qorts/meta.yaml>`_

   


.. conda:package:: qorts

   |downloads_qorts| |docker_qorts|

   :versions:
      
      

      ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.1.8-0``

      

   
   :depends openjdk: 
   :depends python: 
   :depends r-qorts: ``1.3.6``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install qorts

   and update with::

      mamba update qorts

  To create a new environment, run::

      mamba create --name myenvname qorts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qorts:<tag>

   (see `qorts/tags`_ for valid values for ``<tag>``)


.. |downloads_qorts| image:: https://img.shields.io/conda/dn/bioconda/qorts.svg?style=flat
   :target: https://anaconda.org/bioconda/qorts
   :alt:   (downloads)
.. |docker_qorts| image:: https://quay.io/repository/biocontainers/qorts/status
   :target: https://quay.io/repository/biocontainers/qorts
.. _`qorts/tags`: https://quay.io/repository/biocontainers/qorts?tab=tags


.. raw:: html

    <script>
        var package = "qorts";
        var versions = ["1.3.6","1.3.6","1.3.0","1.3.0","1.3.0"];
    </script>





Notes
-----
Based on the Picard equivalent\, found in the BioConda recipies repo.
Simplifies the call to the QoRTs JAVA utility so that you can just go \:\-
  qorts \[Java Options\] QC \[QoRTs options\] input.bam annotation.gtf outputDir
which is equivalent to \:\-
  java \[Java Options\] \-jar \/path\/to\/jar\/QoRTs.jar QC \[QoRTs options\] input.bam annotation.gtf outputDir


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qorts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qorts/README.html