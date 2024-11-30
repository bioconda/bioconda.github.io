:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgat-report'
.. highlight: bash

cgat-report
===========

.. conda:recipe:: cgat-report
   :replaces_section_title:
   :noindex:

   A report generator in python based on sphinx

   :homepage: https://github.com/AndreasHeger/CGATReport
   :license: BSD
   :recipe: /`cgat-report <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-report>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-report/meta.yaml>`_

   


.. conda:package:: cgat-report

   |downloads_cgat-report| |docker_cgat-report|

   :versions:
      
      

      ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.1-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.6.1-1``,  ``0.3.7-1``,  ``0.3.7-0``

      

   
   :depends bokeh: 
   :depends docutils: 
   :depends future: 
   :depends matplotlib-base: ``>=2.0``
   :depends matplotlib-venn: 
   :depends nose: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pillow: 
   :depends python: 
   :depends scipy: 
   :depends seaborn: 
   :depends six: 
   :depends sphinx: 
   :depends sqlalchemy: 
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

      mamba install cgat-report

   and update with::

      mamba update cgat-report

  To create a new environment, run::

      mamba create --name myenvname cgat-report

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cgat-report:<tag>

   (see `cgat-report/tags`_ for valid values for ``<tag>``)


.. |downloads_cgat-report| image:: https://img.shields.io/conda/dn/bioconda/cgat-report.svg?style=flat
   :target: https://anaconda.org/bioconda/cgat-report
   :alt:   (downloads)
.. |docker_cgat-report| image:: https://quay.io/repository/biocontainers/cgat-report/status
   :target: https://quay.io/repository/biocontainers/cgat-report
.. _`cgat-report/tags`: https://quay.io/repository/biocontainers/cgat-report?tab=tags


.. raw:: html

    <script>
        var package = "cgat-report";
        var versions = ["0.9.1","0.9.0","0.8.4","0.8.1","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-report/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-report/README.html