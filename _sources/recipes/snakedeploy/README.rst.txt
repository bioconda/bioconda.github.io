:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakedeploy'
.. highlight: bash

snakedeploy
===========

.. conda:recipe:: snakedeploy
   :replaces_section_title:
   :noindex:

   Helper for deploying published Snakemake pipelines

   :homepage: https://github.com/snakemake/snakedeploy
   :license: MPL-2.0
   :recipe: /`snakedeploy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakedeploy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakedeploy/meta.yaml>`_

   


.. conda:package:: snakedeploy

   |downloads_snakedeploy| |docker_snakedeploy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.6-0</code>,  <code>0.8.5-0</code>,  <code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  </span></summary>
      

      ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.1.3-0``,  ``0.1.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends jinja2: 
   :depends packaging: 
   :depends pandas: 
   :depends pygithub: 
   :depends python: ``>=3.8``
   :depends pyyaml: 
   :depends requests: 
   :depends reretry: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakedeploy

   and update with::

      conda update snakedeploy

   or use the docker container::

      docker pull quay.io/biocontainers/snakedeploy:<tag>

   (see `snakedeploy/tags`_ for valid values for ``<tag>``)


.. |downloads_snakedeploy| image:: https://img.shields.io/conda/dn/bioconda/snakedeploy.svg?style=flat
   :target: https://anaconda.org/bioconda/snakedeploy
   :alt:   (downloads)
.. |docker_snakedeploy| image:: https://quay.io/repository/biocontainers/snakedeploy/status
   :target: https://quay.io/repository/biocontainers/snakedeploy
.. _`snakedeploy/tags`: https://quay.io/repository/biocontainers/snakedeploy?tab=tags


.. raw:: html

    <script>
        var package = "snakedeploy";
        var versions = ["0.8.6","0.8.5","0.8.4","0.8.3","0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakedeploy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakedeploy/README.html