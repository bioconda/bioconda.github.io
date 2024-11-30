:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'afplot'
.. highlight: bash

afplot
======

.. conda:recipe:: afplot
   :replaces_section_title:
   :noindex:

   Plot allele frequencies in VCF files

   :homepage: https://github.com/sndrtj/afplot
   :license: MIT / MIT
   :recipe: /`afplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afplot/meta.yaml>`_

   


.. conda:package:: afplot

   |downloads_afplot| |docker_afplot|

   :versions:
      
      

      ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends click: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends progressbar2: 
   :depends pysam: 
   :depends python: ``>=3.4``
   :depends pyvcf: 
   :depends seaborn: 
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

      mamba install afplot

   and update with::

      mamba update afplot

  To create a new environment, run::

      mamba create --name myenvname afplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/afplot:<tag>

   (see `afplot/tags`_ for valid values for ``<tag>``)


.. |downloads_afplot| image:: https://img.shields.io/conda/dn/bioconda/afplot.svg?style=flat
   :target: https://anaconda.org/bioconda/afplot
   :alt:   (downloads)
.. |docker_afplot| image:: https://quay.io/repository/biocontainers/afplot/status
   :target: https://quay.io/repository/biocontainers/afplot
.. _`afplot/tags`: https://quay.io/repository/biocontainers/afplot?tab=tags


.. raw:: html

    <script>
        var package = "afplot";
        var versions = ["0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/afplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/afplot/README.html