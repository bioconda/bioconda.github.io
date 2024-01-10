:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-chew'
.. highlight: bash

ngs-chew
========

.. conda:recipe:: ngs-chew
   :replaces_section_title:
   :noindex:

   Simple QC and sanity checking of germline NGS data

   :homepage: https://github.com/bihealth/ngs-chew
   :license: MIT / MIT
   :recipe: /`ngs-chew <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-chew>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-chew/meta.yaml>`_

   


.. conda:package:: ngs-chew

   |downloads_ngs-chew| |docker_ngs-chew|

   :versions:
      
      

      ``0.9.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``

      

   
   :depends attrs: 
   :depends bcftools: 
   :depends cattrs: 
   :depends click: 
   :depends logzero: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends samtools: 
   :depends scipy: 
   :depends tqdm: 
   :depends vcfpy: 
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

      mamba install ngs-chew

   and update with::

      mamba update ngs-chew

  To create a new environment, run::

      mamba create --name myenvname ngs-chew

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngs-chew:<tag>

   (see `ngs-chew/tags`_ for valid values for ``<tag>``)


.. |downloads_ngs-chew| image:: https://img.shields.io/conda/dn/bioconda/ngs-chew.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-chew
   :alt:   (downloads)
.. |docker_ngs-chew| image:: https://quay.io/repository/biocontainers/ngs-chew/status
   :target: https://quay.io/repository/biocontainers/ngs-chew
.. _`ngs-chew/tags`: https://quay.io/repository/biocontainers/ngs-chew?tab=tags


.. raw:: html

    <script>
        var package = "ngs-chew";
        var versions = ["0.9.2","0.8.1","0.8.0","0.7.1","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-chew/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-chew/README.html