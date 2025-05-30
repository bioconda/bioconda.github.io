:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ltr_harvest_parallel'
.. highlight: bash

ltr_harvest_parallel
====================

.. conda:recipe:: ltr_harvest_parallel
   :replaces_section_title:
   :noindex:

   Perl wrapper for parallel execution of LTR\_harvest

   :homepage: https://github.com/oushujun/LTR_HARVEST_parallel
   :license: MIT / MIT
   :recipe: /`ltr_harvest_parallel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_harvest_parallel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_harvest_parallel/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-019-1905-y`, doi: :doi:`10.1101/2022.10.09.511471`

   


.. conda:package:: ltr_harvest_parallel

   |downloads_ltr_harvest_parallel| |docker_ltr_harvest_parallel|

   :versions:
      
      

      ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends genometools-genometools: 
   :depends perl: 
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

      mamba install ltr_harvest_parallel

   and update with::

      mamba update ltr_harvest_parallel

  To create a new environment, run::

      mamba create --name myenvname ltr_harvest_parallel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ltr_harvest_parallel:<tag>

   (see `ltr_harvest_parallel/tags`_ for valid values for ``<tag>``)


.. |downloads_ltr_harvest_parallel| image:: https://img.shields.io/conda/dn/bioconda/ltr_harvest_parallel.svg?style=flat
   :target: https://anaconda.org/bioconda/ltr_harvest_parallel
   :alt:   (downloads)
.. |docker_ltr_harvest_parallel| image:: https://quay.io/repository/biocontainers/ltr_harvest_parallel/status
   :target: https://quay.io/repository/biocontainers/ltr_harvest_parallel
.. _`ltr_harvest_parallel/tags`: https://quay.io/repository/biocontainers/ltr_harvest_parallel?tab=tags


.. raw:: html

    <script>
        var package = "ltr_harvest_parallel";
        var versions = ["1.2","1.2","1.2","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ltr_harvest_parallel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ltr_harvest_parallel/README.html