:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perbase'
.. highlight: bash

perbase
=======

.. conda:recipe:: perbase
   :replaces_section_title:
   :noindex:

   Per\-base metrics on BAM\/CRAM files.

   :homepage: https://github.com/sstadick/perbase
   :license: MIT / MIT
   :recipe: /`perbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perbase/meta.yaml>`_

   


.. conda:package:: perbase

   |downloads_perbase| |docker_perbase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.2-0</code>,  <code>0.6.3-1</code>,  <code>0.6.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.0-0</code>,  <code>0.3.8-0</code>,  <code>0.3.7-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  </span></summary>
      

      ``0.7.2-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.4.2-0``,  ``0.4.0-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends openssl: ``>=1.1.1k,<1.1.2a``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perbase

   and update with::

      conda update perbase

   or use the docker container::

      docker pull quay.io/biocontainers/perbase:<tag>

   (see `perbase/tags`_ for valid values for ``<tag>``)


.. |downloads_perbase| image:: https://img.shields.io/conda/dn/bioconda/perbase.svg?style=flat
   :target: https://anaconda.org/bioconda/perbase
   :alt:   (downloads)
.. |docker_perbase| image:: https://quay.io/repository/biocontainers/perbase/status
   :target: https://quay.io/repository/biocontainers/perbase
.. _`perbase/tags`: https://quay.io/repository/biocontainers/perbase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perbase/README.html