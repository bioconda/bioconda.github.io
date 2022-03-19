:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kipoi'
.. highlight: bash

kipoi
=====

.. conda:recipe:: kipoi
   :replaces_section_title:
   :noindex:

   Kipoi\: model zoo for genomics

   :homepage: https://kipoi.org
   :documentation: https://kipoi.org/docs/
   
   :developer docs: https://github.com/kipoi/kipoi
   :license: MIT / MIT
   :recipe: /`kipoi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi/meta.yaml>`_

   Kipoi\: model zoo for genomics.


.. conda:package:: kipoi

   |downloads_kipoi| |docker_kipoi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.0-0</code>,  <code>0.6.36-0</code>,  <code>0.6.35-0</code>,  <code>0.6.34-0</code>,  </span></summary>
      

      ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.0-0``,  ``0.6.36-0``,  ``0.6.35-0``,  ``0.6.34-0``,  ``0.6.33-0``,  ``0.6.31-0``,  ``0.6.30-0``,  ``0.6.29-0``,  ``0.6.25-1``,  ``0.6.25-0``,  ``0.6.24-1``,  ``0.6.24-0``,  ``0.6.17-0``,  ``0.6.16-0``,  ``0.6.14-0``,  ``0.6.13-0``,  ``0.6.12-0``,  ``0.6.5-0``,  ``0.6.3-0``,  ``0.6.0-0``,  ``0.5.7-0``,  ``0.3.6-1``,  ``0.3.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends attrs: ``>=17.4.0``
   :depends colorlog: 
   :depends cookiecutter: ``>=1.6.0``
   :depends deprecation: ``>=2.0.6``
   :depends enum34: 
   :depends future: 
   :depends h5py: 
   :depends jinja2: 
   :depends kipoi-conda: ``>=0.1.6``
   :depends kipoi-utils: ``>=0.1.12``
   :depends numpy: 
   :depends pandas: ``>=0.21.0``
   :depends python: 
   :depends pyyaml: 
   :depends related: ``>=0.6.0``
   :depends tinydb: 
   :depends tqdm: 
   :depends urllib3: ``>=1.21.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kipoi

   and update with::

      conda update kipoi

   or use the docker container::

      docker pull quay.io/biocontainers/kipoi:<tag>

   (see `kipoi/tags`_ for valid values for ``<tag>``)


.. |downloads_kipoi| image:: https://img.shields.io/conda/dn/bioconda/kipoi.svg?style=flat
   :target: https://anaconda.org/bioconda/kipoi
   :alt:   (downloads)
.. |docker_kipoi| image:: https://quay.io/repository/biocontainers/kipoi/status
   :target: https://quay.io/repository/biocontainers/kipoi
.. _`kipoi/tags`: https://quay.io/repository/biocontainers/kipoi?tab=tags


.. raw:: html

    <script>
        var package = "kipoi";
        var versions = ["0.8.2","0.8.1","0.8.0","0.7.4","0.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoi/README.html