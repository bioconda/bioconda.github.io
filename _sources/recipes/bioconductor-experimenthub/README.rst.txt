:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-experimenthub'
.. highlight: bash

bioconductor-experimenthub
==========================

.. conda:recipe:: bioconductor-experimenthub
   :replaces_section_title:
   :noindex:

   Client to access ExperimentHub resources

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ExperimentHub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-experimenthub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthub/meta.yaml>`_

   This package provides a client for the Bioconductor ExperimentHub web resource. ExperimentHub provides a central location where curated data from experiments\, publications or training courses can be accessed. Each resource has associated metadata\, tags and date of modification. The client creates and manages a local cache of files retrieved enabling quick and reproducible access.


.. conda:package:: bioconductor-experimenthub

   |downloads_bioconductor-experimenthub| |docker_bioconductor-experimenthub|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  </span></summary>
      

      ``2.2.0-0``,  ``2.0.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-biocfilecache: ``>=2.2.0,<2.3.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biocmanager: 
   :depends r-curl: 
   :depends r-rappdirs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-experimenthub

   and update with::

      conda update bioconductor-experimenthub

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-experimenthub:<tag>

   (see `bioconductor-experimenthub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-experimenthub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-experimenthub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-experimenthub
   :alt:   (downloads)
.. |docker_bioconductor-experimenthub| image:: https://quay.io/repository/biocontainers/bioconductor-experimenthub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-experimenthub
.. _`bioconductor-experimenthub/tags`: https://quay.io/repository/biocontainers/bioconductor-experimenthub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-experimenthub";
        var versions = ["2.2.0","2.0.0","1.16.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-experimenthub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-experimenthub/README.html