:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioblend'
.. highlight: bash

bioblend
========

.. conda:recipe:: bioblend
   :replaces_section_title:
   :noindex:

   A Python library for interacting with the Galaxy API

   :homepage: https://bioblend.readthedocs.org/
   :license: MIT / MIT License
   :recipe: /`bioblend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioblend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioblend/meta.yaml>`_

   


.. conda:package:: bioblend

   |downloads_bioblend| |docker_bioblend|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.18.0-0</code>,  <code>0.17.0-0</code>,  <code>0.16.0-0</code>,  <code>0.15.0-0</code>,  <code>0.14.0-0</code>,  <code>0.13.0-0</code>,  </span></summary>
      

      ``1.1.1-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.8.0-0``,  ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3.7``
   :depends requests: ``>=2.20.0``
   :depends requests-toolbelt: ``>=0.5.1,!=0.9.0``
   :depends tuspy: 
   :depends typing-extensions: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioblend

   and update with::

      conda update bioblend

   or use the docker container::

      docker pull quay.io/biocontainers/bioblend:<tag>

   (see `bioblend/tags`_ for valid values for ``<tag>``)


.. |downloads_bioblend| image:: https://img.shields.io/conda/dn/bioconda/bioblend.svg?style=flat
   :target: https://anaconda.org/bioconda/bioblend
   :alt:   (downloads)
.. |docker_bioblend| image:: https://quay.io/repository/biocontainers/bioblend/status
   :target: https://quay.io/repository/biocontainers/bioblend
.. _`bioblend/tags`: https://quay.io/repository/biocontainers/bioblend?tab=tags


.. raw:: html

    <script>
        var package = "bioblend";
        var versions = ["1.1.1","1.0.1","1.0.0","0.18.0","0.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioblend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioblend/README.html