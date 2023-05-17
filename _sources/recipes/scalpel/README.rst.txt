:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scalpel'
.. highlight: bash

scalpel
=======

.. conda:recipe:: scalpel
   :replaces_section_title:
   :noindex:

   Sensitive detection of INDELs \(INsertions and DELetions\)

   :homepage: http://scalpel.sourceforge.net/
   :license: MIT
   :recipe: /`scalpel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scalpel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scalpel/meta.yaml>`_

   


.. conda:package:: scalpel

   |downloads_scalpel| |docker_scalpel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.4-5</code>,  <code>0.5.4-4</code>,  <code>0.5.4-3</code>,  <code>0.5.4-2</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.3-2</code>,  <code>0.5.3-1</code>,  <code>0.5.3-0</code>,  </span></summary>
      

      ``0.5.4-5``,  ``0.5.4-4``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-2``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: 
   :depends bcftools: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scalpel

   and update with::

      conda update scalpel

   or use the docker container::

      docker pull quay.io/biocontainers/scalpel:<tag>

   (see `scalpel/tags`_ for valid values for ``<tag>``)


.. |downloads_scalpel| image:: https://img.shields.io/conda/dn/bioconda/scalpel.svg?style=flat
   :target: https://anaconda.org/bioconda/scalpel
   :alt:   (downloads)
.. |docker_scalpel| image:: https://quay.io/repository/biocontainers/scalpel/status
   :target: https://quay.io/repository/biocontainers/scalpel
.. _`scalpel/tags`: https://quay.io/repository/biocontainers/scalpel?tab=tags


.. raw:: html

    <script>
        var package = "scalpel";
        var versions = ["0.5.4","0.5.4","0.5.4","0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scalpel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scalpel/README.html