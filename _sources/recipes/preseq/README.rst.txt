:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'preseq'
.. highlight: bash

preseq
======

.. conda:recipe:: preseq
   :replaces_section_title:
   :noindex:

   Software for predicting library complexity and genome coverage in high\-throughput sequencing

   :homepage: https://github.com/smithlabcode/preseq
   :license: GNU GENERAL PUBLIC LICENSE
   :recipe: /`preseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/preseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/preseq/meta.yaml>`_

   


.. conda:package:: preseq

   |downloads_preseq| |docker_preseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.2-2</code>,  <code>3.1.2-1</code>,  <code>3.1.2-0</code>,  <code>2.0.3-5</code>,  <code>2.0.3-4</code>,  <code>2.0.3-3</code>,  <code>2.0.3-2</code>,  <code>2.0.3-1</code>,  <code>2.0.3-0</code>,  </span></summary>
      

      ``3.1.2-2``,  ``3.1.2-1``,  ``3.1.2-0``,  ``2.0.3-5``,  ``2.0.3-4``,  ``2.0.3-3``,  ``2.0.3-2``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends openblas: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install preseq

   and update with::

      conda update preseq

   or use the docker container::

      docker pull quay.io/biocontainers/preseq:<tag>

   (see `preseq/tags`_ for valid values for ``<tag>``)


.. |downloads_preseq| image:: https://img.shields.io/conda/dn/bioconda/preseq.svg?style=flat
   :target: https://anaconda.org/bioconda/preseq
   :alt:   (downloads)
.. |docker_preseq| image:: https://quay.io/repository/biocontainers/preseq/status
   :target: https://quay.io/repository/biocontainers/preseq
.. _`preseq/tags`: https://quay.io/repository/biocontainers/preseq?tab=tags


.. raw:: html

    <script>
        var package = "preseq";
        var versions = ["3.1.2","3.1.2","3.1.2","2.0.3","2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/preseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/preseq/README.html