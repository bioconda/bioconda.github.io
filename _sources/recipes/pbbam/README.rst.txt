:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbbam'
.. highlight: bash

pbbam
=====

.. conda:recipe:: pbbam
   :replaces_section_title:
   :noindex:

   PacBio BAM C\+\+ library

   :homepage: https://github.com/PacificBiosciences/pbbam
   :license: BSD-3-Clause-Clear
   :recipe: /`pbbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbbam/meta.yaml>`_

   


.. conda:package:: pbbam

   |downloads_pbbam| |docker_pbbam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.0-0</code>,  <code>1.8.1-2</code>,  <code>1.8.1-1</code>,  <code>1.8.1-0</code>,  <code>1.7.0-1</code>,  <code>1.7.0-0</code>,  </span></summary>
      

      ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.8.1-2``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``0.23.0-0``,  ``0.19.0-1``,  ``0.19.0-0``,  ``0.18.0-4``,  ``0.18.0-1``,  ``0.18.0-0``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.15.1,<1.16.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends pbtk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbbam

   and update with::

      conda update pbbam

   or use the docker container::

      docker pull quay.io/biocontainers/pbbam:<tag>

   (see `pbbam/tags`_ for valid values for ``<tag>``)


.. |downloads_pbbam| image:: https://img.shields.io/conda/dn/bioconda/pbbam.svg?style=flat
   :target: https://anaconda.org/bioconda/pbbam
   :alt:   (downloads)
.. |docker_pbbam| image:: https://quay.io/repository/biocontainers/pbbam/status
   :target: https://quay.io/repository/biocontainers/pbbam
.. _`pbbam/tags`: https://quay.io/repository/biocontainers/pbbam?tab=tags


.. raw:: html

    <script>
        var package = "pbbam";
        var versions = ["2.1.0","2.1.0","2.1.0","2.0.0","1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbbam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbbam/README.html