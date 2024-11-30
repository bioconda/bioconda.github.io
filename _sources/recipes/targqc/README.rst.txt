:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'targqc'
.. highlight: bash

targqc
======

.. conda:recipe:: targqc
   :replaces_section_title:
   :noindex:

   Target capture coverage QC

   :homepage: https://github.com/vladsaveliev/TargQC
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`targqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targqc/meta.yaml>`_

   


.. conda:package:: targqc

   |downloads_targqc| |docker_targqc|

   :versions:
      
      

      ``1.8.1-1``,  ``1.8.1-0``,  ``1.4.4-1``,  ``1.4.4-0``

      

   
   :depends beautifulsoup4: 
   :depends bedtools: ``>=2.25``
   :depends bwa: 
   :depends click: 
   :depends coverage: 
   :depends gffutils: 
   :depends ipyparallel: 
   :depends ipython: 
   :depends ipython-cluster-helper: 
   :depends joblib: 
   :depends lxml: 
   :depends natsort: 
   :depends nose: 
   :depends numpy: 
   :depends pandas: 
   :depends pip: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends qualimap: 
   :depends sambamba: ``>=0.7.0``
   :depends six: 
   :depends tempita: 
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

      mamba install targqc

   and update with::

      mamba update targqc

  To create a new environment, run::

      mamba create --name myenvname targqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/targqc:<tag>

   (see `targqc/tags`_ for valid values for ``<tag>``)


.. |downloads_targqc| image:: https://img.shields.io/conda/dn/bioconda/targqc.svg?style=flat
   :target: https://anaconda.org/bioconda/targqc
   :alt:   (downloads)
.. |docker_targqc| image:: https://quay.io/repository/biocontainers/targqc/status
   :target: https://quay.io/repository/biocontainers/targqc
.. _`targqc/tags`: https://quay.io/repository/biocontainers/targqc?tab=tags


.. raw:: html

    <script>
        var package = "targqc";
        var versions = ["1.8.1","1.8.1","1.4.4","1.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/targqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/targqc/README.html