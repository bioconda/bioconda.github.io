:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pm4ngs'
.. highlight: bash

pm4ngs
======

.. conda:recipe:: pm4ngs
   :replaces_section_title:
   :noindex:

   PM4NGS generates a standard organizational structure for Next Generation Sequencing \(ngs\) data analysis.

   :homepage: https://github.com/ncbi/pm4ngs
   :license: PUBLIC-DOMAIN / Public Domain
   :recipe: /`pm4ngs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pm4ngs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pm4ngs/meta.yaml>`_

   


.. conda:package:: pm4ngs

   |downloads_pm4ngs| |docker_pm4ngs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.2-0</code>,  <code>0.0.21-0</code>,  <code>0.0.20-0</code>,  <code>0.0.19-0</code>,  <code>0.0.18-0</code>,  <code>0.0.17-0</code>,  <code>0.0.16-0</code>,  <code>0.0.15-0</code>,  <code>0.0.14-0</code>,  </span></summary>
      

      ``0.1.2-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.19-0``,  ``0.0.18-0``,  ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconda2biocontainer: 
   :depends biopython: 
   :depends cookiecutter: 
   :depends cwltool: 
   :depends docker-py: 
   :depends gitpython: 
   :depends goenrichment: 
   :depends jupyter: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends pdf2image: 
   :depends python: ``>=3.9``
   :depends pyyaml: 
   :depends requests: 
   :depends scipy: 
   :depends seaborn-base: 
   :depends statsmodels: 
   :depends urllib3: 
   :depends xmltodict: 
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

      mamba install pm4ngs

   and update with::

      mamba update pm4ngs

  To create a new environment, run::

      mamba create --name myenvname pm4ngs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pm4ngs:<tag>

   (see `pm4ngs/tags`_ for valid values for ``<tag>``)


.. |downloads_pm4ngs| image:: https://img.shields.io/conda/dn/bioconda/pm4ngs.svg?style=flat
   :target: https://anaconda.org/bioconda/pm4ngs
   :alt:   (downloads)
.. |docker_pm4ngs| image:: https://quay.io/repository/biocontainers/pm4ngs/status
   :target: https://quay.io/repository/biocontainers/pm4ngs
.. _`pm4ngs/tags`: https://quay.io/repository/biocontainers/pm4ngs?tab=tags


.. raw:: html

    <script>
        var package = "pm4ngs";
        var versions = ["0.1.2","0.0.21","0.0.20","0.0.19","0.0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pm4ngs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pm4ngs/README.html