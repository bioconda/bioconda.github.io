:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'referenceseeker'
.. highlight: bash

referenceseeker
===============

.. conda:recipe:: referenceseeker
   :replaces_section_title:
   :noindex:

   Rapid determination of appropriate reference genomes.

   :homepage: https://github.com/oschwengers/referenceseeker
   :license: GPL / GPLv3
   :recipe: /`referenceseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/referenceseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/referenceseeker/meta.yaml>`_
   :links: biotools: :biotools:`referenceseeker`

   


.. conda:package:: referenceseeker

   |downloads_referenceseeker| |docker_referenceseeker|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.3-0</code>,  <code>1.7.1-0</code>,  <code>1.6.4-0</code>,  <code>1.6.3-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6-0</code>,  <code>1.5-0</code>,  <code>1.4-0</code>,  </span></summary>
      

      ``1.7.3-0``,  ``1.7.1-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.78``
   :depends mash: ``>=2.3.0``
   :depends mummer4: ``>=4.0.0beta2``
   :depends python: ``>=3``
   :depends xopen: ``>=1.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install referenceseeker

   and update with::

      conda update referenceseeker

   or use the docker container::

      docker pull quay.io/biocontainers/referenceseeker:<tag>

   (see `referenceseeker/tags`_ for valid values for ``<tag>``)


.. |downloads_referenceseeker| image:: https://img.shields.io/conda/dn/bioconda/referenceseeker.svg?style=flat
   :target: https://anaconda.org/bioconda/referenceseeker
   :alt:   (downloads)
.. |docker_referenceseeker| image:: https://quay.io/repository/biocontainers/referenceseeker/status
   :target: https://quay.io/repository/biocontainers/referenceseeker
.. _`referenceseeker/tags`: https://quay.io/repository/biocontainers/referenceseeker?tab=tags


.. raw:: html

    <script>
        var package = "referenceseeker";
        var versions = ["1.7.3","1.7.1","1.6.4","1.6.3","1.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/referenceseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/referenceseeker/README.html