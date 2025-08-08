:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequana'
.. highlight: bash

sequana
=======

.. conda:recipe:: sequana
   :replaces_section_title:
   :noindex:

   A set of standalone application and snakemake pipelines dedicated to NGS \(new generation sequencing\) analysis.

   :homepage: https://sequana.readthedocs.io
   :developer docs: https://github.com/sequana/sequana
   :license: BSD / BSD-3-Clause
   :recipe: /`sequana <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana/meta.yaml>`_

   


.. conda:package:: sequana

   |downloads_sequana| |docker_sequana|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.19.2-0</code>,  <code>0.16.4-0</code>,  <code>0.16.3-0</code>,  <code>0.16.1-0</code>,  <code>0.15.4-0</code>,  <code>0.15.3-0</code>,  <code>0.15.2-0</code>,  <code>0.15.1-0</code>,  <code>0.14.3-0</code>,  </span></summary>
      

      ``0.19.2-0``,  ``0.16.4-0``,  ``0.16.3-0``,  ``0.16.1-0``,  ``0.15.4-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.2-0``,  ``0.8.2-2``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.0-0``,  ``0.6.3.post1-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends adjusttext: 
   :depends aiohttp: 
   :depends bioservices: ``>=1.10.0``
   :depends brokenaxes: 
   :depends bx-python: 
   :depends click: ``>=8.1.8``
   :depends colorlog: ``>=6.9.0``
   :depends colormap: 
   :depends cookiecutter: ``<2``
   :depends cython: 
   :depends deprecated: 
   :depends docutils: 
   :depends easydev: 
   :depends gseapy: 
   :depends itolapi: 
   :depends lxml: 
   :depends matplotlib-base: ``>3``
   :depends matplotlib-venn: 
   :depends mock: 
   :depends multiqc: ``>=1.18,<=1.27``
   :depends natsort: ``>=8.4.0``
   :depends packaging: 
   :depends pandas: ``>=2.2.3``
   :depends plotly: 
   :depends psutil: 
   :depends pulp: ``<2.8.0``
   :depends pykwalify: 
   :depends pysam: ``>=0.22.1``
   :depends python: ``>=3.10``
   :depends python-kaleido: ``>=0.1``
   :depends rich-click: 
   :depends ruamel.yaml: ``>=0.16.0``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn-base: 
   :depends selenium: 
   :depends snakemake-minimal: ``<8``
   :depends statsmodels: 
   :depends tqdm: 
   :depends upsetplot: 
   :depends vcfpy: 
   :depends xlrd: 
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

      mamba install sequana

   and update with::

      mamba update sequana

  To create a new environment, run::

      mamba create --name myenvname sequana

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sequana:<tag>

   (see `sequana/tags`_ for valid values for ``<tag>``)


.. |downloads_sequana| image:: https://img.shields.io/conda/dn/bioconda/sequana.svg?style=flat
   :target: https://anaconda.org/bioconda/sequana
   :alt:   (downloads)
.. |docker_sequana| image:: https://quay.io/repository/biocontainers/sequana/status
   :target: https://quay.io/repository/biocontainers/sequana
.. _`sequana/tags`: https://quay.io/repository/biocontainers/sequana?tab=tags


.. raw:: html

    <script>
        var package = "sequana";
        var versions = ["0.19.2","0.16.4","0.16.3","0.16.1","0.15.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequana/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequana/README.html