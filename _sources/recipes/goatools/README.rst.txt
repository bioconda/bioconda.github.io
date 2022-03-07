:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goatools'
.. highlight: bash

goatools
========

.. conda:recipe:: goatools
   :replaces_section_title:
   :noindex:

   Python scripts to find enrichment of GO terms

   :homepage: https://github.com/tanghaibao/goatools
   :license: BSD / BSD-2-Clause
   :recipe: /`goatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goatools/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.31628`

   


.. conda:package:: goatools

   |downloads_goatools| |docker_goatools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.3-0</code>,  <code>1.1.12-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.0.15-0</code>,  <code>1.0.14-0</code>,  <code>1.0.13-0</code>,  <code>1.0.11-0</code>,  <code>1.0.6-1</code>,  </span></summary>
      

      ``1.2.3-0``,  ``1.1.12-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.11-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``0.9.9-0``,  ``0.9.7-0``,  ``0.9.5-0``,  ``0.8.12-0``,  ``0.8.11-0``,  ``0.8.9-0``,  ``0.8.4-0``,  ``0.7.11-1``,  ``0.7.11-0``,  ``0.6.10-0``,  ``0.6.4-0``,  ``0.5.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends numpy: 
   :depends pydot: 
   :depends pygraphviz: 
   :depends python: 
   :depends python-wget: 
   :depends requests: 
   :depends scipy: 
   :depends statsmodels: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install goatools

   and update with::

      conda update goatools

   or use the docker container::

      docker pull quay.io/biocontainers/goatools:<tag>

   (see `goatools/tags`_ for valid values for ``<tag>``)


.. |downloads_goatools| image:: https://img.shields.io/conda/dn/bioconda/goatools.svg?style=flat
   :target: https://anaconda.org/bioconda/goatools
   :alt:   (downloads)
.. |docker_goatools| image:: https://quay.io/repository/biocontainers/goatools/status
   :target: https://quay.io/repository/biocontainers/goatools
.. _`goatools/tags`: https://quay.io/repository/biocontainers/goatools?tab=tags


.. raw:: html

    <script>
        var package = "goatools";
        var versions = ["1.2.3","1.1.12","1.1.6","1.1.5","1.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goatools/README.html