:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'links'
.. highlight: bash

links
=====

.. conda:recipe:: links
   :replaces_section_title:
   :noindex:

   Long Interval Nucleotide K\-mer Scaffolder

   :homepage: https://github.com/bcgsc/LINKS
   :license: GPLv3
   :recipe: /`links <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/links>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/links/meta.yaml>`_

   


.. conda:package:: links

   |downloads_links| |docker_links|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.8.7-3</code>,  <code>1.8.7-2</code>,  <code>1.8.7-1</code>,  <code>1.8.7-0</code>,  <code>1.8.6-0</code>,  <code>1.8.4-0</code>,  </span></summary>
      

      ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.8.7-3``,  ``1.8.7-2``,  ``1.8.7-1``,  ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.4-0``,  ``1.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends make: 
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install links

   and update with::

      conda update links

   or use the docker container::

      docker pull quay.io/biocontainers/links:<tag>

   (see `links/tags`_ for valid values for ``<tag>``)


.. |downloads_links| image:: https://img.shields.io/conda/dn/bioconda/links.svg?style=flat
   :target: https://anaconda.org/bioconda/links
   :alt:   (downloads)
.. |docker_links| image:: https://quay.io/repository/biocontainers/links/status
   :target: https://quay.io/repository/biocontainers/links
.. _`links/tags`: https://quay.io/repository/biocontainers/links?tab=tags


.. raw:: html

    <script>
        var package = "links";
        var versions = ["2.0.1","2.0.1","2.0.0","1.8.7","1.8.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/links/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/links/README.html