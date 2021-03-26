:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beagle-lib'
.. highlight: bash

beagle-lib
==========

.. conda:recipe:: beagle-lib
   :replaces_section_title:
   :noindex:

   general purpose library for evaluating the likelihood of sequence evolution on trees

   :homepage: https://github.com/beagle-dev/beagle-lib
   :license: GPL / GPL-3.0+
   :recipe: /`beagle-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle-lib/meta.yaml>`_

   


.. conda:package:: beagle-lib

   |downloads_beagle-lib| |docker_beagle-lib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.2-3</code>,  <code>3.1.2-2</code>,  <code>3.1.2-1</code>,  <code>3.1.2-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-0</code>,  <code>3.0.2-0</code>,  <code>2.1.2-7</code>,  <code>2.1.2-6</code>,  </span></summary>
      

      ``3.1.2-3``,  ``3.1.2-2``,  ``3.1.2-1``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.2-0``,  ``2.1.2-7``,  ``2.1.2-6``,  ``2.1.2-5``,  ``2.1.2-4``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends libtool: 
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install beagle-lib

   and update with::

      conda update beagle-lib

   or use the docker container::

      docker pull quay.io/biocontainers/beagle-lib:<tag>

   (see `beagle-lib/tags`_ for valid values for ``<tag>``)


.. |downloads_beagle-lib| image:: https://img.shields.io/conda/dn/bioconda/beagle-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/beagle-lib
   :alt:   (downloads)
.. |docker_beagle-lib| image:: https://quay.io/repository/biocontainers/beagle-lib/status
   :target: https://quay.io/repository/biocontainers/beagle-lib
.. _`beagle-lib/tags`: https://quay.io/repository/biocontainers/beagle-lib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beagle-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beagle-lib/README.html