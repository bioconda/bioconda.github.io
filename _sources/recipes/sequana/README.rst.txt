:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequana'
.. highlight: bash

sequana
=======

.. conda:recipe:: sequana
   :replaces_section_title:
   :noindex:

   A set of standalone application and snakemake pipelines dedicated to NGS \(new generation sequencing\) analysis

   :homepage: http://sequana.readthedocs.io/
   :documentation: https://sequana.readthedocs.io
   
   :license: BSD / BSD 3-clause
   :recipe: /`sequana <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana/meta.yaml>`_

   


.. conda:package:: sequana

   |downloads_sequana| |docker_sequana|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.2-0</code>,  <code>0.14.1-0</code>,  <code>0.14.0-0</code>,  <code>0.13.2-0</code>,  <code>0.8.2-2</code>,  <code>0.8.2-1</code>,  <code>0.8.2-0</code>,  <code>0.7.1-2</code>,  <code>0.7.1-1</code>,  </span></summary>
      

      ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.2-0``,  ``0.8.2-2``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.0-0``,  ``0.6.3.post1-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends adjusttext: 
   :depends bioservices: ``>=1.10.0``
   :depends brokenaxes: 
   :depends bx-python: 
   :depends click: ``>=8.1.0``
   :depends colorlog: ``>=3.1.0``
   :depends colormap: 
   :depends cookiecutter: 
   :depends cython: 
   :depends docutils: 
   :depends easydev: ``>=0.11.1``
   :depends gseapy: 
   :depends itolapi: 
   :depends lxml: 
   :depends matplotlib-base: 
   :depends matplotlib-venn: 
   :depends mock: 
   :depends multiqc: ``<=1.11``
   :depends packaging: 
   :depends pandas: ``>=0.22``
   :depends plotly: 
   :depends psutil: 
   :depends pykwalify: 
   :depends pysam: ``>=0.16``
   :depends python: 
   :depends ruamel.yaml: ``>=0.16.0``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends snakemake: ``>=7.3.1``
   :depends statsmodels: 
   :depends tqdm: 
   :depends upsetplot: 
   :depends vcfpy: 
   :depends xlrd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sequana

   and update with::

      conda update sequana

   or use the docker container::

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
        var versions = ["0.14.2","0.14.1","0.14.0","0.13.2","0.8.2"];
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