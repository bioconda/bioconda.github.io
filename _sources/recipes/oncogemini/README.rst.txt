:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oncogemini'
.. highlight: bash

oncogemini
==========

.. conda:recipe:: oncogemini
   :replaces_section_title:
   :noindex:

   OncoGEMINI is an adaptation of GEMINI intended for the improved identification of biologically and clincally relevant tumor variants from multi\-sample and longitudinal tumor sequencing data

   :homepage: https://github.com/fakedrtom/oncogemini
   :license: MIT
   :recipe: /`oncogemini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncogemini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncogemini/meta.yaml>`_

   


.. conda:package:: oncogemini

   |downloads_oncogemini| |docker_oncogemini|

   :versions:
      
      

      ``1.0.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends cyordereddict: ``0.2.2``
   :depends inheritance: ``>=0.1.3``
   :depends numpy: ``>=1.7.1,<=1.15.4``
   :depends pybedtools: ``>=0.6.2``
   :depends pysam: ``>=0.6``
   :depends python: 
   :depends pyyaml: ``>=3.10``
   :depends scipy: ``>=0.12.0``
   :depends sqlalchemy: ``>=1``
   :depends unidecode: ``>=0.04.14``
   :depends vcf2db: 
   :depends vcfanno: 
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

      mamba install oncogemini

   and update with::

      mamba update oncogemini

  To create a new environment, run::

      mamba create --name myenvname oncogemini

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oncogemini:<tag>

   (see `oncogemini/tags`_ for valid values for ``<tag>``)


.. |downloads_oncogemini| image:: https://img.shields.io/conda/dn/bioconda/oncogemini.svg?style=flat
   :target: https://anaconda.org/bioconda/oncogemini
   :alt:   (downloads)
.. |docker_oncogemini| image:: https://quay.io/repository/biocontainers/oncogemini/status
   :target: https://quay.io/repository/biocontainers/oncogemini
.. _`oncogemini/tags`: https://quay.io/repository/biocontainers/oncogemini?tab=tags


.. raw:: html

    <script>
        var package = "oncogemini";
        var versions = ["1.0.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oncogemini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oncogemini/README.html