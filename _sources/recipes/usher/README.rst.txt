:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'usher'
.. highlight: bash

usher
=====

.. conda:recipe:: usher
   :replaces_section_title:
   :noindex:

   Ultrafast Sample Placement on Existing Trees \(UShER\)

   :homepage: https://github.com/yatisht/usher
   :license: MIT / MIT
   :recipe: /`usher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/usher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/usher/meta.yaml>`_

   


.. conda:package:: usher

   |downloads_usher| |docker_usher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.8-4</code>,  <code>0.4.8-0</code>,  <code>0.4.7-0</code>,  <code>0.4.6-0</code>,  <code>0.4.4-0</code>,  </span></summary>
      

      ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.8-4``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends isa-l: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libprotobuf: ``>=3.15.8,<3.16.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends mafft: 
   :depends openmpi: ``>=4.1.2,<5.0a0``
   :depends openssh: 
   :depends ucsc-fatovcf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install usher

   and update with::

      conda update usher

   or use the docker container::

      docker pull quay.io/biocontainers/usher:<tag>

   (see `usher/tags`_ for valid values for ``<tag>``)


.. |downloads_usher| image:: https://img.shields.io/conda/dn/bioconda/usher.svg?style=flat
   :target: https://anaconda.org/bioconda/usher
   :alt:   (downloads)
.. |docker_usher| image:: https://quay.io/repository/biocontainers/usher/status
   :target: https://quay.io/repository/biocontainers/usher
.. _`usher/tags`: https://quay.io/repository/biocontainers/usher?tab=tags


.. raw:: html

    <script>
        var package = "usher";
        var versions = ["0.5.2","0.5.1","0.5.0","0.5.0","0.4.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/usher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/usher/README.html