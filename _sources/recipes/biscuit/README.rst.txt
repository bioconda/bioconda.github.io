:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biscuit'
.. highlight: bash

biscuit
=======

.. conda:recipe:: biscuit
   :replaces_section_title:
   :noindex:

   A utility for analyzing sodium bisulfite conversion\-based DNA methylation\/modification data

   :homepage: https://github.com/huishenlab/biscuit
   :license: MIT
   :recipe: /`biscuit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biscuit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biscuit/meta.yaml>`_

   


.. conda:package:: biscuit

   |downloads_biscuit| |docker_biscuit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2.20220113-0</code>,  <code>1.0.1.20211018-1</code>,  <code>1.0.1.20211018-0</code>,  <code>1.0.0.20210917-0</code>,  <code>0.3.16.20200420-4</code>,  <code>0.3.16.20200420-3</code>,  <code>0.3.16.20200420-2</code>,  <code>0.3.16.20200420-1</code>,  <code>0.3.16.20200420-0</code>,  </span></summary>
      

      ``1.0.2.20220113-0``,  ``1.0.1.20211018-1``,  ``1.0.1.20211018-0``,  ``1.0.0.20210917-0``,  ``0.3.16.20200420-4``,  ``0.3.16.20200420-3``,  ``0.3.16.20200420-2``,  ``0.3.16.20200420-1``,  ``0.3.16.20200420-0``,  ``0.3.15.20200318-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcurl: ``>=7.81.0,<8.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends ncurses: ``>=6.2,<6.3.0a0``
   :depends perl: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biscuit

   and update with::

      conda update biscuit

   or use the docker container::

      docker pull quay.io/biocontainers/biscuit:<tag>

   (see `biscuit/tags`_ for valid values for ``<tag>``)


.. |downloads_biscuit| image:: https://img.shields.io/conda/dn/bioconda/biscuit.svg?style=flat
   :target: https://anaconda.org/bioconda/biscuit
   :alt:   (downloads)
.. |docker_biscuit| image:: https://quay.io/repository/biocontainers/biscuit/status
   :target: https://quay.io/repository/biocontainers/biscuit
.. _`biscuit/tags`: https://quay.io/repository/biocontainers/biscuit?tab=tags


.. raw:: html

    <script>
        var package = "biscuit";
        var versions = ["1.0.2.20220113","1.0.1.20211018","1.0.1.20211018","1.0.0.20210917","0.3.16.20200420"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biscuit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biscuit/README.html