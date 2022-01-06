:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'super-focus'
.. highlight: bash

super-focus
===========

.. conda:recipe:: super-focus
   :replaces_section_title:
   :noindex:

   SUPER\-FOCUS\: A tool for agile functional analysis of shotgun metagenomic data

   :homepage: https://edwards.sdsu.edu/SUPERFOCUS
   :developer docs: https://github.com/metageni/SUPER-FOCUS
   :license: GPL / GPL-3.0
   :recipe: /`super-focus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/super-focus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/super-focus/meta.yaml>`_

   


.. conda:package:: super-focus

   |downloads_super-focus| |docker_super-focus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5-0</code>,  <code>1.4.1-0</code>,  <code>1.4-0</code>,  <code>1.0-0</code>,  <code>0.35-0</code>,  <code>0.34-1</code>,  <code>0.34-0</code>,  <code>0.33-0</code>,  <code>0.32-1</code>,  </span></summary>
      

      ``1.5-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.0-0``,  ``0.35-0``,  ``0.34-1``,  ``0.34-0``,  ``0.33-0``,  ``0.32-1``,  ``0.32-0``,  ``0.31-0``,  ``0.30-0``,  ``0.29-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends diamond: 
   :depends kmer-jellyfish: 
   :depends numpy: ``>=1.12.1``
   :depends python: ``>=3``
   :depends rapsearch: 
   :depends scipy: 
   :depends setuptools: 
   :depends setuptools_scm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install super-focus

   and update with::

      conda update super-focus

   or use the docker container::

      docker pull quay.io/biocontainers/super-focus:<tag>

   (see `super-focus/tags`_ for valid values for ``<tag>``)


.. |downloads_super-focus| image:: https://img.shields.io/conda/dn/bioconda/super-focus.svg?style=flat
   :target: https://anaconda.org/bioconda/super-focus
   :alt:   (downloads)
.. |docker_super-focus| image:: https://quay.io/repository/biocontainers/super-focus/status
   :target: https://quay.io/repository/biocontainers/super-focus
.. _`super-focus/tags`: https://quay.io/repository/biocontainers/super-focus?tab=tags


.. raw:: html

    <script>
        var package = "super-focus";
        var versions = ["1.5","1.4.1","1.4","1.0","0.35"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/super-focus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/super-focus/README.html